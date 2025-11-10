
import { AnimatedDiv } from '../animated-div';
import { ContactForm } from '../contact-form';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-secondary/50 dark:bg-card py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4 lg:px-8">
        <AnimatedDiv className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl section-header">Get in Touch</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </AnimatedDiv>
        <AnimatedDiv delay="0.1s" className="mt-12">
          <ContactForm />
        </AnimatedDiv>
      </div>
    </section>
  );
}
