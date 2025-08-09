"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Ruler, Calculator, Target } from "lucide-react"

const steps = [
    {
        icon: <Ruler className="h-10 w-10 text-primary mb-4" />,
        title: "1. Nhập chỉ số của bạn",
        description: "Nhập chiều cao, tầm với khi đứng (chúng tôi có thể ước tính cho bạn) và cú nhảy thẳng đứng hiện tại của bạn bằng inch hoặc centimet.",
    },
    {
        icon: <Calculator className="h-10 w-10 text-primary mb-4" />,
        title: "2. Chúng tôi xử lý các con số",
        description: "Máy tính của chúng tôi xử lý ngay lập tức các phép đo của bạn so với chiều cao vành rổ tiêu chuẩn 10 feet (305 cm), bao gồm cả những inch cần thiết để úp rổ.",
    },
    {
        icon: <Target className="h-10 w-10 text-primary mb-4" />,
        title: "3. Nhận kết quả của bạn",
        description: "Xem bạn có thể úp rổ ngay bây giờ không! Nếu không, chúng tôi sẽ cho bạn biết chính xác bạn cần nhảy cao hơn bao nhiêu để đạt được mục tiêu của mình.",
    },
]

export default function HowItWorksVi() {
    return (
        <section id="how-it-works" className="py-12 md:py-16 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Cách hoạt động
                    </h2>
                    <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                        Thực hiện theo ba bước đơn giản sau để tìm hiểu xem bạn có thể úp rổ không.
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
