"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. اپنے اعداد و شمار درج کریں",
        description: "اپنی اونچائی، کھڑے ہونے کی پہنچ (ہم آپ کے لیے اس کا اندازہ لگا سکتے ہیں)، اور اپنی موجودہ عمودی چھلانگ انچ یا سینٹی میٹر میں درج کریں۔",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. ہم اعداد و شمار کا حساب لگاتے ہیں",
        description: "ہمارا کیلکولیٹر فوری طور پر آپ کی پیمائش کو معیاری 10 فٹ (120 انچ) رم کی اونچائی کے مقابلے میں پروسیس کرتا ہے، جس میں اسے سلیم کرنے کے لیے درکار اضافی انچ شامل ہیں۔",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. اپنا نتیجہ حاصل کریں",
        description: "دیکھیں کہ کیا آپ ابھی ڈنک کر سکتے ہیں! اگر نہیں، تو ہم آپ کو دکھائیں گے کہ آپ کو اپنے مقصد تک پہنچنے کے لیے کتنی اونچی چھلانگ لگانے کی ضرورت ہے۔",
    },
]

export default function HowItWorksUr() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        یہ کیسے کام کرتا ہے
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        یہ جاننے کے لیے ان تین آسان اقدامات پر عمل کریں کہ کیا آپ ڈنک کر سکتے ہیں۔
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
