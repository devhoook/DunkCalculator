import DunkCalculatorPt from '@/components/dunk-calculator-pt';
import FaqPt from '@/components/faq-pt';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormPt } from '@/components/subscription-form-pt';
import { ContactFormPt } from '@/components/contact-form-pt';
import HowItWorksPt from '@/components/how-it-works-pt';
import { HeaderPt } from '@/components/header-pt';
import { FooterPt } from '@/components/footer-pt';
import type { Metadata } from 'next';
import ExerciseLibrary from '@/components/exercise-library';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'Calculadora de Enterradas | Ferramenta Gratuita para Calcular seu Salto Vertical',
  description: 'Use nossa calculadora de enterradas gratuita para ver se você consegue enterrar. Insira sua altura, alcance em pé e salto vertical para ver instantaneamente se você consegue alcançar o aro e cravar a bola de basquete.',
  alternates: {
    canonical: '/pt',
  },
};

export default function HomePt() {
  return (
    <>
      <HeaderPt />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Calculadora de Enterradas
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Você consegue enterrar? Nossa calculadora de enterradas gratuita ajuda você a descobrir. Insira sua altura, alcance em pé e salto vertical para ver se você tem o que é preciso para cravar a bola de basquete. É a ferramenta perfeita para jogadores aspirantes calcularem suas necessidades de altura de salto.
              </p>
            </div>
          </div>
            
          <HowItWorksPt />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorPt />
              <ExerciseLibrary />
              <ProgressTracker />
              <FaqPt />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Sobre o Criador</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    A história por trás do sistema.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Olá, eu sou o Adam, obrigado por visitar meu site.</h3>
                        <p>
                          Eu sempre amei basquete, mas só aprendi a enterrar depois que saí da faculdade e entrei em um jogo regular com meus colegas de trabalho que falam muito.
                        </p>
                        <p>
                          Eles diziam que eu gastava muita energia na defesa. Isso acendeu minha necessidade de poder de salto explosivo. Agora, meu jogo deixa os outros suando - porque as melhorias não começam e terminam com a enterrada.
                        </p>
                        <p>
                          Eu procurei em todos os lugares por essas técnicas que mudam o jogo. Deixe-me dizer - é bom ter encontrado um sistema que funciona para mim. Funcionará para qualquer outra pessoa também, não importa o quão alto você seja. Quer aprender os segredos? Legal, este site vai te dar a ponte aérea, prepare-se para cravar.
                        </p>
                        <p className="font-semibold text-primary">
                          E lembre-se, as melhores dicas e segredos vão exclusivamente para nossos assinantes, então certifique-se de se inscrever na lista no lado direito da página.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormPt />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Contate-Nos</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Gostaríamos muito de ouvir de você.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormPt />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterPt />
    </>
  );
}
