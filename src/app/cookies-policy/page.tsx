import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookies Policy',
  robots: 'noindex, nofollow',
};

export default function CookiesPolicyPage() {
  return (
    <div>
      <div className="py-8 border-b">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                Cookies Policy
            </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6 text-base text-foreground/90">
            <p>This is the Cookie Policy for FreeDunkCalculator.com, accessible from https://freedunkcalculator.com</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">What Are Cookies</h2>
            <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">How We Use Cookies</h2>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Disabling Cookies</h2>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">The Cookies We Set</h2>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    <strong className="font-semibold">Site preferences cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it (like theme preferences). In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
                </li>
            </ul>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Third Party Cookies</h2>
            <p>In some special cases, we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>
                    This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content. For more information on Google Analytics cookies, see the official Google Analytics page.
                </li>
            </ul>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">More Information</h2>
            <p>Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through one of our preferred contact methods:</p>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:sendsudipinbox@gmail.com" className="text-primary hover:underline">sendsudipinbox@gmail.com</a></li>
              <li>By visiting this link: <Link href="/contact" className="text-primary hover:underline">Contact Us</Link></li>
            </ul>
        </div>
      </div>
    </div>
  );
}
