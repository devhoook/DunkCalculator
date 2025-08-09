import DunkCalculatorTr from '@/components/dunk-calculator-tr';
import FaqTr from '@/components/faq-tr';
import { AverageVerticalJumpArticleTr } from '@/app/tr/blog/posts/average-vertical-jump-tr';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormTr } from '@/components/subscription-form-tr';
import { ContactFormTr } from '@/components/contact-form-tr';
import HowItWorksTr from '@/components/how-it-works-tr';
import { HeaderTr } from '@/components/header-tr';
import { FooterTr } from '@/components/footer-tr';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smaç Hesaplayıcı | Dikey Sıçramanızı Hesaplamak İçin Ücretsiz Araç',
  description: 'Smaç yapıp yapamayacağınızı görmek için ücretsiz smaç hesaplayıcımızı kullanın. Boyunuzu, ayakta durma mesafenizi ve dikey sıçramanızı girerek potaya ulaşıp bir basketbol topunu smaçlayıp smaçlayamayacağınızı anında hesaplayın.',
  alternates: {
    canonical: '/tr',
  },
};

export default function HomeTr() {
  return (
    <>
      <HeaderTr />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Smaç Hesaplayıcı
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Smaç yapabilir misin? Ücretsiz smaç hesaplayıcımız öğrenmenize yardımcı olur. Boyunuzu, ayakta durma mesafenizi ve dikey sıçramanızı girerek bir basketbol topunu smaçlamak için gerekenlere sahip olup olmadığınızı görün. Gelecek vadeden oyuncuların sıçrama yüksekliği ihtiyaçlarını hesaplamaları için mükemmel bir araçtır.
              </p>
            </div>
          </div>
            
          <HowItWorksTr />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorTr />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            Ortalama Dikey Sıçrama Nedir?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleTr />
                    </CardContent>
                </Card>
              </section>
              <FaqTr />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Yaratıcı Hakkında</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Sistemin arkasındaki hikaye.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Merhaba, ben Adam, siteme göz attığınız için teşekkürler.</h3>
                        <p>
                          Her zaman basketbolu sevdim ama smaç yapmayı ancak üniversiteden ayrıldıktan ve laf atan iş arkadaşlarımla düzenli bir maça katıldıktan sonra öğrendim.
                        </p>
                        <p>
                          Savunmada çok fazla enerji harcadığımı söylüyorlardı. Bu, patlayıcı sıçrama gücüne olan ihtiyacımı ateşledi. Şimdi, oyunum diğer adamları terletiyor - çünkü gelişmeler smaçla başlayıp bitmiyor.
                        </p>
                        <p>
                          Bu oyunun kurallarını değiştiren teknikleri her yerde aradım. Size söyleyeyim, benim için işe yarayan bir sistem bulduğum için iyi hissediyorum. Boyunuz ne kadar olursa olsun başkası için de işe yarayacaktır. Sırları öğrenmek ister misiniz? Harika, bu site size alley-oop'u verecek, smaçlamaya hazır olun.
                        </p>
                        <p className="font-semibold text-primary">
                          Ve unutmayın, en iyi ipuçları ve sırlar yalnızca abonelerimize özeldir, bu nedenle sayfanın sağ tarafındaki listeye kaydolduğunuzdan emin olun.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormTr />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Bize Ulaşın</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Sizden haber almak isteriz.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormTr />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterTr />
    </>
  );
}
