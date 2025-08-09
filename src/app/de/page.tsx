import DunkCalculatorDe from '@/components/dunk-calculator-de';
import FaqDe from '@/components/faq-de';
import { AverageVerticalJumpArticleDe } from '@/app/de/blog/posts/average-vertical-jump-de';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormDe } from '@/components/subscription-form-de';
import { ContactFormDe } from '@/components/contact-form-de';
import HowItWorksDe from '@/components/how-it-works-de';
import { HeaderDe } from '@/components/header-de';
import { FooterDe } from '@/components/footer-de';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dunk-Rechner | Kostenloses Tool zur Berechnung deines vertikalen Sprungs',
  description: 'Benutze unseren kostenlosen Dunk-Rechner, um zu sehen, ob du dunken kannst. Gib deine Größe, deine Reichweite im Stehen und deinen vertikalen Sprung ein, um sofort zu berechnen, ob du den Korb erreichen und einen Basketball versenken kannst.',
  alternates: {
    canonical: '/de',
  },
};

export default function HomeDe() {
  return (
    <>
      <HeaderDe />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Dunk-Rechner
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Kannst du dunken? Unser kostenloser Dunk-Rechner hilft dir, es herauszufinden. Gib deine Größe, deine Reichweite im Stehen und deinen vertikalen Sprung ein, um zu sehen, ob du das Zeug dazu hast, einen Basketball zu versenken. Es ist das perfekte Werkzeug für aufstrebende Spieler, um ihre Sprunghöhenbedürfnisse zu berechnen.
              </p>
            </div>
          </div>
            
          <HowItWorksDe />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorDe />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            Was ist ein durchschnittlicher vertikaler Sprung?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleDe />
                    </CardContent>
                </Card>
              </section>
              <FaqDe />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Über den Schöpfer</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Die Geschichte hinter dem System.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Hallo, ich bin Adam, danke, dass du meine Seite besuchst.</h3>
                        <p>
                          Ich habe Basketball schon immer geliebt, aber ich habe erst nach dem College gelernt zu dunken, als ich an einem regelmäßigen Spiel mit meinen prahlerischen Kollegen teilnahm.
                        </p>
                        <p>
                          Sie sagten, ich würde zu viel Energie in der Verteidigung verschwenden. Das hat meinen Bedarf an explosiver Sprungkraft geweckt. Jetzt lässt mein Spiel die anderen Jungs schwitzen - denn die Verbesserungen beginnen und enden nicht mit dem Dunken.
                        </p>
                        <p>
                          Ich habe überall nach diesen bahnbrechenden Techniken gesucht. Lassen Sie mich Ihnen sagen - es fühlt sich gut an, ein System gefunden zu haben, das für mich funktioniert. Es wird auch für jeden anderen funktionieren, egal wie groß du bist. Willst du die Geheimnisse erfahren? Cool, diese Seite gibt dir den Alley-Oop, mach dich bereit, ihn zu versenken.
                        </p>
                        <p className="font-semibold text-primary">
                          Und denken Sie daran, die besten Tipps und Geheimnisse gehen ausschließlich an unsere Abonnenten, also stellen Sie sicher, dass Sie sich auf der rechten Seite der Seite in die Liste eintragen.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormDe />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Kontaktiere uns</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Wir würden uns freuen, von Ihnen zu hören.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormDe />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterDe />
    </>
  );
}
