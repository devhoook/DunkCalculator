import DunkCalculator from '@/components/dunk-calculator';
import Faq from '@/components/faq';
import { AverageVerticalJumpArticle } from '@/app/blog/posts/average-vertical-jump';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Dunk Calculator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Use our free dunk calculator to find out if you can dunk. Enter your height, standing reach, and vertical leap to see how close you are to throwing it down. Track your progress and use our resources to improve your jump.
          </p>
        </div>
        <div className="space-y-12 md:space-y-16 pb-12">
          <DunkCalculator />
          <section id="article">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">
                        What's an Average Vertical Jump?
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8">
                   <AverageVerticalJumpArticle />
                </CardContent>
            </Card>
          </section>
          <Faq />
        </div>
      </div>
    </div>
  );
}
