import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';

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

export function Header() {
  return (
    <header className="py-4 border-b sticky top-0 bg-background/95 backdrop-blur-sm z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center gap-2">
            <BasketballIcon className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline text-primary">
                FreeDunkCalculator.com
            </span>
        </Link>
        <div className="flex items-center gap-2">
            <nav className="hidden md:flex gap-1">
            <Button variant="ghost" asChild>
                <Link href="/#calculator">Calculator</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/#article">Article</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/#faq">FAQ</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/#about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
                <Link href="/#contact">Contact</Link>
            </Button>
            </nav>
            <ModeToggle />
        </div>
      </div>
    </header>
  );
}
