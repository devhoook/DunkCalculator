import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}