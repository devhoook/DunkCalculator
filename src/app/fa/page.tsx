import DunkCalculatorFa from '@/components/dunk-calculator-fa';
import FaqFa from '@/components/faq-fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormFa } from '@/components/subscription-form-fa';
import { ContactFormFa } from '@/components/contact-form-fa';
import HowItWorksFa from '@/components/how-it-works-fa';
import { HeaderFa } from '@/components/header-fa';
import { FooterFa } from '@/components/footer-fa';
import type { Metadata } from 'next';
import ExerciseLibrary from '@/components/exercise-library';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'ماشین حساب دانک | ابزار رایگان برای محاسبه پرش عمودی شما',
  description: 'از ماشین حساب رایگان دانک ما استفاده کنید تا ببینید آیا می توانید دانک کنید یا خیر. قد، دسترسی ایستاده و پرش عمودی خود را وارد کنید تا فوراً محاسبه کنید که آیا می توانید به حلقه برسید و یک توپ بسکتبال را پرتاب کنید.',
  alternates: {
    canonical: '/fa',
  },
};

export default function HomeFa() {
  return (
    <>
      <HeaderFa />
      <main className="flex-grow" dir="rtl">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                ماشین حساب دانک
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                آیا می توانید دانک کنید؟ ماشین حساب رایگان دانک ما به شما کمک می کند تا این را بفهمید. قد، دسترسی ایستاده و پرش عمودی خود را وارد کنید تا ببینید آیا آنچه برای پرتاب یک توپ بسکتبال لازم است را دارید یا خیر. این ابزاری عالی برای بازیکنان مشتاق برای محاسبه نیازهای ارتفاع پرش خود است.
              </p>
            </div>
          </div>
            
          <HowItWorksFa />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorFa />
              <ExerciseLibrary />
              <ProgressTracker />
              <FaqFa />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">درباره خالق</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    داستان پشت سیستم.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">سلام، من آدام هستم، از اینکه از سایت من دیدن کردید متشکرم.</h3>
                        <p>
                          من همیشه عاشق بسکتبال بودم اما فقط بعد از ترک کالج و پیوستن به یک بازی منظم با همکارانم که زیاد حرف می زدند، دانک کردن را یاد گرفتم.
                        </p>
                        <p>
                          آنها می گفتند من انرژی زیادی را در دفاع هدر می دهم. این باعث شد که نیاز من به قدرت پرش انفجاری شعله ور شود. حالا، بازی من باعث می شود دیگران عرق کنند- زیرا پیشرفت ها با دانک کردن شروع و تمام نمی شوند.
                        </p>
                        <p>
                          من همه جا را برای این تکنیک های تغییر دهنده بازی جستجو کردم. بگذارید به شما بگویم- پیدا کردن سیستمی که برای من کار می کند احساس خوبی دارد. این برای هر کس دیگری نیز کار خواهد کرد، مهم نیست قد شما چقدر باشد. می خواهید رازها را یاد بگیرید؟ عالی، این سایت به شما پاس هوایی می دهد، آماده باشید تا آن را بزنید.
                        </p>
                        <p className="font-semibold text-primary">
                          و به یاد داشته باشید، بهترین نکات و رازها به طور انحصاری به مشترکین ما می رسد، بنابراین مطمئن شوید که در لیست سمت راست صفحه ثبت نام کرده اید.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormFa />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">با ما تماس بگیرید</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    ما دوست داریم از شما بشنویم.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormFa />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterFa />
    </>
  );
}
