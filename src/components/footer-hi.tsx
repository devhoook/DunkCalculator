import Link from 'next/link';

export function FooterHi() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">संपर्क</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">गोपनीयता नीति</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">सेवा की शर्तें</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">कुकीज़ नीति</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} डंककैलकुलेटर.com. सर्वाधिकार सुरक्षित।</p>
                </div>
            </div>
        </footer>
    );
}
