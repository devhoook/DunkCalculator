"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. 输入您的数据",
        description: "输入您的身高、站立摸高（我们可以为您估算）以及您当前的垂直弹跳（以英寸或厘米为单位）。",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. 我们处理数据",
        description: "我们的计算器会立即根据标准的10英尺（305厘米）篮筐高度处理您的测量数据，包括完成扣篮所需的额外英寸数。",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. 获取您的结果",
        description: "看看您现在是否能扣篮！如果不能，我们将向您确切显示您需要再跳多高才能达到目标。",
    },
]

export default function HowItWorksZh() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        工作原理
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        按照这三个简单的步骤，看看您是否能扣篮。
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
