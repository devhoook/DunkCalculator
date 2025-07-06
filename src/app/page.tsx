import DunkCalculator from '@/components/dunk-calculator';
import VerticalJumpArticle from '@/components/vertical-jump-article';
import Link from 'next/link';

const BasketballIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2c-2.76 3.33-4.43 7.85-4.43 10 0 2.15 1.67 6.67 4.43 10" />
    <path d="M12 2c2.76 3.33 4.43 7.85-4.43 10 0 2.15-1.67 6.67-4.43 10" />
    <path d="M2.52 10.32c5.96 1.14 12.98 1.14 18.96 0" />
    <path d="M2.52 13.68c5.96-1.14 12.98-1.14 18.96 0" />
  </svg>
);


export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
           <div className="flex justify-center items-center gap-3 mb-2">
            <BasketballIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold font-headline text-primary/90">
                FreeDunkCalculator.com
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Dunk Calculator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Use our free dunk calculator to find out if you can dunk. Enter your height, standing reach, and vertical leap to see how close you are to throwing it down. Track your progress and use our resources to improve your jump.
          </p>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 pb-12">
        <div className="space-y-12 md:space-y-16">
          <DunkCalculator />
          <VerticalJumpArticle />
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground">
        <div className="flex justify-center items-center gap-4">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          <span>&bull;</span>
          <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
