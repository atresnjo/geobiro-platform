// @ts-nocheck

import type React from 'react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface RevitViewerProps {
  documentId: string;
  token: string;
}

interface Viewable {
  name: string;
  type: string;
  data: any;
}

const RevitViewer: React.FC<RevitViewerProps> = ({ documentId, token }) => {
  const viewerDiv = useRef<HTMLDivElement>(null);
  const viewer = useRef<any>(null);
  const [viewables, setViewables] = useState<Viewable[]>([]);
  const [document, setDocument] = useState<any>(null);
  const [isViewerReady, setIsViewerReady] = useState(false);
  const [selectedViewIndex, setSelectedViewIndex] = useState<number | null>(null);

  const initializeViewer = useCallback(() => {
    if (viewerDiv.current && !viewer.current) {
      const options = {
        env: 'AutodeskProduction',
        getAccessToken: (callback: (token: string, expire: number) => void) => {
          callback(token, 3600);
        },
      };

      Autodesk.Viewing.Initializer(options, () => {
        const config = {
          extensions: ['Autodesk.DocumentBrowser'],
        };

        viewer.current = new Autodesk.Viewing.GuiViewer3D(viewerDiv.current, config);
        viewer.current.start();
        setIsViewerReady(true);
      });
    }
  }, [token]);

  useEffect(() => {
    initializeViewer();

    return () => {
      if (viewer.current) {
        viewer.current.finish();
      }
    };
  }, [initializeViewer]);

  useEffect(() => {
    if (isViewerReady && documentId) {
      loadDocument(documentId);
    }
  }, [isViewerReady, documentId]);

  const loadDocument = useCallback((docId: string) => {
    Autodesk.Viewing.Document.load(
      `urn:${docId}`,
      (doc: any) => {
        setDocument(doc);
        const views = doc.getRoot().search({ 'type': 'geometry' });
        console.log('Views:', views);
        const viewablesData = views.map((view: any) => ({
          name: view.name() || 'Unnamed View',
          type: getViewType(view),
          data: view
        }));
        setViewables(viewablesData);

        // Load the first view
        if (viewablesData.length > 0) {
          loadView(viewablesData[0], 0);
        }
      },
      (errorCode: any, errorMsg: string) => {
        console.error('Error loading document:', errorCode, errorMsg);
      }
    );
  }, []);

  const getViewType = (view: any): string => {
    if (typeof view.getType === 'function') {
      return view.getType();
    }
    if (typeof view.role === 'function') {
      return view.role();
    }
    if (view.type) {
      return view.type;
    }
    return 'Unknown';
  };

  const loadView = useCallback((viewable: Viewable, index: number) => {
    if (document && viewer.current && isViewerReady) {
      // Unload current model
      if (viewer.current.model) {
        viewer.current.unloadModel(viewer.current.model);
      }

      // Load new model
      viewer.current.loadDocumentNode(document, viewable.data).then(() => {
        // Fit to view after loading
        viewer.current.fitToView();
        setSelectedViewIndex(index);
      }).catch((error: any) => {
        console.error('Error loading view:', error);
      });
    } else {
      console.error('Document or viewer not initialized');
    }
  }, [document, isViewerReady]);

  return (
    <div className="flex h-screen">
      <ScrollArea className="w-80 border-r flex-shrink-0">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Views</h2>
          <Separator className="my-4" />
          {viewables.map((viewable, index) => (
            <Card
              key={index}
              className={`mb-4 cursor-pointer hover:bg-gray-100 transition-colors ${selectedViewIndex === index ? 'bg-blue-100' : ''}`}
              onClick={() => loadView(viewable, index)}
            >
              <CardHeader>
                <CardTitle className="text-lg">{viewable.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{viewable.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <div ref={viewerDiv} className="flex-grow relative">
        {!isViewerReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p className="text-lg">Initializing viewer...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevitViewer;
