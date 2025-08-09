import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "ما هو الارتفاع الذي أحتاجه للقفز للقيام بالدنك؟",
        answer: "للقيام بالدنك على حلقة قياسية بارتفاع 10 أقدام (120 بوصة)، يجب أن تصل يدك إلى حوالي 6 بوصات فوق الحلقة للحصول على مساحة كافية للتحكم في الكرة. لذا، يجب أن يكون إجمالي وصولك (الوصول وقوفًا + القفز العمودي) حوالي 126 بوصة. يمكنك حساب القفز العمودي المطلوب عن طريق طرح مدى وصولك وقوفًا من 126 بوصة."
    },
    {
        question: "أنا قصير. هل لا يزال من الممكن أن أقوم بالدنك؟",
        answer: "بالتأكيد! في حين أن الطول ميزة، إلا أنه ليس العامل الوحيد. قام العديد من اللاعبين الذين يقل طولهم عن 6 أقدام بالدنك، مع بعض الأمثلة الشهيرة مثل سبود ويب (5'7 بوصة) ونيت روبنسون (5'9 بوصة). يتطلب الأمر قفزة عمودية استثنائية، والتي يمكن تطويرها من خلال تدريب القوة والتدريب البليومتري المخصص."
    },
    {
        question: "كم من الوقت سيستغرق مني أن أتمكن من القيام بالدنك؟",
        answer: "يختلف هذا بشكل كبير من شخص لآخر. يعتمد ذلك على مستوى لياقتك البدنية الأولي، وعلم الوراثة، والعمر، واتساق وجودة تدريبك. بالنسبة للبعض، قد يستغرق الأمر بضعة أشهر من العمل المخصص. بالنسبة للآخرين، قد يستغرق الأمر عامًا أو أكثر. المفتاح هو الجهد المستمر والتدريب الذكي."
    },
    {
        question: "ما هي أهم التمارين لزيادة قفزتي العمودية؟",
        answer: "مزيج من تمارين القوة والقوة هو المفتاح. للقوة، ركز على الرفعات المركبة مثل القرفصاء والرفعة المميتة. للقوة والانفجارية (البليومتريات)، تعتبر التمارين مثل قفز الصندوق، والقفزات العميقة، والقفزات الاندفاعية فعالة بشكل لا يصدق. لا تنس عمل الجذع والمرونة."
    },
    {
        question: "هل أحتاج إلى أحذية كرة سلة خاصة للقفز أعلى؟",
        answer: "في حين أن أحذية كرة السلة الجيدة توفر دعمًا وجرًا أساسيًا لمنع الإصابة، إلا أنها لا تزيد من ارتفاع قفزتك بشكل كبير بمفردها. ركز على تدريبك البدني أولاً. أفضل حذاء هو الذي يناسبك جيدًا ومريح ويوفر دعمًا جيدًا للكاحل لنوع قدمك."
    }
]

export default function FaqAr() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    أسئلة مكررة
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
