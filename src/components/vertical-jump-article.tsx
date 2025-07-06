import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function VerticalJumpArticle() {
  return (
    <section id="article">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-center">
            What's an Average Vertical Jump?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-base text-foreground/90 px-6 md:px-8">
          <p>
            Both male and female athletes sometimes want to know how they stack up relative to average vertical jump ability of other men and women. There’s actually a lot to this question. I’m going to give you some of the research data on average vertical jump among men and women in their twenties, but first I’ve got to make my case about why you shouldn’t really care anyway.
          </p>

          <h3 className="text-2xl font-bold font-headline pt-4 border-t mt-6">What Does Average Vertical Jump Mean?</h3>
          <p>
            Average is not a word with a precise meaning. It can refer to the mean or the median. The median is the point at which half the people jump the same or higher and half jump the same or lower. You get the mean by adding up all the vertical leap heights and dividing by the number of jumpers. So if you have five people, and four have 20-inch vertical leap and one has a 40-inch vertical, the median is 20 (half jump as high or higher, half jump as high or lower) and the mean is 24, thrown off by the one jumper in the group. So by one measure, someone with a 22-inch jump is below average and by another he’s above average.
          </p>
          <p>
            Because one very high or very low jumper can skew the numbers so much, the important number is the median and so that’s what we’ll take for our normal vertical jump ability.
          </p>

          <div className="bg-secondary/50 p-4 rounded-lg my-4 italic border-l-4 border-primary">
            <p>
              Need a personalized program to boost to your jump training?{' '}
              <Link href="#" className="font-semibold text-primary hover:underline not-italic">
                Check out my Vertical Mastery review to see why it’s better than the Jump Manual.
              </Link>
            </p>
          </div>

          <h3 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Normal Vertical Jump Relative to Whom?</h3>
          <p>
            Now here’s the question that really matters. Do you really care what the normal vertical leap is among the general population? In the 1960-1962, only 9.8% of males and 9.3% of females age 20-39 were obese. By 2000, those numbers stood at 23.7 for men and 28.4 for women (Patterson, 2004, p. 39). Since high body fat correlates to poor vertical jump performance, an athlete interested in vertical jump norms probably does not care about a study that includes a representative cross-section of the society, with the quarter of the population bringing the numbers down, because that does not represent the athletes you actually compete against.
          </p>
          <p>
            On the flip side, most of the vertical jump studies deal with school children and elite athletes at the college and pro levels. So again, most people who are asking about average vertical leap probably don’t care a whole lot about how they stack up against ten year-olds or Lebron James (or a Division I college basketball player for that matter). So to be meaningful, you would need to find a population that’s similar to the one that you want to measure up against.
          </p>

          <h3 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Now Some Numbers</h3>
          <p>
            There are some studies that apply pretty well to the average weekend warrior type or to the high-school athlete. One of the best and most recent studied a group of medical students with a profile more similar to the population in 1960 than 2000, meaning some overweight people, but not the large numbers we see today.
          </p>
          <p>
            Also, jump performance gradually increases from age 10 to high school, and then stays relatively steady until at least age 30 (Patterson, 2004, p. 39). This study found no significant decline in jump performance over the decade from age 21-30, so for anyone from late high school through age 30, these are some pretty good measures if you want to see whether or not you’re above average among reasonably fit people, but not elite athletes.
          </p>
          <p>
            Among this group, this is how the numbers broke out (Patterson, 2004, p. 33). Please note these are mean scores, but they do give the range and it is not huge, so they should be relatively close to the median (all scores in inches).
          </p>
          <ul className="list-disc pl-6 space-y-2 py-2">
            <li><strong className="font-semibold">Men, 21-30:</strong> 22.1 +/- 3.4, average Body Mass Index, 25.4</li>
            <li><strong className="font-semibold">Women, 21-30:</strong> 14.1, +/- 2.5, average Body Mass Index, 23.5</li>
          </ul>
          <p>
            But that’s just average. Want to know if you’re really good or really bad?
          </p>
          <p>
            To be in the 95th percentile for men, meaning better than 94% of the men out there, aged 21-25 (essentially in their prime), you would have to jump 28 inches. To be in the 95% percentile for women, you would have to jump 19 inches. On the other hand, if you just want to make sure you’re not in the bottom 5%, you must jump at least 16.5 inches for men and 10 inches for women (Patterson, 2004, p. 38).
          </p>
          <p>
            If you’re between 17 and 30 and in a somewhat fitter than average population, there’s some numbers to shoot for. Want to know how you stack up against a tougher crowd? Over at BodyBuilding.com Josh Henkin says
          </p>
          <blockquote className="border-l-4 border-primary/50 pl-4 my-4 italic text-muted-foreground">
            <p className="mb-2">Average Vertical Leap of NCAA Div. 1 Football player: 29-31 inches.</p>
            <p>Average Vertical Leap of NCAA Div. 1 Basketball player: 27-30 inches</p>
          </blockquote>
          <p>
            Meanwhile, Michael Jordan had a reported 48" vertical, but that’s still short of the amazing Kadour Ziani, the world record holder at 60" vertical (though a lot of places say 56"). Not bad for a guy who’s 5’11".
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
