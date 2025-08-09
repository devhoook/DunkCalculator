import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "Quão alto eu realmente preciso saltar para enterrar?",
        answer: "Para enterrar em um aro padrão de 10 pés (305 cm), você precisa que sua mão alcance cerca de 6 polegadas (15 cm) acima do aro para ter espaço suficiente para controlar a bola. Portanto, seu alcance total (alcance em pé + salto vertical) precisa ser de cerca de 126 polegadas (320 cm). Você pode calcular seu salto vertical necessário subtraindo seu alcance em pé de 126 polegadas (320 cm)."
    },
    {
        question: "Eu sou baixo. Ainda é possível eu enterrar?",
        answer: "Com certeza! Embora a altura seja uma vantagem, não é o único fator. Muitos jogadores com menos de 1,83 m já enterraram, com alguns exemplos famosos como Spud Webb (1,70 m) e Nate Robinson (1,75 m). Requer um salto vertical excepcional, que pode ser desenvolvido com treinamento dedicado de força e pliometria."
    },
    {
        question: "Quanto tempo levará para eu conseguir enterrar?",
        answer: "Isso varia muito de pessoa para pessoa. Depende do seu nível de condicionamento físico inicial, genética, idade e da consistência e qualidade do seu treinamento. Para alguns, pode levar alguns meses de trabalho dedicado. Para outros, pode levar um ano ou mais. A chave é o esforço consistente e o treinamento inteligente."
    },
    {
        question: "Quais são os exercícios mais importantes para aumentar meu salto vertical?",
        answer: "Uma combinação de exercícios de força e potência é fundamental. Para força, concentre-se em levantamentos compostos como agachamentos e levantamento terra. Para potência e explosividade (pliometria), exercícios como saltos na caixa, saltos de profundidade e afundos com salto são incrivelmente eficazes. Não se esqueça do trabalho de core e da flexibilidade."
    },
    {
        question: "Preciso de tênis de basquete especiais para saltar mais alto?",
        answer: "Embora bons tênis de basquete forneçam suporte e tração essenciais para prevenir lesões, eles não aumentam significativamente sua altura de salto por si só. Concentre-se primeiro no seu treinamento físico. O melhor tênis é aquele que se ajusta bem, é confortável e oferece um bom suporte de tornozelo para o seu tipo de pé."
    }
]

export default function FaqPt() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Perguntas Frequentes
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 md:px-8">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-foreground/80">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
    </section>
  )
}
