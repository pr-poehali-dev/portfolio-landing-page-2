
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="py-20 min-h-screen flex items-center md:pl-24" id="projects">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Мои проекты</h2>
          <p className="text-muted-foreground mb-12 text-lg">Последние работы, которыми я горжусь</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div className="group mb-10" style={{ animationDelay: `${index * 0.2}s` }}>
      <div className="overflow-hidden rounded-lg mb-4 relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Посмотреть сайт
                <Icon name="ExternalLink" size={16} className="ml-2" />
              </Button>
            </a>
          ) : (
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              Подробнее
            </Button>
          )}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.tags.map((tag, idx) => (
          <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary font-normal">{tag}</Badge>
        ))}
      </div>
      
      <p className="text-muted-foreground">{project.description}</p>
    </div>
  );
};

export default ProjectsSection;
