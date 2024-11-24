// useAutodeskAuth.ts
import { useState, useEffect, useCallback } from "react";

interface TokenResponse {
	access_token: string;
	token_type: string;
	expires_in: number;
}

interface CachedToken {
	token: string;
	expiresAt: number;
}

const CACHE_KEY = "autodesk_auth_token";

const useAutodeskAuth = (clientId: string, clientSecret: string) => {
	const [accessToken, setAccessToken] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const getCachedToken = useCallback((): CachedToken | null => {
		const cachedData = localStorage.getItem(CACHE_KEY);
		if (cachedData) {
			const { token, expiresAt } = JSON.parse(cachedData);
			if (expiresAt > Date.now()) {
				return { token, expiresAt };
			}
		}
		return null;
	}, []);

	const setCachedToken = useCallback((token: string, expiresIn: number) => {
		const expiresAt = Date.now() + expiresIn * 1000; // Convert seconds to milliseconds
		localStorage.setItem(CACHE_KEY, JSON.stringify({ token, expiresAt }));
	}, []);

	const getAccessToken = useCallback(async () => {
		setIsLoading(true);
		setError(null);

		try {
			const cachedToken = getCachedToken();
			if (cachedToken) {
				setAccessToken(cachedToken.token);
				setIsLoading(false);
				return;
			}

			const credentials = btoa(`${clientId}:${clientSecret}`);

			const response = await fetch(
				"https://developer.api.autodesk.com/authentication/v2/token",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
						Accept: "application/json",
						Authorization: `Basic ${credentials}`,
					},
					body: new URLSearchParams({
						grant_type: "client_credentials",
						scope: "data:read",
					}),
				},
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data: TokenResponse = await response.json();
			setAccessToken(data.access_token);
			setCachedToken(data.access_token, data.expires_in);
		} catch (err) {
			setError(
				err instanceof Error ? err.message : "An unknown error occurred",
			);
		} finally {
			setIsLoading(false);
		}
	}, [clientId, clientSecret, getCachedToken, setCachedToken]);

	useEffect(() => {
		getAccessToken();
	}, [getAccessToken]);

	const refreshToken = useCallback(() => {
		localStorage.removeItem(CACHE_KEY);
		getAccessToken();
	}, [getAccessToken]);

	return { accessToken, isLoading, error, refreshToken };
};

export default useAutodeskAuth;
