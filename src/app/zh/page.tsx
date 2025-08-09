import DunkCalculatorZh from '@/components/dunk-calculator-zh';
import FaqZh from '@/components/faq-zh';
import { Card, CardContent } from '@/components/ui/card';
import { SubscriptionFormZh } from '@/components/subscription-form-zh';
import { ContactFormZh } from '@/components/contact-form-zh';
import HowItWorksZh from '@/components/how-it-works-zh';
import { HeaderZh } from '@/components/header-zh';
import { FooterZh } from '@/components/footer-zh';
import type { Metadata } from 'next';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: '扣篮计算器 | 计算您垂直弹跳的免费工具',
  description: '使用我们的免费扣篮计算器，看看您是否能扣篮。输入您的身高、站立摸高和垂直弹跳，即可立即计算出您是否能触及篮筐并完成扣篮。',
  alternates: {
    canonical: '/zh',
  },
};

export default function HomeZh() {
  return (
    <>
      <HeaderZh />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                扣篮计算器
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                你能扣篮吗？我们的免费扣篮计算器可以帮助您找到答案。输入您的身高、站立摸高和垂直弹跳，看看您是否具备扣篮的能力。对于有抱负的球员来说，这是计算他们所需弹跳高度的完美工具。
              </p>
            </div>
          </div>
            
          <HowItWorksZh />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorZh />
              <ProgressTracker />
              <FaqZh />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">关于创建者</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    系统背后的故事。
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">嗨，我是亚当，感谢您访问我的网站。</h3>
                        <p>
                          我一直很喜欢篮球，但我是在大学毕业后加入了一个由爱说垃圾话的同事组成的常规比赛后才学会扣篮的。
                        </p>
                        <p>
                          他们说我在防守上浪费了太多精力。这激发了我对爆发性跳跃力的需求。现在，我的比赛让其他人汗流浃背——因为进步并不仅仅始于和终于扣篮。
                        </p>
                        <p>
                          我到处寻找这些改变游戏规则的技术。让我告诉您——找到一个对我有效的系统感觉真好。它对任何人都有效，无论您多高。想知道秘诀吗？太好了，这个网站会给您空中接力，准备好扣篮吧。
                        </p>
                        <p className="font-semibold text-primary">
                          请记住，最好的技巧和秘诀只提供给我们的订阅者，所以请务必在页面右侧注册列表。
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormZh />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">联系我们</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    我们很乐意听取您的意见。
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormZh />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterZh />
    </>
  );
}
