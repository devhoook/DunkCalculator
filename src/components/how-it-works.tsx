"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Enter Your Stats",
        description: "Input your height, standing reach (we can estimate it for you), and your current vertical jump in either inches or centimeters.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. We Crunch the Numbers",
        description: "Our calculator instantly processes your measurements against the standard 10-foot (120-inch) rim height, including the extra inches needed to slam it down.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Get Your Result",
        description: "See if you can dunk right now! If not, we'll show you exactly how much higher you need to jump to reach your goal.",
    },
]

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        How It Works
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Follow these three simple steps to find out if you can dunk.
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
