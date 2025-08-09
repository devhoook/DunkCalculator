import Link from 'next/link';

export function FooterUr() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">رابطہ</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">رازداری کی پالیسی</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">سروس کی شرائط</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">کوکیز کی پالیسی</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} فریڈنک کیلکولیٹر.کام. تمام حقوق محفوظ ہیں۔</p>
                </div>
            </div>
        </footer>
    );
}
