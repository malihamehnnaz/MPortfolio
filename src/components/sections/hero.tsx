
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
    <section id="home" className="relative w-full pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-24 lg:pb-32">
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
                    Innovation & Technology Leader
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay="0.2s">
                <p className="mt-4 max-w-xl text-md text-muted-foreground">
                    Generative AI | Cloud & Data Solutions | DevOps | Vector DB | Intelligent Automation
                </p>
            </AnimatedDiv>
            <AnimatedDiv delay="0.3s" className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <Button asChild size="lg">
                    <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                    <Link href="#projects">
                        View Projects
                        <ExternalLink className='ml-2' />
                    </Link>
                </Button>
            </AnimatedDiv>
            <AnimatedDiv delay="0.4s" className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                <a href="mailto:malihamehnazcse@gmail.com" className="group flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border transition-all">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-semibold text-sm">Email</p>
                        <p className="text-xs text-muted-foreground">malihamehnazcse@gmail.com</p>
                    </div>
                </a>
                 <a href="tel:+8801755839248" className="group flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border transition-all">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-semibold text-sm">Phone</p>
                        <p className="text-xs text-muted-foreground">+880 1755839248</p>
                    </div>
                </a>
                <a href="https://github.com/MalihaMehnaz" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border transition-all">
                    <Github className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-semibold text-sm">GitHub</p>
                        <p className="text-xs text-muted-foreground">/MalihaMehnaz</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/maliha-mehnaz-45763b156/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-primary/10 border border-border transition-all">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-semibold text-sm">LinkedIn</p>
                        <p className="text-xs text-muted-foreground">/maliha-mehnaz</p>
                    </div>
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
