import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
          Projects
        </h1>
        <p className="text-lg text-primary max-w-2xl mx-auto mb-8">
          This page has been moved to the main homepage.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="px-8 py-3"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default Projects;