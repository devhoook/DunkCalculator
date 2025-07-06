import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: 'noindex, nofollow',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      <header className="py-8 border-b">
        <div className="container mx-auto px-4 text-center">
             <Link href="/" className="inline-block mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    FreeDunkCalculator.com
                </h1>
            </Link>
            <p className="text-lg text-muted-foreground">Privacy Policy</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6 text-base text-foreground/90">
            <p>Welcome to FreeDunkCalculator.com. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our website.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <h3 className="text-xl font-bold font-headline">a. Non-Personal Information</h3>
            <p>When you use our site, we automatically collect limited, anonymous data such as:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Browser type and version</li>
                <li>Device type and operating system</li>
                <li>IP address (for analytics purposes only)</li>
                <li>Pages visited and time spent on the site</li>
            </ul>
            <p>This information is collected through tools like Google Analytics to help us improve site performance and user experience.</p>

            <h3 className="text-xl font-bold font-headline">b. Personal Information (Optional)</h3>
            <p>We do not require you to create an account or submit personal data to use the Dunk Calculator. However, you may choose to submit information via:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Contact forms</li>
                <li>Feedback forms</li>
                <li>Email correspondence</li>
            </ul>
            <p>This information may include your name, email address, and message content. It will only be used to respond to your inquiry.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Analyze and improve website functionality</li>
                <li>Respond to your inquiries or support requests</li>
                <li>Monitor and prevent security threats or abuse</li>
            </ul>
            <p>We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">3. Cookies</h2>
            <p>Our website may use cookies to:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Remember preferences for improved user experience</li>
                <li>Collect anonymous traffic data via analytics tools</li>
            </ul>
            <p>You can disable cookies through your browser settings, although some features may be limited.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">4. Third-Party Services</h2>
            <p>We may use trusted third-party tools and services (e.g., Google Analytics) to enhance our website. These services may collect data as governed by their own privacy policies.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">5. Data Security</h2>
            <p>We implement standard security measures to protect your information. However, no data transmission or storage system can be guaranteed to be 100% secure.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">6. Children’s Privacy</h2>
            <p>FreeDunkCalculator.com is not intended for children under 13. We do not knowingly collect personal information from children. If you believe we have, please contact us so we can delete the information.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">7. Your Rights</h2>
            <p>You may:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Request access to any personal data we hold about you</li>
                <li>Ask us to delete your personal information</li>
                <li>Opt out of cookies and analytics tracking via your browser</li>
            </ul>
            <p>To make a request, contact us at: <a href="mailto:sendsudipinbox@gmail.com" className="text-primary hover:underline">sendsudipinbox@gmail.com</a></p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy periodically. Changes will be posted on this page with an updated revision date. Please review regularly for updates.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please contact:</p>
            <ul className="list-none space-y-1">
              <li>Email: <a href="mailto:sendsudipinbox@gmail.com" className="text-primary hover:underline">sendsudipinbox@gmail.com</a></li>
              <li>Website: <Link href="https://freedunkcalculator.com" className="text-primary hover:underline">https://freedunkcalculator.com</Link></li>
            </ul>
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
         <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Back to Calculator</Link>
            <span>&bull;</span>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <span>&bull;</span>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
            <span>&bull;</span>
            <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
