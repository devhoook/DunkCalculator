import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "¿Qué tan alto necesito saltar realmente para hacer un mate?",
        answer: "Para hacer un mate en un aro estándar de 10 pies (305 cm), necesitas que tu mano llegue unos 15 cm por encima del aro para tener suficiente espacio para controlar el balón. Por lo tanto, tu alcance total (alcance de pie + salto vertical) debe ser de alrededor de 320 cm. Puedes calcular tu salto vertical necesario restando tu alcance de pie de 320 cm."
    },
    {
        question: "Soy bajo. ¿Todavía es posible para mí hacer un mate?",
        answer: "¡Absolutamente! Aunque la altura es una ventaja, no es el único factor. Muchos jugadores de menos de 1.83 metros han hecho mates, con algunos ejemplos famosos como Spud Webb (1.70 m) y Nate Robinson (1.75 m). Requiere un salto vertical excepcional, que se puede desarrollar con entrenamiento dedicado de fuerza y pliometría."
    },
    {
        question: "¿Cuánto tiempo me llevará poder hacer un mate?",
        answer: "Esto varía mucho de persona a persona. Depende de tu nivel de condición física inicial, genética, edad y la consistencia y calidad de tu entrenamiento. Para algunos, podría llevar unos pocos meses de trabajo dedicado. Para otros, podría llevar un año o más. La clave es el esfuerzo constante y el entrenamiento inteligente."
    },
    {
        question: "¿Cuáles son los ejercicios más importantes para aumentar mi salto vertical?",
        answer: "Una combinación de ejercicios de fuerza y potencia es clave. Para la fuerza, concéntrate en levantamientos compuestos como sentadillas y peso muerto. Para la potencia y explosividad (pliometría), ejercicios como saltos al cajón, saltos de profundidad y zancadas con salto son increíblemente efectivos. No olvides el trabajo de core y la flexibilidad."
    },
    {
        question: "¿Necesito zapatillas de baloncesto especiales para saltar más alto?",
        answer: "Aunque unas buenas zapatillas de baloncesto proporcionan un soporte y tracción esenciales para prevenir lesiones, no aumentan significativamente tu altura de salto por sí solas. Concéntrate primero en tu entrenamiento físico. La mejor zapatilla es la que se ajusta bien, es cómoda y proporciona un buen soporte de tobillo para tu tipo de pie."
    }
]

export default function FaqEs() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Preguntas Frecuentes
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
