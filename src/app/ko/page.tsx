import DunkCalculatorKo from '@/components/dunk-calculator-ko';
import FaqKo from '@/components/faq-ko';
import { AverageVerticalJumpArticleKo } from '@/app/ko/blog/posts/average-vertical-jump-ko';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormKo } from '@/components/subscription-form-ko';
import { ContactFormKo } from '@/components/contact-form-ko';
import HowItWorksKo from '@/components/how-it-works-ko';
import { HeaderKo } from '@/components/header-ko';
import { FooterKo } from '@/components/footer-ko';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '덩크 계산기 | 수직 점프를 계산하는 무료 도구',
  description: '무료 덩크 계산기를 사용하여 덩크를 할 수 있는지 확인하십시오. 키, 서 있는 상태에서의 도달 거리, 수직 점프를 입력하여 즉시 림에 도달하고 농구공을 슬램할 수 있는지 계산하십시오.',
  alternates: {
    canonical: '/ko',
  },
};

export default function HomeKo() {
  return (
    <>
      <HeaderKo />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                덩크 계산기
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                덩크를 할 수 있습니까? 무료 덩크 계산기가 도와드립니다. 키, 서 있는 상태에서의 도달 거리, 수직 점프를 입력하여 농구공을 슬램할 수 있는지 확인하십시오. 야심 찬 선수들이 점프 높이 요구 사항을 계산하는 데 완벽한 도구입니다.
              </p>
            </div>
          </div>
            
          <HowItWorksKo />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorKo />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            평균적인 수직 점프란 무엇입니까?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleKo />
                    </CardContent>
                </Card>
              </section>
              <FaqKo />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">제작자 소개</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    시스템의 비하인드 스토리.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">안녕하세요, 저는 아담입니다. 제 사이트를 확인해 주셔서 감사합니다.</h3>
                        <p>
                          저는 항상 농구를 좋아했지만 대학을 떠나 떠벌리는 동료들과 정기적인 경기에 참여한 후에야 덩크를 배웠습니다.
                        </p>
                        <p>
                          그들은 내가 수비에 너무 많은 에너지를 낭비했다고 말했습니다. 그것은 폭발적인 점프력에 대한 나의 필요성을 불러일으켰습니다. 이제 제 경기는 다른 선수들을 땀 흘리게 합니다. 개선은 덩크로 시작하고 끝나지 않기 때문입니다.
                        </p>
                        <p>
                          저는 이 게임을 바꾸는 기술을 어디에서나 찾았습니다. 말씀드리자면, 저에게 맞는 시스템을 찾아서 기쁩니다. 키가 얼마든 상관없이 다른 누구에게나 효과가 있을 것입니다. 비밀을 알고 싶습니까? 멋지네요, 이 사이트에서 앨리웁을 드릴 테니, 잼을 준비하세요.
                        </p>
                        <p className="font-semibold text-primary">
                          그리고 기억하십시오, 최고의 팁과 비밀은 구독자에게만 독점적으로 제공되므로 페이지 오른쪽에 있는 목록에 가입하십시오.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormKo />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">문의하기</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    여러분의 의견을 듣고 싶습니다.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormKo />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterKo />
    </>
  );
}
