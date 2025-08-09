import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "我到底需要跳多高才能扣篮？",
        answer: "要在标准的10英尺（305厘米）篮筐上扣篮，您的手需要高出篮筐约6英寸（15厘米），以便有足够的空间控制球。因此，您的总摸高（站立摸高+垂直弹跳）需要达到约126英寸（320厘米）。您可以通过从126英寸（320厘米）中减去您的站立摸高来计算所需的垂直弹跳。"
    },
    {
        question: "我个子矮。我还能扣篮吗？",
        answer: "当然可以！虽然身高是一个优势，但它不是唯一的因素。许多身高不足6英尺（1.83米）的球员都曾扣篮，著名的例子有斯伯特·韦伯（5英尺7英寸/1.70米）和内特·罗宾逊（5英尺9英寸/1.75米）。这需要非凡的垂直弹跳能力，可以通过专门的力量和增强式训练来培养。"
    },
    {
        question: "我需要多长时间才能扣篮？",
        answer: "这因人而异。它取决于您的初始体能水平、遗传、年龄以及训练的持续性和质量。对于一些人来说，可能需要几个月的专注努力。对于其他人来说，可能需要一年或更长时间。关键是持续的努力和聪明的训练。"
    },
    {
        question: "增加我垂直弹跳的最重要练习是什么？",
        answer: "力量和爆发力练习的结合是关键。对于力量，重点是复合举重，如深蹲和硬拉。对于爆发力和爆发力（增强式训练），像跳箱、跳深和弓步跳这样的练习非常有效。不要忘记核心训练和柔韧性。"
    },
    {
        question: "我需要特殊的篮球鞋来跳得更高吗？",
        answer: "虽然好的篮球鞋为防止受伤提供了必要的支撑和牵引力，但它们本身并不能显著增加您的跳跃高度。首先要专注于您的体能训练。最好的鞋子是合脚、舒适并为您的脚型提供良好脚踝支撑的鞋子。"
    }
]

export default function FaqZh() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    常见问题
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
