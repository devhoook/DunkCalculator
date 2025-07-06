import { ContactForm } from '@/components/contact-form';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact',
  robots: 'noindex, nofollow',
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-dvh flex flex-col">
      <header className="py-8 border-b">
        <div className="container mx-auto px-4 text-center">
             <Link href="/" className="inline-block mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    FreeDunkCalculator.com
                </h1>
            </Link>
            <p className="text-lg text-muted-foreground">Contact Us</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12 flex-grow">
        <ContactForm />
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
         <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Back to Calculator</Link>
            <span>&bull;</span>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <span>&bull;</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
