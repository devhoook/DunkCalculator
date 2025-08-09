import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DunkCalculatorGuideFr() {
    return (
        <section id="guide">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">
                        Le Guide Ultime pour Utiliser un Calculateur de Dunk
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8 space-y-6 text-base text-foreground/90">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Introduction : Qu'est-ce qu'un Calculateur de Dunk ?</h2>
                        <p>Un calculateur de dunk est un outil spécialisé conçu pour aider les joueurs de basket-ball et les passionnés à déterminer s'ils ont la capacité physique de dunker un ballon de basket sur un panier standard de 10 pieds. En saisissant des mesures clés comme la taille, la portée debout et le saut vertical, un calculateur de dunk fournit une analyse précise de vos capacités actuelles et de ce que vous devez améliorer pour réaliser l'une des actions les plus électrisantes du basket-ball. Ce guide vous expliquera tout ce que vous devez savoir sur l'utilisation d'un calculateur de dunk, la compréhension des résultats et l'entraînement pour enfin réussir un dunk.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Pourquoi Utiliser un Calculateur de Dunk ?</h2>
                        <p>Le rêve de dunker est universel chez les joueurs de basket-ball, mais il semble souvent être un objectif ambigu. Un calculateur de dunk démystifie cet objectif en le décomposant en composantes mesurables. Voici pourquoi c'est un outil inestimable :</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Clarté et Définition d'Objectifs :</strong> Il fournit un objectif clair et numérique. Au lieu de simplement "sauter plus haut", vous saurez que vous devez ajouter exactement 3 pouces de plus à votre saut vertical.</li>
                            <li><strong>Motivation :</strong> Voir à quel point vous êtes proche peut être un puissant facteur de motivation. La barre de progression visualise votre parcours et vous encourage à continuer l'entraînement.</li>
                            <li><strong>Entraînement Intelligent :</strong> En comprenant les mesures spécifiques que vous devez améliorer, vous pouvez adapter votre programme d'entraînement pour qu'il soit plus efficace, en vous concentrant sur des domaines comme la puissance explosive ou la force.</li>
                            <li><strong>Attentes Réalistes :</strong> Il vous aide à définir des attentes réalistes. Bien que presque tout le monde puisse améliorer son saut vertical, le calculateur vous aide à comprendre l'engagement requis en fonction des attributs naturels de votre corps.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Comprendre les Mesures Clés</h2>
                        <p>Pour obtenir un résultat précis de n'importe quel calculateur de dunk, vous devez fournir des données précises. Décomposons les trois composantes principales :</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Taille</h3>
                        <p>C'est votre taille standard sans chaussures. Bien que ce soit un facteur contributif, il est moins important que votre portée debout. Deux personnes de la même taille peuvent avoir des longueurs de bras très différentes et, par conséquent, des portées debout différentes.</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Portée Debout</h3>
                        <p>C'est sans doute la mesure la plus critique. Votre portée debout est la hauteur que vous pouvez atteindre avec une main en étant debout, les pieds à plat. Pour la mesurer avec précision :</p>
                        <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Tenez-vous à côté d'un mur, les pieds à plat sur le sol.</li>
                            <li>Levez une main aussi haut que possible, en gardant le bras tendu.</li>
                            <li>Demandez à un ami de marquer le point le plus haut que vos doigts touchent, ou faites vous-même une légère marque avec de la craie ou un crayon.</li>
                            <li>Mesurez la distance entre le sol et la marque. C'est votre portée debout.</li>
                        </ol>
                        <p className="mt-2">Si vous n'avez pas de moyen de mesurer cela, notre calculateur de dunk peut l'estimer pour vous en fonction de votre taille, en utilisant un multiplicateur courant (environ 1,31 fois votre taille), mais une mesure directe est toujours plus précise.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">3. Saut Vertical</h3>
                        <p>Cela mesure votre capacité de saut explosif. C'est la différence entre votre portée debout et votre portée de saut maximale. Pour mesurer votre saut vertical :</p>
                         <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Effectuez le test de portée debout comme décrit ci-dessus pour obtenir votre ligne de base.</li>
                            <li>Depuis une position de départ debout, sautez aussi haut que possible, en touchant le mur au sommet de votre saut. Marquez cet endroit.</li>
                            <li>La distance verticale entre votre marque de portée debout et votre marque de portée de saut est votre saut vertical.</li>
                        </ol>
                        <p className="mt-2">Pour le résultat le plus précis, effectuez quelques sauts et prenez le meilleur. Assurez-vous d'utiliser un saut vertical "sans élan" pour les besoins du calculateur.</p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Comment Fonctionne le Calculateur de Dunk : Les Maths Derrière la Magie</h2>
                        <p>Le calcul lui-même est simple. L'objectif est de déterminer votre "Portée de Saut Maximale" et de la comparer à la "Hauteur de Dunk Cible".</p>
                        <p className="mt-2"><strong className="font-semibold">Portée de Saut Maximale = Portée Debout + Saut Vertical</strong></p>
                        <p className="mt-2">Cependant, atteindre simplement l'anneau ne suffit pas. Pour réussir un dunk, vous devez passer votre main bien au-dessus de l'anneau pour contrôler le ballon et le forcer à travers le cerceau. Une bonne règle de base est que vous avez besoin d'environ <strong className="font-semibold">6 pouces de marge au-dessus de l'anneau.</strong></p>
                        <p className="mt-2">Un panier de basket standard de la NBA, de la FIBA et de la NCAA est à 10 pieds (120 pouces ou 305 cm) du sol.</p>
                        <p className="mt-2"><strong className="font-semibold">Hauteur de Dunk Cible = Hauteur de l'Anneau (120 pouces) + Marge de Dunk (6 pouces) = 126 pouces</strong></p>
                        <p className="mt-2">Notre calculateur de dunk utilise cette formule : il calcule votre Portée de Saut Maximale et vous indique si elle atteint ou dépasse la Hauteur de Dunk Cible de 126 pouces. Si vous êtes en deçà, il calcule la différence, vous montrant exactement combien vous devez ajouter à votre saut vertical.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Interpréter Vos Résultats et Prochaines Étapes</h2>
                        <p>Après avoir saisi vos statistiques et cliqué sur "Calculer", vous obtiendrez l'un des deux résultats suivants :</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Résultat 1 : Félicitations, Vous Pouvez Dunker !</h3>
                        <p>Si votre portée maximale est supérieure à 126 pouces, le calculateur de dunk vous donnera le feu vert. Cela signifie que, physiquement, vous avez la capacité de sauter. Maintenant, il s'agit de traduire ce potentiel en compétence. Entraînez-vous à synchroniser votre approche, à paumer le ballon (si possible) et à coordonner votre saut pour réussir à l'anneau.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Résultat 2 : Vous y êtes presque ! Voici ce dont vous avez besoin.</h3>
                        <p>Si vous n'y êtes pas encore, ne vous découragez pas ! C'est là que réside la vraie valeur du calculateur de dunk. Il vous indiquera le nombre exact de pouces que vous devez ajouter à votre saut vertical. Cela devient votre nouvel objectif d'entraînement. Par exemple, s'il indique que vous avez besoin de 4 pouces de plus, toute votre concentration d'entraînement devrait être sur un programme conçu pour augmenter votre saut vertical de cette quantité.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Un Plan d'Entraînement de Base pour Améliorer Votre Saut Vertical</h2>
                        <p>Atteindre votre objectif de dunker nécessite un plan d'entraînement dédié qui se concentre sur le développement de la puissance explosive dans vos jambes et votre tronc. Cela implique deux principaux types d'entraînement :</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Entraînement de Force (La Fondation)</h3>
                        <p>Vous ne pouvez pas être explosif sans une base solide. Concentrez-vous sur les mouvements composés qui travaillent plusieurs groupes musculaires de votre bas du corps et de votre tronc.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Squats :</strong> Le roi des exercices pour les jambes. Les squats avec barre développent la force brute de vos quadriceps, fessiers et ischio-jambiers.</li>
                            <li><strong>Soulevés de terre :</strong> Développe toute votre chaîne postérieure (ischio-jambiers, fessiers, bas du dos), ce qui est crucial pour la puissance de saut.</li>
                            <li><strong>Fentes :</strong> Idéales pour la force et la stabilité sur une jambe, imitant le mouvement de décollage sur un pied.</li>
                            <li><strong>Mollets :</strong> Ne négligez pas vos mollets ; ils fournissent la poussée finale lors d'un saut.</li>
                        </ul>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Pliométrie (L'Explosivité)</h3>
                        <p>La pliométrie entraîne vos muscles à produire une force maximale en un minimum de temps, la définition même d'un saut vertical.</p>
                         <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Sauts sur boîte :</strong> Sautez sur une boîte ou une plate-forme stable. Concentrez-vous sur un atterrissage en douceur et une explosion vers le haut.</li>
                            <li><strong>Sauts en contrebas :</strong> Descendez d'une boîte basse et, immédiatement après l'atterrissage, sautez aussi haut que possible. Cela entraîne le cycle d'étirement-raccourcissement de vos muscles.</li>
                            <li><strong>Sauts groupés :</strong> Sautez verticalement et ramenez vos genoux vers votre poitrine.</li>
                            <li><strong>Corde à sauter :</strong> Un moyen simple mais efficace d'améliorer la coordination et le jeu de jambes.</li>
                        </ul>
                         <p className="mt-4"><strong className="font-semibold">Note Importante :</strong> Donnez toujours la priorité à la forme correcte pour éviter les blessures. Si vous êtes nouveau dans ces exercices, envisagez de travailler avec un entraîneur. Le repos et la récupération sont tout aussi importants que l'entraînement lui-même. Donnez à vos muscles le temps de se réparer et de se renforcer.</p>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Conclusion : Du Calcul à la Réalité</h2>
                        <p>Un calculateur de dunk est plus qu'un simple outil amusant ; c'est une feuille de route. Il transforme le rêve abstrait de dunker en un objectif tangible et réalisable. En vous fournissant des données précises, il vous permet de vous entraîner plus intelligemment, de rester motivé et de suivre vos progrès efficacement. Saisissez vos statistiques, comprenez votre objectif et engagez-vous dans un plan d'entraînement cohérent. Avec de la détermination et la bonne approche, le calculateur de dunk peut être la première étape de votre voyage pour vous élever au-dessus de l'anneau.</p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
