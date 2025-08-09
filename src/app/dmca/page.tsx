import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  robots: 'noindex, nofollow',
};

export default function DmcaPage() {
  return (
    <div>
      <div className="py-8 border-b">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                DMCA Policy
            </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6 text-base text-foreground/90">
            <p>FreeDunkCalculator.com respects the intellectual property rights of others and expects its users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond expeditiously to notices of alleged copyright infringement that are reported to our Designated Copyright Agent, identified below.</p>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Notice of Copyright Infringement</h2>
            <p>If you are a copyright owner, or are authorized to act on behalf of one, please report alleged copyright infringements taking place on or through our website by completing the following DMCA Notice of Alleged Infringement and delivering it to our Designated Copyright Agent.</p>
            <p>Upon receipt of the Notice as described below, we will take whatever action, in our sole discretion, we deem appropriate, including removal of the challenged material from the site.</p>

            <h3 className="text-xl font-bold font-headline">DMCA Notice of Alleged Infringement</h3>
            <p>To file a notice of infringement with us, you must provide a written communication that sets forth the items specified below:</p>
            <ol className="list-decimal pl-6 space-y-2">
                <li>Identify in sufficient detail the copyrighted work that you believe has been infringed upon.</li>
                <li>Identify the material that you claim is infringing the copyrighted work listed in item #1 above. You must include the URL(s) of the page(s) on our site containing the material.</li>
                <li>Provide information reasonably sufficient to permit us to contact you, such as an address, telephone number, and, if available, an email address.</li>
                <li>Include the following statement: "I have a good faith belief that the use of the copyrighted materials described above as allegedly infringing is not authorized by the copyright owner, its agent, or the law."</li>
                <li>Include the following statement: "I swear, under penalty of perjury, that the information in the notification is accurate and that I am the copyright owner or am authorized to act on behalf of the owner of an exclusive right that is allegedly infringed."</li>
                <li>A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
            </ol>
            
            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Designated Copyright Agent</h2>
            <p>Deliver this Notice, with all items completed, to our Designated Copyright Agent:</p>
            <ul className="list-none space-y-1">
                <li><strong>Email:</strong> <a href="mailto:sendsudipinbox@gmail.com" className="text-primary hover:underline">sendsudipinbox@gmail.com</a></li>
                <li><strong>Subject Line:</strong> DMCA Complaint</li>
            </ul>

            <h2 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Counter-Notification</h2>
            <p>If you believe that your material has been removed or disabled by mistake or misidentification, you may file a counter-notification with us by submitting a written notification to our copyright agent. Pursuant to the DMCA, the Counter-Notice must include substantially the following:</p>
            <ol className="list-decimal pl-6 space-y-2">
                <li>Your physical or electronic signature.</li>
                <li>An identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access disabled.</li>
                <li>A statement under penalty of perjury that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material.</li>
                <li>Your name, address, telephone number, and a statement that you consent to the jurisdiction of the Federal Court for the judicial district in which you are located, or if you are located outside the United States, for any judicial district in which the service provider may be found, and that you will accept service of process from the person who provided notification of the alleged infringement.</li>
            </ol>
        </div>
      </div>
    </div>
  );
}
