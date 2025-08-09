"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Introduce tus Estadísticas",
        description: "Ingresa tu altura, alcance de pie (podemos estimarlo por ti) y tu salto vertical actual en pulgadas o centímetros.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Procesamos los Números",
        description: "Nuestra calculadora procesa instantáneamente tus medidas contra la altura estándar del aro de 10 pies (305 cm), incluyendo las pulgadas extra necesarias para machacarla.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Obtén tu Resultado",
        description: "¡Descubre si puedes hacer un mate ahora mismo! Si no, te mostraremos exactamente cuánto más alto necesitas saltar para alcanzar tu objetivo.",
    },
]

export default function HowItWorksEs() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Cómo Funciona
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Sigue estos tres sencillos pasos para descubrir si puedes hacer un mate.
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
