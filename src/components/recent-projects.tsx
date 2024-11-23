import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Folder } from "lucide-react";
import type { Project } from "@/lib/data";
import { useNavigate } from "@/router";

const RecentProjects = ({ projects }: { projects: Project[] }) => {

  const navigate = useNavigate();

  const handleClick = (project: Project) => {
    navigate("/projects/:projectId", { params: { projectId: project.id } });
  };

  return (
    <Card className="w-full mx-auto rounded-lg overflow-hidden">
      <CardHeader className="bg-gray-50 border-b border-gray-200">
        <CardTitle className="text-lg font-bold ">
          Recent Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => handleClick(project)}
            className={`flex items-center justify-between p-4 ${index !== projects.length - 1 ? "border-b border-gray-200" : ""}`}
          >
            <div className="flex items-center space-x-4">
              <Folder className="h-6 w-6 text-blue-500" />
              <div>
                <p className="text-sm font-medium ">
                  {project.id}
                </p>
                <p className="text-md font-semibold ">
                  {project.name}
                </p>
                {project.lastUpdated && (
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>
                      Last updated:{" "}
                      {new Date(project.lastUpdated).toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentProjects;
