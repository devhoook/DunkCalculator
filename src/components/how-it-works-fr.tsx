"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Entrez Vos Statistiques",
        description: "Saisissez votre taille, votre portée debout (nous pouvons l'estimer pour vous), et votre saut vertical actuel en pouces ou en centimètres.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Nous Faisons les Calculs",
        description: "Notre calculateur traite instantanément vos mesures par rapport à la hauteur standard de l'anneau de 10 pieds (305 cm), y compris les pouces supplémentaires nécessaires pour le smasher.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Obtenez Votre Résultat",
        description: "Découvrez si vous pouvez dunker dès maintenant ! Sinon, nous vous montrerons exactement de combien de plus vous devez sauter pour atteindre votre objectif.",
    },
]

export default function HowItWorksFr() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Comment Ça Marche
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Suivez ces trois étapes simples pour découvrir si vous pouvez dunker.
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
