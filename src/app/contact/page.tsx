import { ContactForm } from '@/components/contact-form';
import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contact',
  robots: 'noindex, nofollow',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <div className="py-8 border-b">
          <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                  Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">We'd love to hear from you.</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
