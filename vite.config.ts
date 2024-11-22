import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import generouted from "@generouted/react-router/plugin";

export default defineConfig({
	plugins: [react(), generouted()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
