import DunkCalculatorAr from '@/components/dunk-calculator-ar';
import FaqAr from '@/components/faq-ar';
import { Card, CardContent } from '@/components/ui/card';
import { SubscriptionFormAr } from '@/components/subscription-form-ar';
import { ContactFormAr } from '@/components/contact-form-ar';
import HowItWorksAr from '@/components/how-it-works-ar';
import { HeaderAr } from '@/components/header-ar';
import { FooterAr } from '@/components/footer-ar';
import type { Metadata } from 'next';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'حاسبة الدنك | أداة مجانية لحساب قفزتك العمودية',
  description: 'استخدم حاسبة الدنك المجانية الخاصة بنا لمعرفة ما إذا كان بإمكانك القيام بالدنك. أدخل طولك ومدى وصولك وقدرتك على القفز العمودي لترى على الفور ما إذا كان بإمكانك الوصول إلى الحلقة وضرب كرة السلة.',
  alternates: {
    canonical: '/ar',
  },
};

export default function HomeAr() {
  return (
    <>
      <HeaderAr />
      <main className="flex-grow" dir="rtl">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                حاسبة الدنك
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                هل يمكنك القيام بالدنك؟ تساعدك حاسبة الدنك المجانية الخاصة بنا على اكتشاف ذلك. أدخل طولك ومدى وصولك وقدرتك على القفز العمودي لترى ما إذا كان لديك ما يلزم لضرب كرة السلة. إنها الأداة المثالية للاعبين الطموحين لحساب احتياجاتهم من ارتفاع القفز.
              </p>
            </div>
          </div>
            
          <HowItWorksAr />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorAr />
              <ProgressTracker />
              <FaqAr />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">عن المبدع</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    القصة وراء النظام.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">مرحبًا ، أنا آدم ، شكرًا لك على زيارة موقعي.</h3>
                        <p>
                          لقد أحببت دائمًا كرة السلة ولكني تعلمت فقط كيفية القيام بالدنك بعد أن تركت الكلية وانضممت إلى لعبة منتظمة مع زملائي في العمل الذين يتحدثون كثيرًا.
                        </p>
                        <p>
                          قالوا إنني أهدرت الكثير من الطاقة في الدفاع. أدى ذلك إلى إشعال حاجتي إلى قوة القفز المتفجرة. الآن ، تترك لعبتي الرجال الآخرين يتعرقون - لأن التحسينات لا تبدأ وتنتهي بالدنك.
                        </p>
                        <p>
                          بحثت في كل مكان عن هذه التقنيات التي تغير قواعد اللعبة. دعني أخبرك - من الجيد أن تجد نظامًا يناسبني. سيعمل مع أي شخص آخر أيضًا ، بغض النظر عن طولك. هل تريد أن تعرف الأسرار؟ رائع ، سيعطيك هذا الموقع التمريرة الحاسمة ، استعد للعبها.
                        </p>
                        <p className="font-semibold text-primary">
                          وتذكر ، أفضل النصائح والأسرار تذهب حصريًا إلى مشتركينا ، لذا تأكد من التسجيل في القائمة على الجانب الأيمن من الصفحة.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormAr />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">اتصل بنا</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    نود أن نسمع منك.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormAr />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterAr />
    </>
  );
}
