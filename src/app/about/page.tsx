import { SubscriptionForm } from '@/components/subscription-form';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      <header className="py-8 border-b">
        <div className="container mx-auto px-4 text-center">
             <Link href="/" className="inline-block mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    FreeDunkCalculator.com
                </h1>
            </Link>
            <p className="text-lg text-muted-foreground">Learn the story behind the system.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="md:col-span-2 space-y-6 text-base md:text-lg text-foreground/90">
            <h2 className="text-3xl font-bold font-headline">Hi, I’m Adam, thanks for checking out my site.</h2>
            <p>
              I’ve always loved basketball but I only learned to dunk after I left college and joined a regular game with my smack talking co-workers.
            </p>
            <p>
              They said I wasted too much energy on defense. That fired up my need for the explosive jump power. Now, my game leaves the other guys sweating- because the improvements don’t start and end with dunking.
            </p>
            <p>
              I searched everywhere for these game changing techniques. Let me tell you- it feels good to have found a system that works for me. It’ll work for anyone else too, no matter how tall you are. Want to learn the secrets? Cool, this site’ll give you the alley-oop, get ready to jam it.
            </p>
            <p className="font-semibold text-primary">
              And remember, the best tips & secrets go exclusively to our subscribers, so make sure you sign up to the list on the right side of the page.
            </p>
          </div>
          <aside className="md:col-span-1">
            <div className="sticky top-8">
              <SubscriptionForm />
            </div>
          </aside>
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
         <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Back to Calculator</Link>
            <span>&bull;</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
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
