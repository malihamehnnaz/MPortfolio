
import { AnimatedDiv } from '../animated-div';
import { Card } from '../ui/card';
import { ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { value: '6+ Years', label: 'Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '12+', label: 'Team Members' },
    { value: '10k+', label: 'Users Impacted' },
  ];

  const expertise = [
    "Machine Learning Model Development",
    "LLM Integration & Fine-tuning",
    "Development & CI/CD Pipelines",
    "Computer Vision & NLP Applications",
    "Multi Modal, Multi Agent Systems", 
  ];

  return (
    <section id="about" className="w-full py-8 md:py-12">
      <div className="container mx-auto max-w-5xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-header">About Me</h2>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
            <div className="md:col-span-3">
                 <AnimatedDiv delay="0.1s">
                    <p className="text-sm text-muted-foreground text-left mb-4">
                        AI Solutions Architect with 6+ years of experience designing, deploying, and scaling production-grade AI/ML and generative systems on Azure.
                    </p>
                    <p className="text-sm text-muted-foreground text-left mb-4">
                       Proven record of improving enterprise efficiency and reducing cloud costs through optimized MLOps, LLM-based automation, and strategic AI adoption. 
                    </p>
                    <p className="text-sm text-muted-foreground text-left">
                        Experienced in building retrieval-augmented and agentic AI pipelines that transform data into measurable business outcomes.
                    </p>
                </AnimatedDiv>
            </div>
            <div className="md:col-span-2">
                <AnimatedDiv delay="0.2s">
                    <h3 className="text-lg font-semibold mb-3">Key Expertise</h3>
                    <ul className="space-y-2">
                        {expertise.map((item, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                                <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedDiv>
            </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat, index) => (
                <AnimatedDiv key={stat.label} delay={`${index * 100 + 300}ms`}>
                    <Card className="p-4 h-full flex flex-col justify-center items-center text-center shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 border border-border">
                        <p className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">{stat.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </Card>
                </AnimatedDiv>
            ))}
        </div>
      </div>
    </section>
  );
}
