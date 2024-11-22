import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Link, useNavigate, useParams } from "@/router";
import {
  ClipboardList,
  UsersIcon,
  DatabaseIcon,
  Download,
  Eye,
  Plus,
} from "lucide-react";
import { allProjects } from "@/lib/data";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Button } from "@/components/ui/button";
import React from "react";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";

function MapUpdater({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  React.useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);
  return null;
}

export default function Project() {
  const params = useParams("/projects/:projectId");
  const navigate = useNavigate();
  const selectedProject = allProjects.find(
    (project) => project.id === params.projectId,
  );

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="block">
              <BreadcrumbLink>
                <Link to={"/projects"}>Projects</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="block">
              <BreadcrumbLink href="#">
                {selectedProject?.id} - {selectedProject?.name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-5">
          <Card className="md:col-span-2">
            <CardContent className="p-0">
              <div className="h-[150px] rounded-lg overflow-hidden">
                <MapContainer
                  // @ts-ignore
                  center={[
                    selectedProject?.lat || 0,
                    selectedProject?.lng || 0,
                  ]}
                  zoom={13}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  {selectedProject && (
                    <>
                      <Marker
                        position={[selectedProject.lat, selectedProject.lng]}
                      >
                        <Popup>{selectedProject.name}</Popup>
                      </Marker>
                      <MapUpdater
                        lat={selectedProject.lat}
                        lng={selectedProject.lng}
                      />
                    </>
                  )}
                </MapContainer>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SQM</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Users</CardTitle>
              <UsersIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage</CardTitle>
              <DatabaseIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 GB</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {selectedProject?.cards.map((card, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xl font-bold flex items-center">
                  <card.icon className="h-6 w-6 mr-2 text-blue-500" />
                  {card.title}
                </CardTitle>
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent>
                {card.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center py-2 border-b last:border-b-0"
                  >
                    <span className="text-sm text-gray-600">{item.title}</span>
                    <div className="flex space-x-2">
                      {item.showView &&
                        (card.title === "3D BIM Models" ? (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate("/viewer")}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        ) : (
                          <EmbedPDF
                            companyIdentifier="yourcompany"
                            documentURL={`${window.location.origin}/docs/preview.pdf`}
                          >
                            <a
                              href={`${window.location.origin}/docs/preview.pdf`}
                            >
                              <Eye className="h-4 w-4 mt-3" />
                            </a>
                          </EmbedPDF>
                        ))}
                      {item.showDownload && (
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarInset>
  );
}
