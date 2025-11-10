
"use client";

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedDiv } from './animated-div';

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl: string;
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
     <AnimatedDiv
      className="group relative w-full h-full flex flex-col overflow-hidden rounded-2xl border border-border/30 bg-background/80 p-6 shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-105 hover:-translate-y-2"
    >
      <div className="flex justify-end items-start mb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-3 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-300">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/80 text-secondary-foreground text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6">

        <Button asChild className={cn(
            "w-full text-white transition-all duration-300",
            isEven ? "bg-gradient-to-r from-purple-400 to-blue-800 hover:shadow-blue-500/50" : "bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-pink-500/50",
            "hover:shadow-lg hover:scale-105"
        )}>
          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            View Project Details
          </Link>
        </Button>
      </div>
    </AnimatedDiv>
  );
}
