import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "How high do I actually need to jump to dunk?",
        answer: "To dunk a standard 10-foot (120 inches) rim, you need to get your hand about 6 inches above the rim to have enough room to control the ball. So, your total reach (standing reach + vertical jump) needs to be around 126 inches. You can calculate your required vertical jump by subtracting your standing reach from 126 inches."
    },
    {
        question: "I'm short. Is it still possible for me to dunk?",
        answer: "Absolutely! While height is an advantage, it's not the only factor. Many players under 6 feet tall have dunked, with some famous examples like Spud Webb (5'7\") and Nate Robinson (5'9\"). It requires exceptional vertical leap, which can be developed through dedicated strength and plyometric training."
    },
    {
        question: "How long will it take me to be able to dunk?",
        answer: "This varies greatly from person to person. It depends on your starting fitness level, genetics, age, and the consistency and quality of your training. For some, it might take a few months of dedicated work. For others, it could take a year or more. The key is consistent effort and smart training."
    },
    {
        question: "What are the most important exercises for increasing my vertical jump?",
        answer: "A combination of strength and power exercises is key. For strength, focus on compound lifts like squats and deadlifts. For power and explosiveness (plyometrics), exercises like box jumps, depth jumps, and lunge jumps are incredibly effective. Don't forget core work and flexibility."
    },
    {
        question: "Do I need special basketball shoes to jump higher?",
        answer: "While good basketball shoes provide essential support and traction to prevent injury, they don't significantly increase your jump height on their own. Focus on your physical training first. The best shoe is one that fits well, is comfortable, and provides good ankle support for your foot type."
    }
]

export default function Faq() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Frequently Asked Questions
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
