import Link from 'next/link';

export function FooterKo() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">연락처</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">개인정보 보호정책</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">서비스 약관</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">쿠키 정책</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. 모든 권리 보유.</p>
                </div>
            </div>
        </footer>
    );
}
