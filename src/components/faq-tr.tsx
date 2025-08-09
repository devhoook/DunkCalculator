import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "Smaç yapmak için ne kadar yükseğe sıçramam gerekiyor?",
        answer: "Standart 10 fitlik (305 cm) bir potaya smaç yapmak için, topu kontrol etmek için yeterli alana sahip olmak için elinizi potanın yaklaşık 6 inç (15 cm) üzerine çıkarmanız gerekir. Bu nedenle, toplam erişiminiz (ayakta durma mesafesi + dikey sıçrama) yaklaşık 126 inç (320 cm) olmalıdır. Gerekli dikey sıçramanızı, ayakta durma mesafenizi 126 inçten (320 cm) çıkararak hesaplayabilirsiniz."
    },
    {
        question: "Kısayım. Yine de smaç yapabilir miyim?",
        answer: "Kesinlikle! Boy bir avantaj olsa da, tek faktör bu değil. 6 fitten (183 cm) kısa birçok oyuncu smaç yaptı, ünlü örnekler arasında Spud Webb (5'7\" / 170 cm) ve Nate Robinson (5'9\" / 175 cm) yer alıyor. Bu, özel güç ve plyometrik antrenmanlarla geliştirilebilecek olağanüstü bir dikey sıçrama gerektirir."
    },
    {
        question: "Smaç yapabilmem ne kadar sürer?",
        answer: "Bu kişiden kişiye çok değişir. Başlangıçtaki kondisyon seviyenize, genetiğinize, yaşınıza ve antrenmanınızın tutarlılığına ve kalitesine bağlıdır. Bazıları için birkaç aylık özel çalışma gerekebilir. Diğerleri için bir yıl veya daha uzun sürebilir. Anahtar, tutarlı çaba ve akıllı antrenmandır."
    },
    {
        question: "Dikey sıçramamı artırmak için en önemli egzersizler nelerdir?",
        answer: "Güç ve kuvvet egzersizlerinin bir kombinasyonu anahtardır. Güç için, squat ve deadlift gibi bileşik kaldırmalara odaklanın. Güç ve patlayıcılık (plyometrics) için, kutu atlamaları, derinlik atlamaları ve lunge atlamaları gibi egzersizler inanılmaz derecede etkilidir. Karın kası çalışmasını ve esnekliği unutmayın."
    },
    {
        question: "Daha yükseğe zıplamak için özel basketbol ayakkabılarına ihtiyacım var mı?",
        answer: "İyi basketbol ayakkabıları sakatlanmayı önlemek için gerekli desteği ve çekişi sağlarken, tek başlarına zıplama yüksekliğinizi önemli ölçüde artırmazlar. Önce fiziksel antrenmanınıza odaklanın. En iyi ayakkabı, iyi oturan, rahat olan ve ayak tipinize uygun iyi bir bilek desteği sağlayan ayakkabıdır."
    }
]

export default function FaqTr() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    Sıkça Sorulan Sorular
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
