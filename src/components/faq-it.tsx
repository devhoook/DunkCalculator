import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "Quanto in alto devo saltare per schiacciare?",
        answer: "Per schiacciare un canestro standard da 10 piedi (305 cm), devi portare la mano a circa 6 pollici (15 cm) sopra il canestro per avere abbastanza spazio per controllare la palla. Quindi, la tua portata totale (portata da fermo + salto verticale) deve essere di circa 126 pollici (320 cm). Puoi calcolare il tuo salto verticale richiesto sottraendo la tua portata da fermo da 126 pollici (320 cm)."
    },
    {
        question: "Sono basso. È ancora possibile per me schiacciare?",
        answer: "Assolutamente! Sebbene l'altezza sia un vantaggio, non è l'unico fattore. Molti giocatori alti meno di 1,83 m hanno schiacciato, con alcuni esempi famosi come Spud Webb (1,70 m) и Nate Robinson (1,75 m). Richiede un salto verticale eccezionale, che può essere sviluppato con un allenamento dedicato di forza e pliometria."
    },
    {
        question: "Quanto tempo ci vorrà per riuscire a schiacciare?",
        answer: "Questo varia molto da persona a persona. Dipende dal tuo livello di forma fisica di partenza, dalla genetica, dall'età e dalla costanza e qualità del tuo allenamento. Per alcuni, potrebbe volerci qualche mese di lavoro dedicato. Per altri, potrebbe volerci un anno o più. La chiave è uno sforzo costante e un allenamento intelligente."
    },
    {
        question: "Quali sono gli esercizi più importanti per aumentare il mio salto verticale?",
        answer: "Una combinazione di esercizi di forza e potenza è la chiave. Per la forza, concentrati su sollevamenti composti come squat e stacchi. Per la potenza e l'esplosività (pliometria), esercizi come i box jump, i depth jump e gli affondi con salto sono incredibilmente efficaci. Non dimenticare il lavoro sul core e la flessibilità."
    },
    {
        question: "Ho bisogno di scarpe da basket speciali per saltare più in alto?",
        answer: "Sebbene delle buone scarpe da basket forniscano un supporto e una trazione essenziali per prevenire gli infortuni, non aumentano significativamente la tua altezza di salto da sole. Concentrati prima sul tuo allenamento fisico. La scarpa migliore è quella che calza bene, è comoda e fornisce un buon supporto alla caviglia per il tuo tipo di piede."
    }
]

export default function FaqIt() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Domande Frequenti
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
