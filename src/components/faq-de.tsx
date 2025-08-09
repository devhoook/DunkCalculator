import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "Wie hoch muss ich wirklich springen, um zu dunken?",
        answer: "Um einen Standard-10-Fuß-Korb (305 cm) zu dunken, müssen Sie Ihre Hand etwa 6 Zoll (15 cm) über den Korb bringen, um genügend Platz zur Kontrolle des Balls zu haben. Ihre Gesamtreichweite (Reichweite im Stehen + Vertikalsprung) muss also etwa 126 Zoll (320 cm) betragen. Sie können Ihren erforderlichen Vertikalsprung berechnen, indem Sie Ihre Reichweite im Stehen von 126 Zoll (320 cm) abziehen."
    },
    {
        question: "Ich bin klein. Ist es für mich trotzdem möglich zu dunken?",
        answer: "Absolut! Obwohl Größe ein Vorteil ist, ist sie nicht der einzige Faktor. Viele Spieler unter 1,83 m haben gedunkt, einige berühmte Beispiele sind Spud Webb (1,70 m) und Nate Robinson (1,75 m). Es erfordert einen außergewöhnlichen Vertikalsprung, der durch gezieltes Kraft- und Plyometrietraining entwickelt werden kann."
    },
    {
        question: "Wie lange wird es dauern, bis ich dunken kann?",
        answer: "Das ist von Person zu Person sehr unterschiedlich. Es hängt von Ihrem anfänglichen Fitnesslevel, Ihrer Genetik, Ihrem Alter und der Beständigkeit und Qualität Ihres Trainings ab. Für einige kann es einige Monate gezielter Arbeit dauern. Für andere kann es ein Jahr oder länger dauern. Der Schlüssel ist konstanter Aufwand und intelligentes Training."
    },
    {
        question: "Was sind die wichtigsten Übungen, um meinen Vertikalsprung zu steigern?",
        answer: "Eine Kombination aus Kraft- und Kraftübungen ist der Schlüssel. Konzentrieren Sie sich für die Kraft auf Verbundübungen wie Kniebeugen und Kreuzheben. Für Kraft und Explosivität (Plyometrie) sind Übungen wie Box-Jumps, Tiefensprünge und Ausfallschritt-Sprünge unglaublich effektiv. Vergessen Sie nicht die Rumpfarbeit und die Flexibilität."
    },
    {
        question: "Brauche ich spezielle Basketballschuhe, um höher zu springen?",
        answer: "Obwohl gute Basketballschuhe wesentliche Unterstützung und Traktion bieten, um Verletzungen vorzubeugen, erhöhen sie Ihre Sprunghöhe nicht signifikant von allein. Konzentrieren Sie sich zuerst auf Ihr körperliches Training. Der beste Schuh ist einer, der gut passt, bequem ist und eine gute Knöchelunterstützung für Ihren Fußtyp bietet."
    }
]

export default function FaqDe() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Häufig gestellte Fragen
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
