import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import { HeaderEs } from '@/components/header-es';
import { FooterEs } from '@/components/footer-es';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://freedunkcalculator.com/es'),
  title: {
    default: 'Calculadora de Mates | Herramienta Gratuita para Calcular tu Salto Vertical',
    template: '%s | Calculadora de Mates',
  },
  description: 'Usa nuestra calculadora de mates gratuita para saber si puedes hacer un mate. Introduce tu altura y salto vertical para calcular al instante si puedes llegar al aro y machacar el balón.',
  alternates: {
    canonical: '/es',
    languages: {
      'en': '/',
      'es': '/es',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-dvh bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeaderEs />
          <main className="flex-grow">
            {children}
          </main>
          <FooterEs />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
