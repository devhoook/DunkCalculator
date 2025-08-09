"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "১. আপনার পরিসংখ্যান লিখুন",
        description: "আপনার উচ্চতা, দাঁড়ানো নাগাল (আমরা আপনার জন্য এটি অনুমান করতে পারি), এবং আপনার বর্তমান উল্লম্ব লাফ ইঞ্চি বা সেন্টিমিটারে ইনপুট করুন।",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "২. আমরা সংখ্যাগুলি গণনা করি",
        description: "আমাদের ক্যালকুলেটর সঙ্গে সঙ্গে আপনার পরিমাপগুলি স্ট্যান্ডার্ড ১০-ফুট (১২০-ইঞ্চি) রিমের উচ্চতার বিপরীতে প্রক্রিয়া করে, যার মধ্যে এটি স্ল্যাম করার জন্য প্রয়োজনীয় অতিরিক্ত ইঞ্চি অন্তর্ভুক্ত রয়েছে।",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "৩. আপনার ফলাফল পান",
        description: "এখনই আপনি ডাঙ্ক করতে পারেন কিনা দেখুন! যদি না পারেন, তাহলে আমরা আপনাকে দেখাব যে আপনার লক্ষ্যে পৌঁছানোর জন্য আপনাকে ঠিক কতটা উঁচুতে লাফ দিতে হবে।",
    },
]

export default function HowItWorksBn() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        এটি কিভাবে কাজ করে
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        আপনি ডাঙ্ক করতে পারেন কিনা তা জানতে এই তিনটি সহজ ধাপ অনুসরণ করুন।
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
