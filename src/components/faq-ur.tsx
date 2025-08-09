import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
    {
        question: "مجھے واقعی ڈنک کرنے کے لیے کتنی اونچی چھلانگ لگانے کی ضرورت ہے؟",
        answer: "ایک معیاری 10 فٹ (120 انچ) رم کو ڈنک کرنے کے لیے، آپ کو اپنے ہاتھ کو رم سے تقریباً 6 انچ اوپر لے جانے کی ضرورت ہے تاکہ گیند کو کنٹرول کرنے کے لیے کافی جگہ ہو۔ لہذا، آپ کی کل پہنچ (کھڑے ہونے کی پہنچ + عمودی چھلانگ) تقریباً 126 انچ ہونی چاہیے۔ آپ 126 انچ سے اپنی کھڑے ہونے کی پہنچ کو گھٹا کر اپنی مطلوبہ عمودی چھلانگ کا حساب لگا سکتے ہیں۔"
    },
    {
        question: "میں چھوٹا ہوں۔ کیا میرے لیے اب بھی ڈنک کرنا ممکن ہے؟",
        answer: "بالکل! جب کہ اونچائی ایک فائدہ ہے، یہ واحد عنصر نہیں ہے۔ 6 فٹ سے کم لمبے بہت سے کھلاڑیوں نے ڈنک کیا ہے، جن کی کچھ مشہور مثالیں سپڈ ویب (5'7\") اور نیٹ رابنسن (5'9\") ہیں۔ اس کے لیے غیر معمولی عمودی چھلانگ کی ضرورت ہوتی ہے، جسے وقف شدہ طاقت اور پلائیومیٹرک تربیت کے ذریعے تیار کیا جا سکتا ہے۔"
    },
    {
        question: "مجھے ڈنک کرنے کے قابل ہونے میں کتنا وقت لگے گا؟",
        answer: "یہ ہر شخص کے لیے بہت مختلف ہوتا ہے۔ یہ آپ کی ابتدائی فٹنس لیول، جینیات، عمر، اور آپ کی تربیت کی مستقل مزاجی اور معیار پر منحصر ہے۔ کچھ کے لیے، اس میں چند مہینوں کی وقف شدہ محنت لگ سکتی ہے۔ دوسروں کے لیے، اس میں ایک سال یا اس سے زیادہ لگ سکتا ہے۔ کلید مستقل کوشش اور ہوشیار تربیت ہے۔"
    },
    {
        question: "میری عمودی چھلانگ کو بڑھانے کے لیے سب سے اہم مشقیں کون سی ہیں؟",
        answer: "طاقت اور طاقت کی مشقوں کا امتزاج کلید ہے۔ طاقت کے لیے، اسکواٹس اور ڈیڈ لفٹس جیسی مرکب لفٹوں پر توجہ دیں۔ طاقت اور دھماکہ خیزی (پلائیومیٹرکس) کے لیے، باکس جمپس، ڈیپتھ جمپس، اور لنج جمپس جیسی مشقیں ناقابل یقین حد تک موثر ہیں۔ کور ورک اور لچک کو نہ بھولیں۔"
    },
    {
        question: "کیا مجھے اونچی چھلانگ لگانے کے لیے خاص باسکٹ بال کے جوتوں کی ضرورت ہے؟",
        answer: "جب کہ اچھے باسکٹ بال کے جوتے چوٹ سے بچنے کے لیے ضروری مدد اور کرشن فراہم کرتے ہیں، وہ خود سے آپ کی چھلانگ کی اونچائی میں نمایاں اضافہ نہیں کرتے ہیں۔ پہلے اپنی جسمانی تربیت پر توجہ دیں۔ بہترین جوتا وہ ہے جو اچھی طرح سے فٹ بیٹھتا ہے، آرام دہ ہے، اور آپ کے پاؤں کی قسم کے لیے اچھا ٹخنے کا سہارا فراہم کرتا ہے۔"
    }
]

export default function FaqUr() {
  return (
    <section id="faq">
        <Card className="max-w-4xl mx-auto shadow-lg" dir="rtl">
            <CardHeader>
                <CardTitle className="font-headline text-3xl text-center">
                    اکثر پوچھے گئے سوالات
                </CardTitle>
            </CardHeader>
            <CardContent className="px-6 md:px-8">
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-right font-semibold text-lg hover:no-underline">
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
