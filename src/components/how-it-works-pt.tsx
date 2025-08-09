"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Insira Suas Estatísticas",
        description: "Insira sua altura, alcance em pé (podemos estimar para você) e seu salto vertical atual em polegadas ou centímetros.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Nós Processamos os Números",
        description: "Nossa calculadora processa instantaneamente suas medidas em relação à altura padrão do aro de 10 pés (305 cm), incluindo as polegadas extras necessárias para cravar a bola.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Obtenha Seu Resultado",
        description: "Veja se você consegue enterrar agora mesmo! Se não, mostraremos exatamente o quão mais alto você precisa pular para alcançar seu objetivo.",
    },
]

export default function HowItWorksPt() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Como Funciona
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Siga estes três passos simples para descobrir se você consegue enterrar.
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
