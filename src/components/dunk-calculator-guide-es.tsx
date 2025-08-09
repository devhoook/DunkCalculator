import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DunkCalculatorGuideEs() {
    return (
        <section id="guide">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">
                        La Guía Definitiva para Usar una Calculadora de Mates
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8 space-y-6 text-base text-foreground/90">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Introducción: ¿Qué es una Calculadora de Mates?</h2>
                        <p>Una calculadora de mates es una herramienta especializada diseñada para ayudar a los jugadores de baloncesto y entusiastas a determinar si tienen la capacidad física para hacer un mate en un aro estándar de 10 pies. Al introducir métricas clave como la altura, el alcance de pie y el salto vertical, una calculadora de mates proporciona un análisis preciso de tus capacidades actuales y lo que necesitas mejorar para lograr una de las jugadas más electrizantes del baloncesto. Esta guía te guiará a través de todo lo que necesitas saber sobre el uso de una calculadora de mates, la comprensión de los resultados y el entrenamiento para finalmente lograr un mate.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">¿Por qué Usar una Calculadora de Mates?</h2>
                        <p>El sueño de hacer un mate es universal entre los jugadores de baloncesto, pero a menudo se siente como un objetivo ambiguo. Una calculadora de mates desmitifica este objetivo dividiéndolo en componentes medibles. He aquí por qué es una herramienta invaluable:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Claridad y Establecimiento de Metas:</strong> Proporciona un objetivo claro y numérico. En lugar de simplemente "saltar más alto", sabrás que necesitas añadir exactamente 3 pulgadas más a tu vertical.</li>
                            <li><strong>Motivación:</strong> Ver lo cerca que estás puede ser un poderoso motivador. La barra de progreso visualiza tu viaje y te anima a seguir entrenando.</li>
                            <li><strong>Entrenamiento Inteligente:</strong> Al comprender las métricas específicas que necesitas mejorar, puedes adaptar tu régimen de entrenamiento para que sea más efectivo, centrándote en áreas como la potencia explosiva o la fuerza.</li>
                            <li><strong>Expectativas Realistas:</strong> Te ayuda a establecer expectativas realistas. Si bien casi cualquiera puede mejorar su salto vertical, la calculadora te ayuda a comprender el compromiso requerido en función de los atributos naturales de tu cuerpo.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Entendiendo las Métricas Clave</h2>
                        <p>Para obtener un resultado preciso de cualquier calculadora de mates, necesitas proporcionar entradas precisas. Desglosemos los tres componentes principales:</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Altura</h3>
                        <p>Esta es tu altura estándar sin zapatos. Aunque es un factor contribuyente, es menos importante que tu alcance de pie. Dos personas de la misma altura pueden tener longitudes de brazo muy diferentes y, por lo tanto, diferentes alcances de pie.</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Alcance de Pie</h3>
                        <p>Esta es posiblemente la medida más crítica. Tu alcance de pie es qué tan alto puedes llegar con una mano mientras estás de pie con los pies planos. Para medirlo con precisión:</p>
                        <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Párate junto a una pared con los pies planos en el suelo.</li>
                            <li>Extiende un brazo hacia arriba tan alto como puedas, manteniendo el brazo recto.</li>
                            <li>Pídele a un amigo que marque el punto más alto que toquen tus dedos, o haz una marca ligera tú mismo con tiza o un lápiz.</li>
                            <li>Mide la distancia desde el suelo hasta la marca. Ese es tu alcance de pie.</li>
                        </ol>
                        <p className="mt-2">Si no tienes una forma de medir esto, nuestra calculadora de mates puede estimarlo por ti basándose en tu altura, usando un multiplicador común (aproximadamente 1.31 veces tu altura), pero una medida directa siempre es más precisa.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">3. Salto Vertical</h3>
                        <p>Esto mide tu capacidad de salto explosivo. Es la diferencia entre tu alcance de pie y tu alcance máximo de salto. Para medir tu salto vertical:</p>
                         <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Realiza la prueba de alcance de pie como se describió anteriormente para obtener tu línea de base.</li>
                            <li>Desde una posición de pie, salta tan alto como puedas, tocando la pared en el punto más alto de tu salto. Marca este punto.</li>
                            <li>La distancia vertical entre tu marca de alcance de pie y tu marca de alcance de salto es tu salto vertical.</li>
                        </ol>
                        <p className="mt-2">Para obtener el resultado más preciso, realiza algunos saltos y toma el mejor. Asegúrate de estar usando un salto vertical "sin pasos" para los propósitos de la calculadora.</p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Cómo Funciona la Calculadora de Mates: La Matemática Detrás de la Magia</h2>
                        <p>El cálculo en sí es sencillo. El objetivo es determinar tu "Alcance Máximo de Salto" y compararlo con la "Altura Objetivo de Mate".</p>
                        <p className="mt-2"><strong className="font-semibold">Alcance Máximo de Salto = Alcance de Pie + Salto Vertical</strong></p>
                        <p className="mt-2">Sin embargo, simplemente llegar al aro no es suficiente. Para hacer un mate con éxito, necesitas que tu mano supere significativamente el aro para controlar el balón y forzarlo a través de la canasta. Una buena regla general es que necesitas alrededor de <strong className="font-semibold">6 pulgadas de espacio libre por encima del aro.</strong></p>
                        <p className="mt-2">Un aro de baloncesto estándar de la NBA, FIBA y NCAA está a 10 pies (120 pulgadas o 305 cm) del suelo.</p>
                        <p className="mt-2"><strong className="font-semibold">Altura Objetivo de Mate = Altura del Aro (120 pulgadas) + Espacio Libre para el Mate (6 pulgadas) = 126 pulgadas</strong></p>
                        <p className="mt-2">Nuestra calculadora de mates utiliza esta fórmula: calcula tu Alcance Máximo de Salto y te dice si cumple o supera la Altura Objetivo de Mate de 126 pulgadas. Si te quedas corto, calcula la diferencia, mostrándote exactamente cuánto más necesitas añadir a tu salto vertical.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Interpretando tus Resultados y Próximos Pasos</h2>
                        <p>Después de introducir tus estadísticas y presionar "Calcular", obtendrás uno de dos resultados:</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Resultado 1: ¡Felicidades, puedes hacer un mate!</h3>
                        <p>Si tu alcance máximo supera las 126 pulgadas, la calculadora de mates te dará luz verde. Esto significa que, físicamente, tienes la capacidad de salto. Ahora, se trata de traducir ese potencial en habilidad. Practica el tiempo de tu aproximación, el agarre del balón (si es posible) y la coordinación de tu salto para terminar con éxito en el aro.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Resultado 2: ¡Estás cerca! Esto es lo que necesitas.</h3>
                        <p>¡Si aún no lo has logrado, no te desanimes! Aquí es donde entra el verdadero valor de la calculadora de mates. Te dirá el número exacto de pulgadas que necesitas añadir a tu salto vertical. Este se convierte en tu nuevo objetivo de entrenamiento. Por ejemplo, si dice que necesitas 4 pulgadas más, todo tu enfoque de entrenamiento debe estar en un programa diseñado para aumentar tu vertical en esa cantidad.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Un Plan de Entrenamiento Básico para Mejorar tu Salto Vertical</h2>
                        <p>Alcanzar tu objetivo de hacer un mate requiere un plan de entrenamiento dedicado que se centre en desarrollar la potencia explosiva en tus piernas y tu core. Esto implica dos tipos principales de entrenamiento:</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Entrenamiento de Fuerza (La Base)</h3>
                        <p>No puedes ser explosivo sin una base sólida. Concéntrate en movimientos compuestos que trabajen múltiples grupos musculares en tu tren inferior y tu core.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Sentadillas:</strong> El rey de los ejercicios de piernas. Las sentadillas con barra construyen potencia bruta en tus cuádriceps, glúteos e isquiotibiales.</li>
                            <li><strong>Peso Muerto:</strong> Desarrolla toda tu cadena posterior (isquiotibiales, glúteos, espalda baja), que es crucial para la potencia de salto.</li>
                            <li><strong>Zancadas:</strong> Geniales para la fuerza y estabilidad de una sola pierna, imitando el movimiento de despegue con un pie.</li>
                            <li><strong>Elevaciones de Talones:</strong> No descuides tus pantorrillas; proporcionan el empuje final en un salto.</li>
                        </ul>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Pliometría (La Explosividad)</h3>
                        <p>La pliometría entrena a tus músculos para producir la máxima fuerza en el mínimo tiempo, la definición misma de un salto vertical.</p>
                         <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Saltos al Cajón:</strong> Salta sobre una caja o plataforma estable. Concéntrate en aterrizar suavemente y explotar hacia arriba.</li>
                            <li><strong>Saltos de Profundidad:</strong> Baja de una caja baja e, inmediatamente después de aterrizar, salta tan alto como puedas. Esto entrena el ciclo de estiramiento-acortamiento de tus músculos.</li>
                            <li><strong>Saltos con Rodillas al Pecho:</strong> Salta verticalmente y lleva tus rodillas al pecho.</li>
                            <li><strong>Saltar la Cuerda:</strong> Una forma simple pero efectiva de mejorar la coordinación y el juego de pies.</li>
                        </ul>
                         <p className="mt-4"><strong className="font-semibold">Nota Importante:</strong> Siempre prioriza la forma correcta para prevenir lesiones. Si eres nuevo en estos ejercicios, considera trabajar con un entrenador. El descanso y la recuperación son tan importantes como el entrenamiento mismo. Dale a tus músculos tiempo para repararse y fortalecerse.</p>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Conclusión: Del Cálculo a la Realidad</h2>
                        <p>Una calculadora de mates es más que una simple herramienta divertida; es una hoja de ruta. Transforma el sueño abstracto de hacer un mate en un objetivo tangible y alcanzable. Al proporcionarte datos precisos, te permite entrenar de manera más inteligente, mantenerte motivado y seguir tu progreso de manera efectiva. Introduce tus estadísticas, comprende tu objetivo y comprométete con un plan de entrenamiento constante. Con dedicación y el enfoque correcto, la calculadora de mates puede ser el primer paso en tu viaje para volar por encima del aro.</p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
