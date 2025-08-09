import DunkCalculatorHi from '@/components/dunk-calculator-hi';
import FaqHi from '@/components/faq-hi';
import { AverageVerticalJumpArticleHi } from '@/app/hi/blog/posts/average-vertical-jump-hi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormHi } from '@/components/subscription-form-hi';
import { ContactFormHi } from '@/components/contact-form-hi';
import HowItWorksHi from '@/components/how-it-works-hi';
import { HeaderHi } from '@/components/header-hi';
import { FooterHi } from '@/components/footer-hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'डंक कैलकुलेटर | अपनी वर्टिकल जंप की गणना के लिए मुफ्त उपकरण',
  description: 'यह देखने के लिए हमारे मुफ्त डंक कैलकुलेटर का उपयोग करें कि क्या आप डंक कर सकते हैं। अपनी ऊंचाई, खड़ी पहुंच और वर्टिकल जंप दर्ज करें ताकि तुरंत गणना की जा सके कि क्या आप रिम तक पहुंच सकते हैं और बास्केटबॉल को स्लैम कर सकते हैं।',
  alternates: {
    canonical: '/hi',
  },
};

export default function HomeHi() {
  return (
    <>
      <HeaderHi />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                डंक कैलकुलेटर
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                क्या आप डंक कर सकते हैं? हमारा मुफ्त डंक कैलकुलेटर आपको यह पता लगाने में मदद करता है। अपनी ऊंचाई, खड़ी पहुंच और वर्टिकल जंप दर्ज करें ताकि यह देखा जा सके कि आपमें बास्केटबॉल को स्लैम करने की क्षमता है या नहीं। यह महत्वाकांक्षी खिलाड़ियों के लिए अपनी जंप ऊंचाई की जरूरतों की गणना करने के लिए एकदम सही उपकरण है।
              </p>
            </div>
          </div>
            
          <HowItWorksHi />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorHi />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            औसत वर्टिकल जंप क्या है?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleHi />
                    </CardContent>
                </Card>
              </section>
              <FaqHi />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">निर्माता के बारे में</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    सिस्टम के पीछे की कहानी।
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">नमस्ते, मैं एडम हूं, मेरी साइट पर आने के लिए धन्यवाद।</h3>
                        <p>
                          मुझे हमेशा बास्केटबॉल से प्यार रहा है लेकिन मैंने कॉलेज छोड़ने और अपने बकवास करने वाले सहकर्मियों के साथ एक नियमित खेल में शामिल होने के बाद ही डंक करना सीखा।
                        </p>
                        <p>
                          उन्होंने कहा कि मैंने रक्षा पर बहुत अधिक ऊर्जा बर्बाद की। इसने विस्फोटक कूद शक्ति की मेरी आवश्यकता को हवा दी। अब, मेरा खेल दूसरे लोगों को पसीना छुड़ा देता है- क्योंकि सुधार डंकिंग के साथ शुरू और खत्म नहीं होते हैं।
                        </p>
                        <p>
                          मैंने इन गेम बदलने वाली तकनीकों के लिए हर जगह खोज की। मैं आपको बता दूं- मेरे लिए काम करने वाला एक सिस्टम ढूंढकर अच्छा लग रहा है। यह किसी और के लिए भी काम करेगा, चाहे आप कितने भी लंबे क्यों न हों। रहस्य जानना चाहते हैं? बढ़िया, यह साइट आपको एली-अप देगी, इसे जाम करने के लिए तैयार हो जाइए।
                        </p>
                        <p className="font-semibold text-primary">
                          और याद रखें, सबसे अच्छी युक्तियाँ और रहस्य विशेष रूप से हमारे ग्राहकों को मिलते हैं, इसलिए सुनिश्चित करें कि आप पृष्ठ के दाईं ओर सूची के लिए साइन अप करें।
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormHi />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">हमसे संपर्क करें</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    हमें आपसे सुनना अच्छा लगेगा।
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormHi />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterHi />
    </>
  );
}
