

"use client";

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import {
  ReactJs, NextJs, NodeJs, TypeScript, JavaScript, MongoDb, PostgreSql, TailwindCss, Html, Python, FastApi,
  HTML5, CSS3, Chroma
} from "@/components/icons";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "React": ReactJs,
  "Next.js": NextJs,
  "Node.js": NodeJs,
  "TypeScript": TypeScript,
  "JavaScript": JavaScript,
  "MongoDB": MongoDb,
  "PostgreSQL": PostgreSql,
  "Tailwind CSS": TailwindCss,
  "HTML/CSS": Html,
  "Python": Python,
  "FastAPI": FastApi,
  "HTML5": HTML5,
  "CSS3": CSS3,
  "Chroma": Chroma,
  "Scikit-learn": () => <div className='h-10 w-10' />,
  "OpenCV": () => <div className='h-10 w-10' />,
  "Flask/FastAPI": () => <div className='h-10 w-10' />,
  "Java": () => <div className='h-10 w-10' />,
  "C++/C": () => <div className='h-10 w-10' />,
  "Pandas & NumPy": () => <div className='h-10 w-10' />,
  "Data Visualization": () => <div className='h-10 w-10' />,
  "Statistical Analysis": () => <div className='h-10 w-10' />,
  "SQL": () => <div className='h-10 w-10' />,
  "Jupyter Notebooks": () => <div className='h-10 w-10' />,
  "Matplotlib/Seaborn": () => <div className='h-10 w-10' />,
  "Data Preprocessing": () => <div className='h-10 w-10' />,
  "Model Deployment": () => <div className='h-10 w-10' />,
  "API Integration": () => <div className='h-10 w-10' />,
  "LLM APIs": () => <div className='h-10 w-10' />,
  "CI/CD Pipelines": () => <div className='h-10 w-10' />,
  "Model Monitoring": () => <div className='h-10 w-10' />,
  "Git/GitHub": () => <div className='h-10 w-10' />,
  "Cloud Platforms": () => <div className='h-10 w-10' />,
  "Machine Learning": () => <div className='h-10 w-10' />,
  "Deep Learning": () => <div className='h-10 w-10' />,
  "Neural Networks": () => <div className='h-10 w-10' />,
  "Computer Vision": () => <div className='h-10 w-10' />,
  "NLP": () => <div className='h-10 w-10' />,
  "Model Fine-Tuning": () => <div className='h-10 w-10' />,
  "Feature Engineering": () => <div className='h-10 w-10' />,
  "Pretrained Models": () => <div className='h-10 w-10' />,
  "Data Analysis": () => <div className='h-10 w-10' />,
};


type Skill = {
    name: string;
    category: string;
    logoUrl?: string;
};

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({ skill }: SkillCardProps) {
  const IconComponent = iconMap[skill.name];

  return (
    <Card
      className="flex h-full min-h-[100px] w-36 flex-col items-center justify-center p-3 text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:border-primary/20 bg-card/80 backdrop-blur-sm"
    >
      {skill.logoUrl ? (
        <Image src={skill.logoUrl} alt={`${skill.name} logo`} width={40} height={40} className="h-10 w-10 object-contain" />
      ) : IconComponent ? (
        <IconComponent className={cn('h-10 w-10', skill.name === 'Next.js' && 'dark:text-white text-black')} />
      ) : (
        <div className="h-10 w-10 flex items-center justify-center text-xl font-bold text-primary">?</div>
      )}
      <p className="mt-2 font-semibold text-xs">{skill.name}</p>
    </Card>
  );
}
