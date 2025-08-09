import DunkCalculatorVi from '@/components/dunk-calculator-vi';
import FaqVi from '@/components/faq-vi';
import { Card, CardContent } from '@/components/ui/card';
import { SubscriptionFormVi } from '@/components/subscription-form-vi';
import { ContactFormVi } from '@/components/contact-form-vi';
import HowItWorksVi from '@/components/how-it-works-vi';
import { HeaderVi } from '@/components/header-vi';
import { FooterVi } from '@/components/footer-vi';
import type { Metadata } from 'next';
import ProgressTracker from '@/components/progress-tracker';

export const metadata: Metadata = {
  title: 'Máy tính úp rổ | Công cụ miễn phí để tính toán cú nhảy thẳng đứng của bạn',
  description: 'Sử dụng máy tính úp rổ miễn phí của chúng tôi để xem bạn có thể úp rổ không. Nhập chiều cao, tầm với khi đứng và cú nhảy thẳng đứng của bạn để tính toán ngay lập tức xem bạn có thể với tới vành rổ và ném bóng rổ xuống không.',
  alternates: {
    canonical: '/vi',
  },
};

export default function HomeVi() {
  return (
    <>
      <HeaderVi />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Máy tính úp rổ
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Bạn có thể úp rổ không? Máy tính úp rổ miễn phí của chúng tôi sẽ giúp bạn tìm ra câu trả lời. Nhập chiều cao, tầm với khi đứng và cú nhảy thẳng đứng của bạn để xem bạn có đủ khả năng để úp rổ không. Đây là công cụ hoàn hảo cho những người chơi đầy tham vọng để tính toán nhu cầu về chiều cao nhảy của họ.
              </p>
            </div>
          </div>
            
          <HowItWorksVi />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorVi />
              <ProgressTracker />
              <FaqVi />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Về người sáng tạo</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Câu chuyện đằng sau hệ thống.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Chào, tôi là Adam, cảm ơn bạn đã xem trang web của tôi.</h3>
                        <p>
                          Tôi luôn yêu thích bóng rổ nhưng tôi chỉ học được cách úp rổ sau khi rời trường đại học và tham gia một trận đấu thường xuyên với các đồng nghiệp hay nói kháy của mình.
                        </p>
                        <p>
                          Họ nói rằng tôi đã lãng phí quá nhiều năng lượng vào việc phòng thủ. Điều đó đã khơi dậy nhu cầu của tôi về sức bật bùng nổ. Bây giờ, trận đấu của tôi khiến những người khác phải đổ mồ hôi - bởi vì những cải tiến không bắt đầu và kết thúc bằng việc úp rổ.
                        </p>
                        <p>
                          Tôi đã tìm kiếm khắp nơi những kỹ thuật thay đổi cuộc chơi này. Hãy để tôi nói cho bạn biết - thật tuyệt khi tìm thấy một hệ thống phù hợp với mình. Nó cũng sẽ phù hợp với bất kỳ ai khác, bất kể bạn cao bao nhiêu. Bạn muốn biết những bí mật? Tuyệt vời, trang web này sẽ cho bạn một đường chuyền alley-oop, hãy sẵn sàng để úp rổ.
                        </p>
                        <p className="font-semibold text-primary">
                          Và hãy nhớ rằng, những mẹo và bí mật hay nhất sẽ được dành riêng cho những người đăng ký của chúng tôi, vì vậy hãy chắc chắn rằng bạn đã đăng ký vào danh sách ở phía bên phải của trang.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormVi />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Liên hệ với chúng tôi</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Chúng tôi rất muốn nghe từ bạn.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormVi />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterVi />
    </>
  );
}
