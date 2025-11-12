
'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatedDiv } from '../animated-div';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Download, ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'profile-hero');

  return (
    <section id="home" className="relative w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedDiv className="relative flex lg:hidden justify-center" delay="0.4s">
            {heroImage && (
                <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="rounded-full object-cover shadow-2xl border-4 border-primary/20"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                     <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse-slow"></div>
                </div>
            )}
          </AnimatedDiv>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <AnimatedDiv>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                    Maliha Mehnaz
                </h1>
            </AnimatedDiv>
            <AnimatedDiv delay="0.1s">
                <p className="mt-3 text-2xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Innovation Team Manager
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay="0.2s">
                <p className="mt-4 max-w-xl text-md text-muted-foreground">
                MSc in Information Technology | AI/ML & Gene AI Leader | Azure Cloud & DevOps | Agentic Systems | LangGraph | Python | Docker | Intelligent Solutions
                </p>
            </AnimatedDiv>
            
                        <AnimatedDiv delay="0.4s" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl">
                                <a
                                    href="mailto:malihamehnazcse@gmail.com"
                                    aria-label="Send email to malihamehnazcse@gmail.com"
                                    className="group flex w-full h-full min-h-[96px] flex-col items-center justify-center gap-1 p-4 rounded-xl bg-secondary hover:bg-primary/10 border border-border transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                        <span className="font-semibold text-sm">Email</span>
                                    </div>
                                                        <p
                                                            className="text-xs sm:text-sm text-muted-foreground text-center truncate w-full max-w-[260px] mx-auto"
                                                            title="malihamehnazcse@gmail.com"
                                                        >
                                                            malihamehnazcse@gmail.com
                                                        </p>
                                </a>

                                <a
                                    href="tel:+8801755839248"
                                    aria-label="Call phone number +880 1755839248"
                                    className="group flex w-full h-full min-h-[96px] flex-col items-center justify-center gap-1 p-4 rounded-xl bg-secondary hover:bg-primary/10 border border-border transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                        <span className="font-semibold text-sm">Phone</span>
                                    </div>
                                                        <p
                                                            className="text-xs sm:text-sm text-muted-foreground text-center truncate w-full max-w-[260px] mx-auto"
                                                            title="+880 1755839248"
                                                        >
                                                            +880 1755839248
                                                        </p>
                                </a>

                                <a
                                    href="https://github.com/malihamehnnaz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open GitHub profile"
                                    className="group flex w-full h-full min-h-[96px] flex-col items-center justify-center gap-1 p-4 rounded-xl bg-secondary hover:bg-primary/10 border border-border transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <Github className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                        <span className="font-semibold text-sm">GitHub</span>
                                    </div>
                                                        <p
                                                            className="text-xs sm:text-sm text-muted-foreground text-center truncate w-full max-w-[260px] mx-auto"
                                                            title="@malihamehnnaz"
                                                        >
                                                            @malihamehnnaz
                                                        </p>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/maliha-mehnaz-dub/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Open LinkedIn profile"
                                    className="group flex w-full h-full min-h-[96px] flex-col items-center justify-center gap-1 p-4 rounded-xl bg-secondary hover:bg-primary/10 border border-border transition-all"
                                >
                                    <div className="flex items-center gap-2">
                                        <Linkedin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                                        <span className="font-semibold text-sm">LinkedIn</span>
                                    </div>
                                                        <p
                                                            className="text-xs sm:text-sm text-muted-foreground text-center truncate w-full max-w-[260px] mx-auto"
                                                            title="/in/maliha-mehnaz-dub"
                                                        >
                                                            /in/maliha-mehnaz-dub
                                                        </p>
                                </a>
          </AnimatedDiv>
          </div>
          <AnimatedDiv className="relative hidden lg:flex justify-center" delay="0.4s">
            {heroImage && (
                <div className="relative w-[450px] h-[450px]">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="rounded-full object-cover shadow-2xl border-4 border-primary/20"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                     <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-pulse-slow"></div>
                </div>
            )}
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
}
