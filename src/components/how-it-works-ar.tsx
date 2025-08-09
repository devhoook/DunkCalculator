"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. أدخل إحصائياتك",
        description: "أدخل طولك، ومدى وصولك وقوفًا (يمكننا تقديره لك)، وقفزتك العمودية الحالية بالبوصة أو بالسنتيمتر.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. نحن نقوم بحساب الأرقام",
        description: "تقوم الحاسبة الخاصة بنا بمعالجة قياساتك على الفور مقابل ارتفاع الحلقة القياسي البالغ 10 أقدام (120 بوصة)، بما في ذلك البوصات الإضافية اللازمة لضربها بقوة.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. احصل على نتيجتك",
        description: "انظر ما إذا كان بإمكانك القيام بالدنك الآن! إذا لم يكن كذلك، فسنوضح لك بالضبط مقدار الارتفاع الإضافي الذي تحتاجه للقفز للوصول إلى هدفك.",
    },
]

export default function HowItWorksAr() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        كيف تعمل
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        اتبع هذه الخطوات الثلاث البسيطة لمعرفة ما إذا كان بإمكانك القيام بالدنك.
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
