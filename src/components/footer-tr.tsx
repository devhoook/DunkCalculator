import Link from 'next/link';

export function FooterTr() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">İletişim</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">Hizmet Şartları</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">Çerez Politikası</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. Tüm Hakları Saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
