import DunkCalculatorFr from '@/components/dunk-calculator-fr';
import FaqFr from '@/components/faq-fr';
import { AverageVerticalJumpArticleFr } from '@/app/fr/blog/posts/average-vertical-jump-fr';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormFr } from '@/components/subscription-form-fr';
import { ContactFormFr } from '@/components/contact-form-fr';
import HowItWorksFr from '@/components/how-it-works-fr';
import { HeaderFr } from '@/components/header-fr';
import { FooterFr } from '@/components/footer-fr';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculateur de Dunk | Outil Gratuit pour Calculer Votre Saut Vertical',
  description: 'Utilisez notre calculateur de dunk gratuit pour voir si vous pouvez dunker. Entrez votre taille, votre portée debout et votre saut vertical pour voir instantanément si vous pouvez atteindre l\'anneau et smasher un ballon de basket.',
  alternates: {
    canonical: '/fr',
  },
};

export default function HomeFr() {
  return (
    <>
      <HeaderFr />
      <main className="flex-grow">
        <div>
          <div className="container mx-auto px-4">
            <div className="text-center py-12 md:py-16">
              <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
                Calculateur de Dunk
              </h1>
              <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                Pouvez-vous dunker ? Notre calculateur de dunk gratuit vous aide à le découvrir. Entrez votre taille, votre portée debout et votre saut vertical pour voir si vous avez ce qu'il faut pour smasher un ballon de basket. C'est l'outil parfait pour les joueurs aspirants pour calculer leurs besoins en hauteur de saut.
              </p>
            </div>
          </div>
            
          <HowItWorksFr />

          <div className="container mx-auto px-4">
            <div className="space-y-12 md:space-y-16 py-12">
              <DunkCalculatorFr />
              <section id="article">
                <Card className="max-w-4xl mx-auto shadow-lg">
                    <CardHeader>
                        <CardTitle className="font-headline text-3xl text-center">
                            Qu'est-ce qu'un Saut Vertical Moyen ?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 md:px-8">
                      <AverageVerticalJumpArticleFr />
                    </CardContent>
                </Card>
              </section>
              <FaqFr />

              <section id="about">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">À propos du Créateur</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    L'histoire derrière le système.
                  </p>
                </div>
                <Card className="max-w-4xl mx-auto shadow-lg mt-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                        <h3 className="text-2xl font-bold font-headline">Salut, je suis Adam, merci de visiter mon site.</h3>
                        <p>
                          J'ai toujours aimé le basket, mais je n'ai appris à dunker qu'après avoir quitté l'université et rejoint une partie régulière avec mes collègues chambreurs.
                        </p>
                        <p>
                          Ils disaient que je dépensais trop d'énergie en défense. Cela a déclenché mon besoin de puissance de saut explosive. Maintenant, mon jeu laisse les autres en sueur - car les améliorations ne commencent pas et ne se terminent pas avec le dunk.
                        </p>
                        <p>
                          J'ai cherché partout ces techniques qui changent la donne. Laissez-moi vous dire - ça fait du bien d'avoir trouvé un système qui fonctionne pour moi. Il fonctionnera pour n'importe qui d'autre aussi, peu importe votre taille. Vous voulez apprendre les secrets ? Cool, ce site vous donnera le alley-oop, préparez-vous à le smasher.
                        </p>
                        <p className="font-semibold text-primary">
                          Et rappelez-vous, les meilleurs conseils et secrets sont exclusivement réservés à nos abonnés, alors assurez-vous de vous inscrire à la liste sur le côté droit de la page.
                        </p>
                      </div>
                      <aside className="md:col-span-1">
                        <div className="sticky top-24">
                          <SubscriptionFormFr />
                        </div>
                      </aside>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="contact">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold font-headline">Contactez-nous</h2>
                  <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                    Nous serions ravis de vous entendre.
                  </p>
                </div>
                <div className="mt-8">
                  <ContactFormFr />
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <FooterFr />
    </>
  );
}
