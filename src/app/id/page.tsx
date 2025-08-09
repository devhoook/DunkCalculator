import DunkCalculatorId from '@/components/dunk-calculator-id';
import FaqId from '@/components/faq-id';
import { AverageVerticalJumpArticleId } from '@/app/id/blog/posts/average-vertical-jump-id';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormId } from '@/components/subscription-form-id';
import { ContactFormId } from '@/components/contact-form-id';
import HowItWorksId from '@/components/how-it-works-id';
import { HeaderId } from '@/components/header-id';
import { FooterId } from '@/components/footer-id';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalkulator Dunk | Alat Gratis untuk Menghitung Lompatan Vertikal Anda',
  description: 'Gunakan kalkulator dunk gratis kami untuk melihat apakah Anda bisa melakukan dunk. Masukkan tinggi badan, jangkauan berdiri, dan lompatan vertikal Anda untuk langsung menghitung apakah Anda bisa mencapai ring dan melakukan dunk.',
  alternates: {
    canonical: '/id',
  },
};

export default function HomeId() {
  return (
    <>
      <HeaderId />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Kalkulator Dunk
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Bisakah Anda melakukan dunk? Kalkulator dunk gratis kami membantu Anda mengetahuinya. Masukkan tinggi badan, jangkauan berdiri, dan lompatan vertikal Anda untuk melihat apakah Anda memiliki apa yang diperlukan untuk melakukan dunk. Ini adalah alat yang sempurna bagi pemain yang bercita-cita tinggi untuk menghitung kebutuhan ketinggian lompatan mereka.
              </p>
            </div>
          </div>
            
          <HowItWorksId />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorId />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            Berapa Lompatan Vertikal Rata-rata?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleId />
                    </CardContent>
                </Card>
              </section>
              <FaqId />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Tentang Pencipta</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Cerita di balik sistem ini.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Hai, saya Adam, terima kasih telah mengunjungi situs saya.</h3>
                        <p>
                          Saya selalu menyukai bola basket tetapi saya baru belajar melakukan dunk setelah saya meninggalkan perguruan tinggi dan bergabung dengan permainan rutin dengan rekan kerja saya yang banyak bicara.
                        </p>
                        <p>
                          Mereka bilang saya terlalu banyak membuang energi untuk bertahan. Itu memicu kebutuhan saya akan kekuatan lompatan yang eksplosif. Sekarang, permainan saya membuat orang lain berkeringat - karena peningkatannya tidak dimulai dan berakhir dengan dunk.
                        </p>
                        <p>
                          Saya mencari di mana-mana untuk teknik-teknik yang mengubah permainan ini. Biar saya beritahu Anda - rasanya senang telah menemukan sistem yang bekerja untuk saya. Ini akan bekerja untuk orang lain juga, tidak peduli seberapa tinggi Anda. Ingin tahu rahasianya? Keren, situs ini akan memberi Anda alley-oop, bersiaplah untuk melakukannya.
                        </p>
                        <p className="font-semibold text-primary">
                          Dan ingat, tips & rahasia terbaik hanya untuk pelanggan kami, jadi pastikan Anda mendaftar ke daftar di sisi kanan halaman.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormId />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Hubungi Kami</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Kami ingin mendengar dari Anda.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormId />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterId />
    </>
  );
}
