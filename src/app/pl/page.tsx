import DunkCalculatorPl from '@/components/dunk-calculator-pl';
import FaqPl from '@/components/faq-pl';
import { Card, CardContent } from '@/components/ui/card';
import { SubscriptionFormPl } from '@/components/subscription-form-pl';
import { ContactFormPl } from '@/components/contact-form-pl';
import HowItWorksPl from '@/components/how-it-works-pl';
import { HeaderPl } from '@/components/header-pl';
import { FooterPl } from '@/components/footer-pl';
import type { Metadata } from 'next';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'Kalkulator wsadów | Darmowe narzędzie do obliczania wyskoku pionowego',
  description: 'Użyj naszego darmowego kalkulatora wsadów, aby sprawdzić, czy potrafisz zrobić wsad. Wprowadź swój wzrost, zasięg w staniu i wyskok pionowy, aby natychmiast obliczyć, czy możesz dosięgnąć obręczy i wsadzić piłkę.',
  alternates: {
    canonical: '/pl',
  },
};

export default function HomePl() {
  return (
    <>
      <HeaderPl />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Kalkulator wsadów
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Potrafisz zrobić wsad? Nasz darmowy kalkulator wsadów pomoże Ci się tego dowiedzieć. Wprowadź swój wzrost, zasięg w staniu i wyskok pionowy, aby zobaczyć, czy masz to, czego potrzeba, aby wsadzić piłkę. To idealne narzędzie dla aspirujących graczy do obliczania swoich potrzeb dotyczących wysokości skoku.
              </p>
            </div>
          </div>
            
          <HowItWorksPl />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorPl />
              <ProgressTracker />
              <FaqPl />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">O twórcy</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Historia za systemem.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Cześć, jestem Adam, dziękuję za odwiedzenie mojej strony.</h3>
                        <p>
                          Zawsze kochałem koszykówkę, ale nauczyłem się robić wsady dopiero po ukończeniu studiów i dołączeniu do regularnej gry z moimi gadatliwymi kolegami z pracy.
                        </p>
                        <p>
                          Mówili, że marnuję zbyt dużo energii na obronę. To rozpaliło moją potrzebę wybuchowej siły skoku. Teraz moja gra sprawia, że inni się pocą - ponieważ ulepszenia nie zaczynają się i nie kończą na wsadach.
                        </p>
                        <p>
                          Szukałem wszędzie tych zmieniających grę technik. Pozwólcie, że wam powiem - dobrze jest znaleźć system, który działa dla mnie. Będzie działał również dla każdego innego, bez względu na to, jak wysoki jesteś. Chcesz poznać sekrety? Super, ta strona da ci alley-oop, przygotuj się na wsad.
                        </p>
                        <p className="font-semibold text-primary">
                          I pamiętaj, najlepsze wskazówki i sekrety trafiają wyłącznie do naszych subskrybentów, więc upewnij się, że zapisałeś się na listę po prawej stronie strony.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormPl />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Skontaktuj się z nami</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Chcielibyśmy usłyszeć od Ciebie.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormPl />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterPl />
    </>
  );
}
