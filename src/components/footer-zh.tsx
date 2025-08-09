import Link from 'next/link';

export function FooterZh() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">联系</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">隐私政策</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">服务条款</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">Cookies政策</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} 扣篮计算器.com. 保留所有权利。</p>
                </div>
            </div>
        </footer>
    );
}
