import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Download, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsCard = () => {
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="flex justify-between items-center p-4 bg-gray-50">
        <CardTitle className="text-xl font-semibold text-gray-700">2D Drawings</CardTitle>
        <Button variant="ghost" size="icon">
          <Plus className="h-5 w-5 text-gray-500" />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <span className="text-sm text-gray-600">Floor plans</span>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4 text-gray-500" />
            </Button>
            <Button variant="ghost" size="icon">
              <Download className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 bg-gray-50">
        <Button variant="ghost" size="sm" className="text-gray-500">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Page 1/1
        </Button>
        <Button variant="ghost" size="sm" className="text-gray-500">
          Page 1/1
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectsCard;
