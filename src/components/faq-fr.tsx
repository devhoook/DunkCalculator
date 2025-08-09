import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "À quelle hauteur dois-je vraiment sauter pour dunker ?",
        answer: "Pour dunker sur un panier standard de 10 pieds (305 cm), vous devez avoir votre main à environ 6 pouces (15 cm) au-dessus de l'anneau pour avoir suffisamment d'espace pour contrôler le ballon. Donc, votre portée totale (portée debout + saut vertical) doit être d'environ 126 pouces (320 cm). Vous pouvez calculer votre saut vertical requis en soustrayant votre portée debout de 126 pouces (320 cm)."
    },
    {
        question: "Je suis petit. Est-il encore possible pour moi de dunker ?",
        answer: "Absolument ! Bien que la taille soit un avantage, ce n'est pas le seul facteur. De nombreux joueurs de moins de 6 pieds (1,83 m) ont dunké, avec des exemples célèbres comme Spud Webb (5'7\" / 1,70 m) et Nate Robinson (5'9\" / 1,75 m). Cela nécessite un saut vertical exceptionnel, qui peut être développé avec un entraînement de force et de pliométrie dédié."
    },
    {
        question: "Combien de temps me faudra-t-il pour pouvoir dunker ?",
        answer: "Cela varie beaucoup d'une personne à l'autre. Cela dépend de votre niveau de forme physique de départ, de votre génétique, de votre âge, ainsi que de la constance et de la qualité de votre entraînement. Pour certains, cela peut prendre quelques mois de travail acharné. Pour d'autres, cela peut prendre un an ou plus. La clé est un effort constant et un entraînement intelligent."
    },
    {
        question: "Quels sont les exercices les plus importants pour augmenter mon saut vertical ?",
        answer: "Une combinaison d'exercices de force et de puissance est essentielle. Pour la force, concentrez-vous sur des exercices composés comme les squats et les soulevés de terre. Pour la puissance et l'explosivité (pliométrie), des exercices comme les sauts sur boîte, les sauts en contrebas et les fentes sautées sont incroyablement efficaces. N'oubliez pas le travail du tronc et la souplesse."
    },
    {
        question: "Ai-je besoin de chaussures de basket spéciales pour sauter plus haut ?",
        answer: "Bien que de bonnes chaussures de basket offrent un soutien et une traction essentiels pour prévenir les blessures, elles n'augmentent pas de manière significative votre hauteur de saut à elles seules. Concentrez-vous d'abord sur votre entraînement physique. La meilleure chaussure est celle qui est bien ajustée, confortable et qui offre un bon soutien de la cheville pour votre type de pied."
    }
]

export default function FaqFr() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Questions Fréquemment Posées
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
