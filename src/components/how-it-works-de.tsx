"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Gib deine Daten ein",
        description: "Gib deine Größe, deine Reichweite im Stehen (wir können sie für dich schätzen) und deinen aktuellen Vertikalsprung in Zoll oder Zentimetern ein.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Wir berechnen die Zahlen",
        description: "Unser Rechner verarbeitet deine Maße sofort im Vergleich zur Standard-Korbhöhe von 10 Fuß (305 cm), einschließlich der zusätzlichen Zoll, die zum Versenken benötigt werden.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Erhalte dein Ergebnis",
        description: "Sieh, ob du jetzt dunken kannst! Wenn nicht, zeigen wir dir genau, wie viel höher du springen musst, um dein Ziel zu erreichen.",
    },
]

export default function HowItWorksDe() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Wie es funktioniert
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Folge diesen drei einfachen Schritten, um herauszufinden, ob du dunken kannst.
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
