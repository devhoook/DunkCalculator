import Link from 'next/link';

export function FooterJa() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">お問い合わせ</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">プライバシーポリシー</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">利用規約</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">クッキーポリシー</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. 無断複写・転載を禁じます。</p>
                </div>
            </div>
        </footer>
    );
}
