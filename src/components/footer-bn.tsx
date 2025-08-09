import Link from 'next/link';

export function FooterBn() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">যোগাযোগ</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">গোপনীয়তা নীতি</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">পরিষেবার শর্তাবলী</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">কুকিজ নীতি</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} ফ্রিডাঙ্কক্যালকুলেটর.কম। সর্বস্বত্ব সংরক্ষিত।</p>
                </div>
            </div>
        </footer>
    );
}
