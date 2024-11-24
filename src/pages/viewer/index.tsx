import RevitViewer from "@/components/revit-viewer";
import useAutodeskAuth from "@/lib/use-auth-hook";
import { useEffect } from "react";

export default function Viewer() {
  const clientId = 'Yj8m4DMHGgqgQnCTGdLlEE47lEkKZcptxGQ5LxaypHF2IFZB';
  const clientSecret = 'oG6rkWzZZ005RZGZGZ3TGJzXR9QRSMXnOmRubIod6BU0JoeAIQyV2BW4K1VlVGY2';

  const { accessToken, isLoading, error } = useAutodeskAuth(clientId, clientSecret)

  useEffect(() => {
    console.log('accessToken', accessToken);
    console.log('isLoading', isLoading);
    console.log('error', error);
  }, [accessToken, isLoading, error]);

  if (accessToken) {
    return (

      <>
        <RevitViewer
          token={accessToken}
          documentId="dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YWxsX21vZGVscy9tb2RlbC5ydnQ" />
      </>
    );
  }
}
