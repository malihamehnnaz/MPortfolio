
import { experiences } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedDiv } from '../animated-div';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-header">Professional Experience</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            My journey through the tech industry.
          </p>
        </AnimatedDiv>

        <div className="relative mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedDiv key={index}>
              <Card className="w-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-[1.02] hover:-translate-y-2 border border-border bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Link href={exp.companyUrl} target='_blank' rel='noopener noreferrer' className='flex-shrink-0'>
                      <div className="h-16 w-16 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-primary/20">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={56}
                            height={56}
                            className="h-14 w-14 object-contain"
                          />
                      </div>
                    </Link>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                         <CardTitle className="text-xl">{exp.role}</CardTitle>
                         <Badge variant="outline" className="mt-2 sm:mt-0 bg-secondary border-border/50 text-muted-foreground">{exp.period}</Badge>
                      </div>
                      <p className="font-semibold text-primary">{exp.company}</p>
                      {exp.companyDetail && <p className="text-sm text-muted-foreground">{exp.companyDetail}</p>}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pl-6 sm:pl-8">
                    {exp.description && (
                         <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>
                    )}
                    {(exp.responsibilities && exp.responsibilities.length > 0 || exp.achievements && exp.achievements.length > 0) && (
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {[...(exp.responsibilities || []), ...(exp.achievements || [])].map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                      </ul>
                    )}
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
