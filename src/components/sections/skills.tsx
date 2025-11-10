
"use client";

import { skills } from '@/lib/data';
import { AnimatedDiv } from '../animated-div';
import { Card, CardContent } from '../ui/card';

const CategoryIcon = ({ label, color }: { label: string, color: string }) => (
  <div
    className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
    style={{ backgroundColor: color }}
  >
    {label}
  </div>
);

const SkillBadge = ({ name }: { name: string }) => (
  <div
    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full py-2 px-4 text-sm font-medium text-center"
  >
    {name}
  </div>
);

const skillCategories = [
  { name: "AI & Machine Learning", iconLabel: "AI", iconColor: "#6A5ACD" },
  { name: "Programming & Frameworks", iconLabel: "DEV", iconColor: "#4682B4" },
  { name: "Data Science & Analytics", iconLabel: "DATA", iconColor: "#3CB371" },
  { name: "MLOps & Integration", iconLabel: "OPS", iconColor: "#FFA500" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Skills</h2>
        </AnimatedDiv>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <AnimatedDiv key={category.name} delay={`${index * 100}ms`}>
              <Card className="h-full shadow-lg rounded-2xl bg-white dark:bg-card/50 border border-border/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <CategoryIcon label={category.iconLabel} color={category.iconColor} />
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{category.name}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {skills
                      .filter((s) => s.category === category.name)
                      .map((skill) => (
                        <SkillBadge key={skill.name} name={skill.name} />
                      ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
