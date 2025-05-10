
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="py-20" id="projects">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-playfair text-center">Мои проекты</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="mx-auto">
            Показать больше работ
            <Icon name="Plus" className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group hover-scale">
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white">
            Подробнее
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, idx) => (
            <Badge key={idx} variant="secondary" className="bg-[#9b87f5]/10 text-[#9b87f5]">{tag}</Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectsSection;
