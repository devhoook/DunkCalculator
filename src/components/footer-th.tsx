import Link from 'next/link';

export function FooterTh() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">ติดต่อ</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">นโยบายความเป็นส่วนตัว</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">ข้อกำหนดในการให้บริการ</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">นโยบายคุกกี้</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. สงวนลิขสิทธิ์.</p>
                </div>
            </div>
        </footer>
    );
}
