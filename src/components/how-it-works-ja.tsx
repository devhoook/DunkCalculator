"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. あなたのステータスを入力",
        description: "身長、スタンディングリーチ（推定可能）、現在の垂直跳びをインチまたはセンチメートルで入力してください。",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. 数値を計算します",
        description: "当社の計算機は、あなたの測定値を標準の10フィート（305 cm）のリムの高さと即座に照合し、ダンクに必要な追加のインチを含めて計算します。",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. 結果を取得",
        description: "今すぐダンクできるかどうかを確認してください！できない場合は、目標を達成するためにあとどれくらい高くジャンプする必要があるかを正確に示します。",
    },
]

export default function HowItWorksJa() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        使い方
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        ダンクできるかどうかを調べるには、次の3つの簡単な手順に従ってください。
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <Card key={step.title} className="text-center shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                {step.icon}
                                <CardTitle className="font-headline text-2xl">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{step.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
