import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "Tôi thực sự cần nhảy cao bao nhiêu để úp rổ?",
        answer: "Để úp rổ vào vành rổ tiêu chuẩn 10 feet (305 cm), bạn cần đưa tay lên cao hơn vành rổ khoảng 6 inch (15 cm) để có đủ không gian kiểm soát bóng. Vì vậy, tổng tầm với của bạn (tầm với khi đứng + cú nhảy thẳng đứng) cần khoảng 126 inch (320 cm). Bạn có thể tính toán cú nhảy thẳng đứng cần thiết bằng cách trừ tầm với khi đứng của bạn khỏi 126 inch (320 cm)."
    },
    {
        question: "Tôi thấp. Tôi có thể úp rổ được không?",
        answer: "Chắc chắn rồi! Mặc dù chiều cao là một lợi thế, nhưng đó không phải là yếu tố duy nhất. Nhiều cầu thủ cao dưới 6 feet (183 cm) đã úp rổ, với một số ví dụ nổi tiếng như Spud Webb (5'7\" / 170 cm) và Nate Robinson (5'9\" / 175 cm). Điều đó đòi hỏi một cú nhảy thẳng đứng đặc biệt, có thể được phát triển thông qua việc rèn luyện sức mạnh và plyometric chuyên dụng."
    },
    {
        question: "Tôi sẽ mất bao lâu để có thể úp rổ?",
        answer: "Điều này thay đổi rất nhiều từ người này sang người khác. Nó phụ thuộc vào trình độ thể lực ban đầu, di truyền, tuổi tác, và sự nhất quán cũng như chất lượng của việc luyện tập của bạn. Đối với một số người, có thể mất vài tháng làm việc chuyên dụng. Đối với những người khác, có thể mất một năm hoặc hơn. Chìa khóa là nỗ lực nhất quán và luyện tập thông minh."
    },
    {
        question: "Những bài tập nào quan trọng nhất để tăng cú nhảy thẳng đứng của tôi?",
        answer: "Sự kết hợp giữa các bài tập sức mạnh và sức bật là chìa khóa. Đối với sức mạnh, hãy tập trung vào các bài tập phức hợp như squat và deadlift. Đối với sức mạnh và sự bùng nổ (plyometrics), các bài tập như nhảy hộp, nhảy sâu và nhảy lunge cực kỳ hiệu quả. Đừng quên tập luyện cơ bụng và sự dẻo dai."
    },
    {
        question: "Tôi có cần giày bóng rổ đặc biệt để nhảy cao hơn không?",
        answer: "Mặc dù giày bóng rổ tốt cung cấp sự hỗ trợ và độ bám cần thiết để ngăn ngừa chấn thương, nhưng chúng không làm tăng đáng kể chiều cao nhảy của bạn. Hãy tập trung vào việc rèn luyện thể chất của bạn trước tiên. Đôi giày tốt nhất là đôi vừa vặn, thoải mái và cung cấp sự hỗ trợ tốt cho mắt cá chân cho loại bàn chân của bạn."
    }
]

export default function FaqVi() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Các câu hỏi thường gặp
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 md:px-8">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-foreground/80">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    </section>
  )
}
