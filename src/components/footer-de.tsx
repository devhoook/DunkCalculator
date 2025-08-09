import Link from 'next/link';

export function FooterDe() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">Kontakt</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Datenschutzrichtlinie</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">Nutzungsbedingungen</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">Cookie-Richtlinie</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. Alle Rechte vorbehalten.</p>
                </div>
            </div>
        </footer>
    );
}
