"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. İstatistiklerinizi Girin",
        description: "Boyunuzu, ayakta durma mesafenizi (sizin için tahmin edebiliriz) ve mevcut dikey sıçramanızı inç veya santimetre cinsinden girin.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Rakamları Hesaplıyoruz",
        description: "Hesaplayıcımız, ölçümlerinizi standart 10 fitlik (305 cm) pota yüksekliğine göre anında işler ve smaçlamak için gereken ekstra inçleri de içerir.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Sonucunuzu Alın",
        description: "Hemen şimdi smaç yapıp yapamayacağınızı görün! Yapamıyorsanız, hedefinize ulaşmak için ne kadar daha yükseğe sıçramanız gerektiğini size tam olarak göstereceğiz.",
    },
]

export default function HowItWorksTr() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Nasıl Çalışır
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Smaç yapıp yapamayacağınızı öğrenmek için bu üç basit adımı izleyin.
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
