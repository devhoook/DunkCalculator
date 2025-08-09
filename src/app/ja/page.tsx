import DunkCalculatorJa from '@/components/dunk-calculator-ja';
import FaqJa from '@/components/faq-ja';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormJa } from '@/components/subscription-form-ja';
import { ContactFormJa } from '@/components/contact-form-ja';
import HowItWorksJa from '@/components/how-it-works-ja';
import { HeaderJa } from '@/components/header-ja';
import { FooterJa } from '@/components/footer-ja';
import type { Metadata } from 'next';
import ExerciseLibrary from '@/components/exercise-library';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'ダンク計算機 | 垂直跳びを計算する無料ツール',
  description: '無料のダンク計算機を使って、ダンクできるかどうかを確認しましょう。身長、スタンディングリーチ、垂直跳びを入力して、リムに届き、バスケットボールを叩き込めるかどうかを即座に計算します。',
  alternates: {
    canonical: '/ja',
  },
};

export default function HomeJa() {
  return (
    <>
      <HeaderJa />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                ダンク計算機
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                ダンクできますか？無料のダンク計算機がそれを明らかにします。身長、スタンディングリーチ、垂直跳びを入力して、バスケットボールを叩き込むのに必要なものがあるかどうかを確認してください。これは、意欲的なプレイヤーがジャンプの高さのニーズを計算するのに最適なツールです。
              </p>
            </div>
          </div>
            
          <HowItWorksJa />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorJa />
              <ExerciseLibrary />
              <ProgressTracker />
              <FaqJa />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">クリエイターについて</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    システムの背後にある物語。
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md-col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">こんにちは、アダムです。私のサイトをご覧いただきありがとうございます。</h3>
                        <p>
                          私はいつもバスケットボールが大好きでしたが、ダンクができるようになったのは大学を卒業し、口の悪い同僚との定期的な試合に参加するようになってからです。
                        </p>
                        <p>
                          彼らは私がディフェンスにエネルギーを使いすぎていると言いました。それが私の爆発的なジャンプ力への必要性を刺激しました。今では、私のプレーは他の男たちを汗だくにさせます。なぜなら、改善はダンクで始まり、終わるものではないからです。
                        </p>
                        <p>
                          私はこれらのゲームを変えるテクニックをどこでも探しました。言わせてください、私に合ったシステムを見つけられて本当に良かったです。それは、あなたの身長に関係なく、他の誰にでも機能します。秘密を知りたいですか？クール、このサイトはあなたにアリウープを与えます、それを叩き込む準備をしてください。
                        </p>
                        <p className="font-semibold text-primary">
                          そして覚えておいてください、最高のヒントと秘密は私たちの加入者だけに提供されますので、ページの右側にあるリストに必ずサインアップしてください。
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormJa />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">お問い合わせ</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    皆様からのご連絡をお待ちしております。
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormJa />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterJa />
    </>
  );
}
