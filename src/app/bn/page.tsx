import DunkCalculatorBn from '@/components/dunk-calculator-bn';
import FaqBn from '@/components/faq-bn';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormBn } from '@/components/subscription-form-bn';
import { ContactFormBn } from '@/components/contact-form-bn';
import HowItWorksBn from '@/components/how-it-works-bn';
import { HeaderBn } from '@/components/header-bn';
import { FooterBn } from '@/components/footer-bn';
import type { Metadata } from 'next';
import ExerciseLibrary from '@/components/exercise-library';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'ডান্ক ক্যালকুলেটর | আপনার উল্লম্ব লাফ গণনা করার জন্য বিনামূল্যে টুল',
  description: 'আপনি ডাঙ্ক করতে পারেন কিনা তা দেখতে আমাদের বিনামূল্যে ডাঙ্ক ক্যালকুলেটর ব্যবহার করুন। আপনার উচ্চতা, দাঁড়ানো নাগাল, এবং উল্লম্ব লাফ প্রবেশ করান যাতে আপনি বাস্কেটবলটি স্ল্যাম করতে পারেন কিনা তা দেখতে। উচ্চাকাঙ্ক্ষী খেলোয়াড়দের জন্য তাদের লাফের উচ্চতার প্রয়োজনীয়তা গণনা করার জন্য এটি নিখুঁত টুল।',
  alternates: {
    canonical: '/bn',
  },
};

export default function HomeBn() {
  return (
    <>
      <HeaderBn />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                ডাঙ্ক ক্যালকুলেটর
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                আপনি কি ডাঙ্ক করতে পারেন? আমাদের বিনামূল্যে ডাঙ্ক ক্যালকুলেটর আপনাকে এটি খুঁজে বের করতে সাহায্য করে। আপনার উচ্চতা, দাঁড়ানো নাগাল, এবং উল্লম্ব লাফ প্রবেশ করান যাতে দেখা যায় যে আপনার কাছে বাস্কেটবল স্ল্যাম করার মতো ক্ষমতা আছে কিনা। উচ্চাকাঙ্ক্ষী খেলোয়াড়দের জন্য তাদের লাফের উচ্চতার প্রয়োজনীয়তা গণনা করার জন্য এটি নিখুঁত টুল।
              </p>
            </div>
          </div>
            
          <HowItWorksBn />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorBn />
              <ExerciseLibrary />
              <ProgressTracker />
              <FaqBn />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">স্রষ্টা সম্পর্কে</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    সিস্টেমের পিছনের গল্প।
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">হাই, আমি অ্যাডাম, আমার সাইটটি দেখার জন্য ধন্যবাদ।</h3>
                        <p>
                          আমি সবসময় বাস্কেটবল পছন্দ করতাম কিন্তু আমি কলেজ ছাড়ার পরে এবং আমার ঠাট্টা করা সহকর্মীদের সাথে একটি নিয়মিত খেলায় যোগ দেওয়ার পরেই কেবল ডাঙ্ক করতে শিখেছি।
                        </p>
                        <p>
                          তারা বলেছিল আমি প্রতিরক্ষায় খুব বেশি শক্তি নষ্ট করেছি। এটি আমার বিস্ফোরক লাফ ক্ষমতার প্রয়োজনীয়তাকে প্রজ্বলিত করেছে। এখন, আমার খেলা অন্য লোকদের ঘাম ঝরায়- কারণ উন্নতিগুলি ডাঙ্কিং দিয়ে শুরু এবং শেষ হয় না।
                        </p>
                        <p>
                          আমি এই গেম পরিবর্তনকারী কৌশলগুলির জন্য সর্বত্র অনুসন্ধান করেছি। আমি আপনাকে বলি- আমার জন্য কাজ করে এমন একটি সিস্টেম খুঁজে পেয়ে ভাল লাগছে। এটি অন্য কারও জন্যও কাজ করবে, আপনি যতই লম্বা হন না কেন। গোপনীয়তা জানতে চান? কুল, এই সাইটটি আপনাকে অ্যালি-উপ দেবে, এটি জ্যাম করার জন্য প্রস্তুত হন।
                        </p>
                        <p className="font-semibold text-primary">
                          এবং মনে রাখবেন, সেরা টিপস এবং গোপনীয়তাগুলি একচেটিয়াভাবে আমাদের গ্রাহকদের কাছে যায়, তাই নিশ্চিত করুন যে আপনি পৃষ্ঠার ডানদিকের তালিকায় সাইন আপ করেছেন।
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormBn />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">যোগাযোগ করুন</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    আমরা আপনার কাছ থেকে শুনতে চাই।
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormBn />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterBn />
    </>
  );
}
