import DunkCalculator from '@/components/dunk-calculator';
import Faq from '@/components/faq';

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
          <Faq />
        </div>
      </div>
    </div>
  );
}
