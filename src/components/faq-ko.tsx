import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "덩크를 하려면 실제로 얼마나 높이 뛰어야 하나요?",
        answer: "표준 10피트(305cm) 림에 덩크를 하려면 공을 제어할 충분한 공간을 확보하기 위해 손이 림보다 약 6인치(15cm) 위에 있어야 합니다. 따라서 총 도달 거리(서 있는 상태에서의 도달 거리 + 수직 점프)는 약 126인치(320cm)가 되어야 합니다. 126인치(320cm)에서 서 있는 상태에서의 도달 거리를 빼서 필요한 수직 점프를 계산할 수 있습니다."
    },
    {
        question: "저는 키가 작습니다. 그래도 덩크를 할 수 있을까요?",
        answer: "물론입니다! 키가 장점이기는 하지만 유일한 요인은 아닙니다. 키가 6피트(183cm) 미만인 많은 선수들이 덩크를 했으며, 유명한 예로는 스퍼드 웹(5피트 7인치 / 170cm)과 네이트 로빈슨(5피트 9인치 / 175cm)이 있습니다. 이를 위해서는 전용 근력 및 플라이오메트릭 훈련을 통해 개발할 수 있는 탁월한 수직 점프가 필요합니다."
    },
    {
        question: "덩크를 할 수 있게 되기까지 얼마나 걸릴까요?",
        answer: "이것은 사람마다 크게 다릅니다. 시작 체력 수준, 유전, 나이, 훈련의 일관성과 질에 따라 다릅니다. 어떤 사람에게는 몇 달간의 전용 훈련이 필요할 수 있습니다. 다른 사람에게는 1년 이상이 걸릴 수 있습니다. 핵심은 꾸준한 노력과 현명한 훈련입니다."
    },
    {
        question: "수직 점프를 높이는 데 가장 중요한 운동은 무엇인가요?",
        answer: "근력과 파워 운동의 조합이 핵심입니다. 근력을 위해서는 스쿼트와 데드리프트와 같은 복합 리프팅에 집중하십시오. 파워와 폭발력(플라이오메트릭스)을 위해서는 박스 점프, 뎁스 점프, 런지 점프와 같은 운동이 매우 효과적입니다. 코어 운동과 유연성을 잊지 마십시오."
    },
    {
        question: "더 높이 뛰려면 특별한 농구화가 필요한가요?",
        answer: "좋은 농구화는 부상을 예방하는 데 필수적인 지지력과 접지력을 제공하지만, 그 자체만으로 점프 높이를 크게 높이지는 않습니다. 먼저 신체 훈련에 집중하십시오. 가장 좋은 신발은 발에 잘 맞고 편안하며 발 유형에 맞는 좋은 발목 지지력을 제공하는 신발입니다."
    }
]

export default function FaqKo() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    자주 묻는 질문
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
