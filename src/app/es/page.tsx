import DunkCalculatorEs from '@/components/dunk-calculator-es';
import FaqEs from '@/components/faq-es';
import { AverageVerticalJumpArticleEs } from '@/app/es/blog/posts/average-vertical-jump-es';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionFormEs } from '@/components/subscription-form-es';
import { ContactFormEs } from '@/components/contact-form-es';
import HowItWorksEs from '@/components/how-it-works-es';

export default function HomeEs() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Calculadora de Mates
          </h1>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            ¿Puedes hacer un mate? Nuestra calculadora de mates gratuita te ayuda a descubrirlo. Introduce tu altura, alcance de pie y salto vertical para ver si tienes lo necesario para machacar el balón. Es la herramienta perfecta para que los jugadores aspirantes calculen la altura de salto que necesitan.
          </p>
        </div>
      </div>
        
      <HowItWorksEs />

      <div className="container mx-auto px-4">
        <div className="space-y-12 md:space-y-16 py-12">
          <DunkCalculatorEs />
          <section id="article">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">
                        ¿Cuál es un Salto Vertical Promedio?
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8">
                   <AverageVerticalJumpArticleEs />
                </CardContent>
            </Card>
          </section>
          <FaqEs />

          <section id="about">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Sobre el Creador</h2>
              <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                La historia detrás del sistema.
              </p>
            </div>
            <Card className="max-w-4xl mx-auto shadow-lg mt-8">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  <div className="md:col-span-2 space-y-4 text-base text-foreground/90">
                    <h3 className="text-2xl font-bold font-headline">Hola, soy Adam, gracias por visitar mi sitio.</h3>
                    <p>
                      Siempre me ha encantado el baloncesto, pero solo aprendí a hacer mates después de dejar la universidad y unirme a un partido regular con mis compañeros de trabajo, que no paraban de hablar.
                    </p>
                    <p>
                      Decían que gastaba demasiada energía en defensa. Eso encendió mi necesidad de tener una potencia de salto explosiva. Ahora, mi juego deja a los otros sudando, porque las mejoras no empiezan y terminan con los mates.
                    </p>
                    <p>
                      Busqué por todas partes estas técnicas que cambian el juego. Déjame decirte, se siente bien haber encontrado un sistema que funciona para mí. Funcionará para cualquiera, sin importar cuán alto seas. ¿Quieres aprender los secretos? Genial, este sitio te dará el alley-oop, prepárate para machacarla.
                    </p>
                    <p className="font-semibold text-primary">
                      Y recuerda, los mejores consejos y secretos van exclusivamente a nuestros suscriptores, así que asegúrate de registrarte en la lista del lado derecho de la página.
                    </p>
                  </div>
                  <aside className="md:col-span-1">
                    <div className="sticky top-24">
                        <SubscriptionFormEs />
                    </div>
                  </aside>
                </div>
              </CardContent>
            </Card>
          </section>

          <section id="contact">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Contáctanos</h2>
              <p className="mt-2 text-foreground/80 max-w-2xl mx-auto">
                Nos encantaría saber de ti.
              </p>
            </div>
            <div className="mt-8">
              <ContactFormEs />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
