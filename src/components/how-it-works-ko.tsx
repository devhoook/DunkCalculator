"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. 통계 입력",
        description: "키, 서 있는 상태에서의 도달 거리(추정 가능), 현재 수직 점프를 인치 또는 센티미터로 입력하십시오.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. 숫자 계산",
        description: "저희 계산기는 표준 10피트(305cm) 림 높이와 비교하여 귀하의 측정값을 즉시 처리하며, 슬램하는 데 필요한 추가 인치를 포함합니다.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. 결과 확인",
        description: "지금 바로 덩크를 할 수 있는지 확인하십시오! 그렇지 않다면 목표에 도달하기 위해 얼마나 더 높이 점프해야 하는지 정확히 알려드리겠습니다.",
    },
]

export default function HowItWorksKo() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        작동 방식
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        덩크를 할 수 있는지 알아보려면 다음 세 가지 간단한 단계를 따르십시오.
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
