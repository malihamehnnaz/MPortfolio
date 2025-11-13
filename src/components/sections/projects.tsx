
'use client';

import { useState } from 'react';
import { projects } from '@/lib/data';
import ProjectCard from '../project-card';
import { AnimatedDiv } from '../animated-div';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Use assignments persisted in data.ts (project.assignment). This makes assignments part of the codebase.
  // Projects import already includes an `assignment` field (null | 'Dexian' | 'Github').

  // Explicit categories: All projects, Dexian projects, and Github projects
  const categories = ['All', 'Dexian', 'Github'];

  const filteredProjects = projects.filter((project) => {
    const assignment = project.assignment as string[] | undefined | null;
    if (selectedCategory === 'All') return true;
    if (!assignment || !Array.isArray(assignment)) return false;
    return assignment.includes(selectedCategory);
  });

  return (
  <section id="projects" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-7xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center">
          <h2 className="text-lg font-bold tracking-tight sm:text-xl">My Recent Work</h2>
        </AnimatedDiv>

        <AnimatedDiv delay="0.1s" className="mt-8 mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                selectedCategory === category
                  ? 'bg-secondary text-secondary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-secondary/80'
              )}
            >
              {category}
            </Button>
          ))}
        </AnimatedDiv>
        
        {selectedCategory === 'Dexian' && (
          <div className="mt-4 mb-6 text-center">
            <p className="inline-block rounded-md px-3 py-1 text-sm text-muted-foreground bg-muted/5">
              These projects are in Dexian's GitHub Enterprise.
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
