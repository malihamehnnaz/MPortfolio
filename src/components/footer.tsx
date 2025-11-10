'use client';

import { AnimatedDiv } from './animated-div';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full bg-transparent pt-4 pb-8">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8">
        <AnimatedDiv>
          <p className="text-2xl font-bold">
            <span className="animate-pulse bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Thank you for visiting!
            </span>
          </p>
        </AnimatedDiv>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Maliha Mehnaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
