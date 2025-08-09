"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Inserisci le tue statistiche",
        description: "Inserisci la tua altezza, la tua portata da fermo (possiamo stimarla per te) e il tuo attuale salto verticale in pollici o centimetri.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Noi elaboriamo i numeri",
        description: "Il nostro calcolatore elabora istantaneamente le tue misurazioni rispetto all'altezza standard del canestro di 10 piedi (305 cm), inclusi i pollici extra necessari per schiacciarla.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Ottieni il tuo risultato",
        description: "Scopri se riesci a schiacciare subito! In caso contrario, ti mostreremo esattamente quanto più in alto devi saltare per raggiungere il tuo obiettivo.",
    },
]

export default function HowItWorksIt() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Come funziona
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Segui questi tre semplici passaggi per scoprire se riesci a schiacciare.
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
