import DunkCalculatorUr from '@/components/dunk-calculator-ur';
import FaqUr from '@/components/faq-ur';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormUr } from '@/components/subscription-form-ur';
import { ContactFormUr } from '@/components/contact-form-ur';
import HowItWorksUr from '@/components/how-it-works-ur';
import { HeaderUr } from '@/components/header-ur';
import { FooterUr } from '@/components/footer-ur';
import type { Metadata } from 'next';
import ExerciseLibrary from '@/components/exercise-library';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'ڈنک کیلکولیٹر | اپنی عمودی چھلانگ کا حساب لگانے کے لیے مفت ٹول',
  description: 'یہ دیکھنے کے لیے ہمارا مفت ڈنک کیلکولیٹر استعمال کریں کہ کیا آپ ڈنک کر سکتے ہیں۔ اپنی اونچائی، کھڑے ہونے کی پہنچ، اور عمودی چھلانگ درج کریں تاکہ فوری طور پر حساب لگایا جا سکے کہ کیا آپ رم تک پہنچ سکتے ہیں اور باسکٹ بال کو سلیم کر سکتے ہیں۔',
  alternates: {
    canonical: '/ur',
  },
};

export default function HomeUr() {
  return (
    <>
      <HeaderUr />
      <main className="flex-grow" dir="rtl">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                ڈنک کیلکولیٹر
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                کیا آپ ڈنک کر سکتے ہیں؟ ہمارا مفت ڈنک کیلکولیٹر آپ کو یہ جاننے میں مدد کرتا ہے۔ اپنی اونچائی، کھڑے ہونے کی پہنچ، اور عمودی چھلانگ درج کریں تاکہ یہ دیکھا جا سکے کہ کیا آپ میں باسکٹ بال کو سلیم کرنے کی صلاحیت ہے۔ یہ خواہشمند کھلاڑیوں کے لیے اپنی چھلانگ کی اونچائی کی ضروریات کا حساب لگانے کے لیے بہترین ٹول ہے۔
              </p>
            </div>
          </div>
            
          <HowItWorksUr />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorUr />
              <ExerciseLibrary />
              <ProgressTracker />
              <FaqUr />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">تخلیق کار کے بارے میں</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    سسٹم کے پیچھے کی کہانی۔
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">ہیلو، میں آدم ہوں، میری سائٹ دیکھنے کے لیے شکریہ۔</h3>
                        <p>
                          مجھے ہمیشہ باسکٹ بال سے محبت رہی ہے لیکن میں نے کالج چھوڑنے کے بعد اور اپنے مذاق اڑانے والے ساتھی کارکنوں کے ساتھ ایک باقاعدہ کھیل میں شامل ہونے کے بعد ہی ڈنک کرنا سیکھا۔
                        </p>
                        <p>
                          انہوں نے کہا کہ میں نے دفاع پر بہت زیادہ توانائی ضائع کی۔ اس نے میری دھماکہ خیز چھلانگ کی طاقت کی ضرورت کو بھڑکا دیا۔ اب، میرا کھیل دوسرے لڑکوں کو پسینہ چھڑا دیتا ہے- کیونکہ بہتری ڈنکنگ کے ساتھ شروع اور ختم نہیں ہوتی۔
                        </p>
                        <p>
                          میں نے ان گیم بدلنے والی تکنیکوں کے لیے ہر جگہ تلاش کیا۔ میں آپ کو بتا دوں- میرے لیے کام کرنے والا ایک سسٹم ڈھونڈ کر اچھا لگا۔ यह किसी और के لیے भी کام کرے گا، چاہے آپ کتنے ہی لمبے کیوں نہ ہوں۔ راز جاننا چاہتے ہیں؟ ٹھیک ہے، یہ سائٹ آپ کو ایلی-اوپ دے گی، اسے جام کرنے کے لیے تیار ہو جائیں۔
                        </p>
                        <p className="font-semibold text-primary">
                          اور یاد رکھیں، بہترین ٹپس اور راز خصوصی طور پر ہمارے سبسکرائبرز کو ملتے ہیں، لہذا یقینی بنائیں کہ آپ صفحہ کے دائیں جانب فہرست کے لیے سائن اپ کریں۔
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormUr />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">ہم سے رابطہ کریں</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    ہم آپ سے سننا پسند کریں گے۔
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormUr />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterUr />
    </>
  );
}
