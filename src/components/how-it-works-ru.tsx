"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Введите свои данные",
        description: "Введите свой рост, досягаемость стоя (мы можем оценить это для вас) и ваш текущий вертикальный прыжок в дюймах или сантиметрах.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Мы обрабатываем числа",
        description: "Наш калькулятор мгновенно обрабатывает ваши измерения по сравнению со стандартной высотой кольца 10 футов (305 см), включая дополнительные дюймы, необходимые для того, чтобы забить мяч.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Получите свой результат",
        description: "Узнайте, можете ли вы сделать данк прямо сейчас! Если нет, мы покажем вам, насколько выше вам нужно прыгнуть, чтобы достичь своей цели.",
    },
]

export default function HowItWorksRu() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Как это работает
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Следуйте этим трем простым шагам, чтобы узнать, можете ли вы делать данк.
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
