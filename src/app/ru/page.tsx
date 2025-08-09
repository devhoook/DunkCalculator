import DunkCalculatorRu from '@/components/dunk-calculator-ru';
import FaqRu from '@/components/faq-ru';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormRu } from '@/components/subscription-form-ru';
import { ContactFormRu } from '@/components/contact-form-ru';
import HowItWorksRu from '@/components/how-it-works-ru';
import { HeaderRu } from '@/components/header-ru';
import { FooterRu } from '@/components/footer-ru';
import type { Metadata } from 'next';
import ExerciseLibrary from '@/components/exercise-library';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'Калькулятор данков | Бесплатный инструмент для расчета вашего вертикального прыжка',
  description: 'Используйте наш бесплатный калькулятор данков, чтобы узнать, можете ли вы делать данк. Введите свой рост, досягаемость стоя и вертикальный прыжок, чтобы мгновенно рассчитать, можете ли вы дотянуться до кольца и забить мяч.',
  alternates: {
    canonical: '/ru',
  },
};

export default function HomeRu() {
  return (
    <>
      <HeaderRu />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Калькулятор данков
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Можете ли вы делать данк? Наш бесплатный калькулятор данков поможет вам это выяснить. Введите свой рост, досягаемость стоя и вертикальный прыжок, чтобы узнать, есть ли у вас все необходимое для того, чтобы забить мяч. Это идеальный инструмент для начинающих игроков, чтобы рассчитать свои потребности в высоте прыжка.
              </p>
            </div>
          </div>
            
          <HowItWorksRu />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorRu />
              <ExerciseLibrary />
              <ProgressTracker />
              <FaqRu />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">О создателе</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    История за системой.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Привет, я Адам, спасибо, что зашли на мой сайт.</h3>
                        <p>
                          Я всегда любил баскетбол, но научился делать данк только после того, как бросил колледж и присоединился к регулярной игре с моими болтливыми коллегами.
                        </p>
                        <p>
                          Они говорили, что я трачу слишком много энергии на защиту. Это разожгло мою потребность во взрывной прыжковой силе. Теперь моя игра заставляет других парней потеть - потому что улучшения не начинаются и не заканчиваются данком.
                        </p>
                        <p>
                          Я искал повсюду эти революционные техники. Позвольте мне сказать вам - приятно найти систему, которая работает для меня. Она подойдет и любому другому, независимо от вашего роста. Хотите узнать секреты? Круто, этот сайт даст вам аллей-уп, готовьтесь забить.
                        </p>
                        <p className="font-semibold text-primary">
                          И помните, лучшие советы и секреты достаются исключительно нашим подписчикам, поэтому обязательно подпишитесь на рассылку в правой части страницы.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormRu />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Свяжитесь с нами</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Мы будем рады вас выслушать.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormRu />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterRu />
    </>
  );
}
