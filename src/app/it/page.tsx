import DunkCalculatorIt from '@/components/dunk-calculator-it';
import FaqIt from '@/components/faq-it';
import { AverageVerticalJumpArticleIt } from '@/app/it/blog/posts/average-vertical-jump-it';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormIt } from '@/components/subscription-form-it';
import { ContactFormIt } from '@/components/contact-form-it';
import HowItWorksIt from '@/components/how-it-works-it';
import { HeaderIt } from '@/components/header-it';
import { FooterIt } from '@/components/footer-it';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calcolatore di schiacciate | Strumento gratuito per calcolare il tuo salto verticale',
  description: 'Usa il nostro calcolatore di schiacciate gratuito per vedere se riesci a schiacciare. Inserisci la tua altezza, la tua portata da fermo e il tuo salto verticale per vedere immediatamente se riesci a raggiungere il canestro e a schiacciare un pallone da basket.',
  alternates: {
    canonical: '/it',
  },
};

export default function HomeIt() {
  return (
    <>
      <HeaderIt />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Calcolatore di schiacciate
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Riesci a schiacciare? Il nostro calcolatore di schiacciate gratuito ti aiuta a scoprirlo. Inserisci la tua altezza, la tua portata da fermo e il tuo salto verticale per vedere se hai quello che serve per schiacciare un pallone da basket. È lo strumento perfetto per gli aspiranti giocatori per calcolare le loro esigenze di altezza di salto.
              </p>
            </div>
          </div>
            
          <HowItWorksIt />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorIt />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            Cos'è un salto verticale medio?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleIt />
                    </CardContent>
                </Card>
              </section>
              <FaqIt />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Informazioni sul creatore</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    La storia dietro il sistema.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Ciao, sono Adam, grazie per aver visitato il mio sito.</h3>
                        <p>
                          Ho sempre amato il basket, ma ho imparato a schiacciare solo dopo aver lasciato il college e essermi unito a una partita regolare con i miei colleghi chiacchieroni.
                        </p>
                        <p>
                          Dicevano che sprecavo troppa energia in difesa. Questo ha acceso il mio bisogno di una potenza di salto esplosiva. Ora, il mio gioco fa sudare gli altri ragazzi, perché i miglioramenti non iniziano e finiscono con la schiacciata.
                        </p>
                        <p>
                          Ho cercato ovunque queste tecniche rivoluzionarie. Lascia che te lo dica: è bello aver trovato un sistema che funziona per me. Funzionerà anche per chiunque altro, non importa quanto sei alto. Vuoi conoscere i segreti? Fantastico, questo sito ti darà l'alley-oop, preparati a schiacciarla.
                        </p>
                        <p className="font-semibold text-primary">
                          E ricorda, i migliori consigli e segreti vanno esclusivamente ai nostri abbonati, quindi assicurati di iscriverti alla lista sul lato destro della pagina.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormIt />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Contattaci</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Ci piacerebbe sentirti.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormIt />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterIt />
    </>
  );
}
