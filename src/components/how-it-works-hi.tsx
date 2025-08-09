"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. अपने आँकड़े दर्ज करें",
        description: "अपनी ऊंचाई, खड़ी पहुंच (हम आपके लिए इसका अनुमान लगा सकते हैं), और अपनी वर्तमान ऊर्ध्वाधर छलांग को इंच या सेंटीमीटर में इनपुट करें।",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. हम संख्याओं की गणना करते हैं",
        description: "हमारा कैलकुलेटर तुरंत मानक 10-फुट (120-इंच) रिम ऊंचाई के मुकाबले आपके मापों को संसाधित करता है, जिसमें इसे स्लैम करने के लिए आवश्यक अतिरिक्त इंच शामिल हैं।",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. अपना परिणाम प्राप्त करें",
        description: "देखें कि क्या आप अभी डंक कर सकते हैं! यदि नहीं, तो हम आपको दिखाएंगे कि आपको अपने लक्ष्य तक पहुंचने के लिए कितनी ऊंची छलांग लगानी होगी।",
    },
]

export default function HowItWorksHi() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        यह कैसे काम करता है
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        यह जानने के लिए इन तीन सरल चरणों का पालन करें कि क्या आप डंक कर सकते हैं।
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
