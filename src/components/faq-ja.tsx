import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "ダンクするには実際にどれくらい高くジャンプする必要がありますか？",
        answer: "標準の10フィート（305 cm）のリムにダンクするには、ボールをコントロールするのに十分なスペースを確保するために、リムから約6インチ（15 cm）上に手を伸ばす必要があります。したがって、合計リーチ（スタンディングリーチ+垂直跳び）は約126インチ（320 cm）必要です。必要な垂直跳びは、126インチ（320 cm）からスタンディングリーチを引くことで計算できます。"
    },
    {
        question: "私は背が低いですが、それでもダンクすることは可能ですか？",
        answer: "もちろんです！身長は有利ですが、それが唯一の要因ではありません。身長6フィート（183 cm）未満の多くの選手がダンクをしており、スパッド・ウェッブ（5フィート7インチ/170 cm）やネイト・ロビンソン（5フィート9インチ/175 cm）などの有名な例があります。それには並外れた垂直跳びが必要ですが、これは専門的な筋力トレーニングとプライオメトリックトレーニングによって開発できます。"
    },
    {
        question: "ダンクできるようになるまでどのくらいかかりますか？",
        answer: "これは人によって大きく異なります。それはあなたの初期のフィットネスレベル、遺伝、年齢、そしてトレーニングの一貫性と質によって異なります。一部の人にとっては、数ヶ月の専門的なトレーニングで達成できるかもしれません。他の人にとっては、1年以上かかるかもしれません。重要なのは、一貫した努力と賢いトレーニングです。"
    },
    {
        question: "垂直跳びを向上させるために最も重要なエクササイズは何ですか？",
        answer: "筋力とパワーエクササイズの組み合わせが重要です。筋力のためには、スクワットやデッドリフトのような複合的なリフトに集中してください。パワーと爆発力（プライオメトリクス）のためには、ボックスジャンプ、デプスジャンプ、ランジジャンプのようなエクササイズが非常に効果的です。コアワークと柔軟性を忘れないでください。"
    },
    {
        question: "より高くジャンプするために特別なバスケットボールシューズが必要ですか？",
        answer: "良いバスケットボールシューズは怪我を防ぐために不可欠なサポートとトラクションを提供しますが、それだけでジャンプの高さを大幅に向上させることはありません。まず、身体的なトレーニングに集中してください。最高のシューズは、よくフィットし、快適で、足のタイプに適した足首のサポートを提供するものです。"
    }
]

export default function FaqJa() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    よくある質問
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
