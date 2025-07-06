import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service',
  robots: 'noindex, nofollow',
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground min-h-dvh">
      <header className="py-8 border-b">
        <div className="container mx-auto px-4 text-center">
             <Link href="/" className="inline-block mb-4">
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    FreeDunkCalculator.com
                </h1>
            </Link>
            <p className="text-lg text-muted-foreground">Terms of Service</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6 text-base text-foreground/90">
            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://freedunkcalculator.com website (the "Service") operated by FreeDunkCalculator.com ("us", "we", or "our").</p>

            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">1. Use of the Website</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of FreeDunkCalculator.com. The Service is for your personal and non-commercial use.</p>
            <p>You agree not to misuse the Service or help anyone else to do so. This includes, but is not limited to, the following:</p>
            <ul className="list-disc pl-6 space-y-1">
                <li>Probing, scanning, or testing the vulnerability of any system or network.</li>
                <li>Breaching or otherwise circumventing any security or authentication measures.</li>
                <li>Accessing, tampering with, or using non-public areas of the Service.</li>
                <li>Interfering with or disrupting any user, host, or network.</li>
            </ul>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">2. Intellectual Property</h2>
            <p>The Service and its original content (excluding content provided by users), features and functionality are and will remain the exclusive property of FreeDunkCalculator.com and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of FreeDunkCalculator.com.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">3. Links To Other Web Sites</h2>
            <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by FreeDunkCalculator.com.</p>
            <p>FreeDunkCalculator.com has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that FreeDunkCalculator.com shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">4. Disclaimer</h2>
            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
            <p>The information provided by the calculator on this website is for informational purposes only and is not a substitute for professional advice. We do not guarantee the accuracy or completeness of any information provided.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">5. Limitation Of Liability</h2>
            <p>In no event shall FreeDunkCalculator.com, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the website owner resides, without regard to its conflict of law provisions.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">7. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
            <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at: <a href="mailto:sendsudipinbox@gmail.com" className="text-primary hover:underline">sendsudipinbox@gmail.com</a></p>
        </div>
      </main>
      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
         <div className="flex justify-center items-center gap-4 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Back to Calculator</Link>
            <span>&bull;</span>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <p>&copy; {new Date().getFullYear()} FreeDunkCalculator.com. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
