import DunkCalculator from '@/components/dunk-calculator';
import Faq from '@/components/faq';
import { AverageVerticalJumpArticle } from '@/app/blog/posts/average-vertical-jump';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionForm } from '@/components/subscription-form';
import { ContactForm } from '@/components/contact-form';
import HowItWorks from '@/components/how-it-works';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Dunk Calculator
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Can you dunk? Our free dunk calculator helps you find out. Enter your height, standing reach, and vertical jump to see if you have what it takes to slam a basketball. It's the perfect tool for aspiring players to calculate their jump height needs.
          </p>
        </div>
      </div>
        
      <HowItWorks />

      <div className="container mx-auto px-4">
        <div className="space-y-12 md:space-y-16 py-12">
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

          <section id="about">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">About the Creator</h2>
              <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                The story behind the system.
              </p>
            </div>
            <Card className="max-w-4xl mx-auto shadow-lg mt-8">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                    <h3 className="text-2xl font-bold font-headline">Hi, I’m Adam, thanks for checking out my site.</h3>
                    <p>
                      I’ve always loved basketball but I only learned to dunk after I left college and joined a regular game with my smack talking co-workers.
                    </p>
                    <p>
                      They said I wasted too much energy on defense. That fired up my need for the explosive jump power. Now, my game leaves the other guys sweating- because the improvements don’t start and end with dunking.
                    </p>
                    <p>
                      I searched everywhere for these game changing techniques. Let me tell you- it feels good to have found a system that works for me. It’ll work for anyone else too, no matter how tall you are. Want to learn the secrets? Cool, this site’ll give you the alley-oop, get ready to jam it.
                    </p>
                    <p className="font-semibold text-primary">
                      And remember, the best tips & secrets go exclusively to our subscribers, so make sure you sign up to the list on the right side of the page.
                    </p>
                  </div>
                  <aside className="md:col-span-1">
                    <div className="sticky top-24">
                      <SubscriptionForm />
                    </div>
                  </aside>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="contact">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Contact Us</h2>
              <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                We'd love to hear from you.
              </p>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
