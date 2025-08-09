import DunkCalculatorTh from '@/components/dunk-calculator-th';
import FaqTh from '@/components/faq-th';
import { AverageVerticalJumpArticleTh } from '@/app/th/blog/posts/average-vertical-jump-th';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormTh } from '@/components/subscription-form-th';
import { ContactFormTh } from '@/components/contact-form-th';
import HowItWorksTh from '@/components/how-it-works-th';
import { HeaderTh } from '@/components/header-th';
import { FooterTh } from '@/components/footer-th';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'เครื่องคำนวณการดั๊งค์ | เครื่องมือฟรีสำหรับคำนวณการกระโดดแนวดิ่งของคุณ',
  description: 'ใช้เครื่องคำนวณการดั๊งค์ฟรีของเราเพื่อดูว่าคุณสามารถดั๊งค์ได้หรือไม่ ใส่ความสูง ระยะเอื้อมขณะยืน และการกระโดดแนวดิ่งของคุณเพื่อคำนวณทันทีว่าคุณสามารถไปถึงขอบห่วงและดั๊งค์บาสเก็ตบอลได้หรือไม่',
  alternates: {
    canonical: '/th',
  },
};

export default function HomeTh() {
  return (
    <>
      <HeaderTh />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                เครื่องคำนวณการดั๊งค์
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                คุณดั๊งค์ได้ไหม? เครื่องคำนวณการดั๊งค์ฟรีของเราช่วยให้คุณค้นพบได้ ใส่ความสูง ระยะเอื้อมขณะยืน และการกระโดดแนวดิ่งของคุณเพื่อดูว่าคุณมีสิ่งที่จะดั๊งค์บาสเก็ตบอลได้หรือไม่ เป็นเครื่องมือที่สมบูรณ์แบบสำหรับผู้เล่นที่ต้องการคำนวณความต้องการความสูงในการกระโดดของพวกเขา
              </p>
            </div>
          </div>
            
          <HowItWorksTh />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorTh />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            การกระโดดแนวดิ่งโดยเฉลี่ยคืออะไร?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleTh />
                    </CardContent>
                </Card>
              </section>
              <FaqTh />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">เกี่ยวกับผู้สร้าง</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    เรื่องราวเบื้องหลังระบบ
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">สวัสดี ผมชื่ออดัม ขอบคุณที่เข้ามาดูเว็บไซต์ของผม</h3>
                        <p>
                          ผมรักบาสเก็ตบอลมาโดยตลอด แต่ผมเพิ่งเรียนรู้วิธีดั๊งค์หลังจากออกจากวิทยาลัยและเข้าร่วมเกมปกติกับเพื่อนร่วมงานที่ชอบพูดจาถากถาง
                        </p>
                        <p>
                          พวกเขาบอกว่าผมเสียพลังงานไปกับการป้องกันมากเกินไป นั่นทำให้ผมต้องการพลังกระโดดที่ระเบิดได้ ตอนนี้เกมของผมทำให้คนอื่นเหงื่อตก - เพราะการปรับปรุงไม่ได้เริ่มต้นและสิ้นสุดที่การดั๊งค์
                        </p>
                        <p>
                          ผมค้นหาเทคนิคที่เปลี่ยนเกมเหล่านี้ทุกที่ ให้ผมบอกคุณ - รู้สึกดีที่ได้พบระบบที่เหมาะกับผม มันจะใช้ได้กับคนอื่นด้วย ไม่ว่าคุณจะสูงแค่ไหน อยากรู้เคล็ดลับไหม? เจ๋ง เว็บไซต์นี้จะให้คุณแอสซิสต์ เตรียมตัวให้พร้อมที่จะดั๊งค์
                        </p>
                        <p className="font-semibold text-primary">
                          และจำไว้ว่าเคล็ดลับและเคล็ดลับที่ดีที่สุดจะถูกส่งไปยังสมาชิกของเราโดยเฉพาะ ดังนั้นอย่าลืมลงทะเบียนในรายการทางด้านขวาของหน้า
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormTh />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">ติดต่อเรา</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    เรายินดีที่จะรับฟังจากคุณ
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormTh />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterTh />
    </>
  );
}
