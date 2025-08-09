import Link from 'next/link';

export function FooterPt() {
    return (
        <footer className="bg-muted text-muted-foreground border-t">
            <div className="container mx-auto py-8 px-4">
                <div className="flex justify-center items-center gap-4 flex-wrap mb-4">
                    <Link href="/contact" className="hover:text-primary transition-colors">Contato</Link>
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Política de Privacidade</Link>
                    <Link href="/terms-of-service" className="hover:text-primary transition-colors">Termos de Serviço</Link>
                    <Link href="/cookies-policy" className="hover:text-primary transition-colors">Política de Cookies</Link>
                    <Link href="/dmca" className="hover:text-primary transition-colors">DMCA</Link>
                </div>
                <div className="text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} CalculadoraDeEnterradas.com. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
