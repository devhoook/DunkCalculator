import Link from 'next/link';

export function FooterId() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">Kontak</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">Ketentuan Layanan</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">Kebijakan Cookie</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. Semua hak dilindungi undang-undang.</p>
                </div>
            </div>
        </footer>
    );
}
