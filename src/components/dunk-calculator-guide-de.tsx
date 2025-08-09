import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DunkCalculatorGuideDe() {
    return (
        <section id="guide">
            <Card className="max-w-4xl mx-auto shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-3xl text-center">
                        Der ultimative Leitfaden zur Verwendung eines Dunk-Rechners
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8 space-y-6 text-base text-foreground/90">
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Einleitung: Was ist ein Dunk-Rechner?</h2>
                        <p>Ein Dunk-Rechner ist ein spezielles Werkzeug, das Basketballspielern und -begeisterten dabei helfen soll, festzustellen, ob sie die körperliche Fähigkeit haben, einen Basketball in einen standardmäßigen 10-Fuß-Korb zu dunken. Durch die Eingabe wichtiger Kennzahlen wie Größe, Reichweite im Stehen und Vertikalsprung bietet ein Dunk-Rechner eine präzise Analyse Ihrer aktuellen Fähigkeiten und was Sie verbessern müssen, um eines der aufregendsten Spiele des Basketballs zu erreichen. Dieser Leitfaden führt Sie durch alles, was Sie über die Verwendung eines Dunk-Rechners, das Verständnis der Ergebnisse und das Training wissen müssen, um endlich einen Dunk zu landen.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Warum einen Dunk-Rechner verwenden?</h2>
                        <p>Der Traum vom Dunken ist unter Basketballspielern universell, aber er fühlt sich oft wie ein unklares Ziel an. Ein Dunk-Rechner entmystifiziert dieses Ziel, indem er es in messbare Komponenten zerlegt. Deshalb ist es ein unschätzbares Werkzeug:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Klarheit und Zielsetzung:</strong> Es bietet ein klares, numerisches Ziel. Anstatt nur "höher zu springen", wissen Sie, dass Sie genau 3 weitere Zoll zu Ihrem Vertikalsprung hinzufügen müssen.</li>
                            <li><strong>Motivation:</strong> Zu sehen, wie nah Sie dran sind, kann ein starker Motivator sein. Der Fortschrittsbalken visualisiert Ihre Reise und ermutigt Sie, weiter zu trainieren.</li>
                            <li><strong>Intelligentes Training:</strong> Indem Sie die spezifischen Kennzahlen verstehen, die Sie verbessern müssen, können Sie Ihr Trainingsprogramm effektiver gestalten und sich auf Bereiche wie explosive Kraft oder Stärke konzentrieren.</li>
                            <li><strong>Realistische Erwartungen:</strong> Es hilft Ihnen, realistische Erwartungen zu setzen. Während fast jeder seinen Vertikalsprung verbessern kann, hilft Ihnen der Rechner, den erforderlichen Aufwand basierend auf den natürlichen Eigenschaften Ihres Körpers zu verstehen.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Die wichtigsten Kennzahlen verstehen</h2>
                        <p>Um ein genaues Ergebnis von einem Dunk-Rechner zu erhalten, müssen Sie genaue Eingaben machen. Lassen Sie uns die drei Kernkomponenten aufschlüsseln:</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Größe</h3>
                        <p>Dies ist Ihre Standardgröße ohne Schuhe. Obwohl es ein beitragender Faktor ist, ist es weniger wichtig als Ihre Reichweite im Stehen. Zwei Personen gleicher Größe können sehr unterschiedliche Armlängen und daher unterschiedliche Reichweiten im Stehen haben.</p>
                        
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Reichweite im Stehen</h3>
                        <p>Dies ist wohl die kritischste Messung. Ihre Reichweite im Stehen ist, wie hoch Sie mit einer Hand reichen können, während Sie mit flachen Füßen stehen. Um sie genau zu messen:</p>
                        <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Stellen Sie sich mit flachen Füßen neben eine Wand.</li>
                            <li>Reichen Sie mit einer Hand so hoch wie möglich nach oben und halten Sie Ihren Arm gerade.</li>
                            <li>Lassen Sie einen Freund den höchsten Punkt markieren, den Ihre Fingerspitzen berühren, oder machen Sie selbst eine leichte Markierung mit Kreide oder einem Bleistift.</li>
                            <li>Messen Sie den Abstand vom Boden zur Markierung. Das ist Ihre Reichweite im Stehen.</li>
                        </ol>
                        <p className="mt-2">Wenn Sie keine Möglichkeit haben, dies zu messen, kann unser Dunk-Rechner es für Sie basierend auf Ihrer Größe schätzen, indem er einen gängigen Multiplikator (ungefähr das 1,31-fache Ihrer Größe) verwendet, aber eine direkte Messung ist immer genauer.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">3. Vertikalsprung</h3>
                        <p>Dies misst Ihre explosive Sprungfähigkeit. Es ist der Unterschied zwischen Ihrer Reichweite im Stehen und Ihrer maximalen Sprungreichweite. Um Ihren Vertikalsprung zu messen:</p>
                         <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Führen Sie den oben beschriebenen Reichweitentest im Stehen durch, um Ihre Basislinie zu erhalten.</li>
                            <li>Springen Sie aus dem Stand so hoch wie möglich und berühren Sie die Wand am Höhepunkt Ihres Sprungs. Markieren Sie diesen Punkt.</li>
                            <li>Der vertikale Abstand zwischen Ihrer Reichweitenmarkierung im Stehen und Ihrer Sprungreichweitenmarkierung ist Ihr Vertikalsprung.</li>
                        </ol>
                        <p className="mt-2">Für das genaueste Ergebnis führen Sie einige Sprünge durch und nehmen Sie den besten. Stellen Sie sicher, dass Sie für die Zwecke des Rechners einen Vertikalsprung "ohne Anlauf" verwenden.</p>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Wie der Dunk-Rechner funktioniert: Die Mathematik hinter der Magie</h2>
                        <p>Die Berechnung selbst ist unkompliziert. Das Ziel ist es, Ihre "maximale Sprungreichweite" zu bestimmen und sie mit der "Zieldunkhöhe" zu vergleichen.</p>
                        <p className="mt-2"><strong className="font-semibold">Maximale Sprungreichweite = Reichweite im Stehen + Vertikalsprung</strong></p>
                        <p className="mt-2">Es reicht jedoch nicht aus, nur den Korb zu erreichen. Um erfolgreich zu dunken, müssen Sie Ihre Hand deutlich über den Korb bringen, um den Ball zu kontrollieren und ihn durch den Ring zu zwingen. Eine gute Faustregel ist, dass Sie etwa <strong className="font-semibold">6 Zoll Spielraum über dem Korb</strong> benötigen.</p>
                        <p className="mt-2">Ein Standard-Basketballkorb der NBA, FIBA und NCAA ist 10 Fuß (120 Zoll oder 305 cm) hoch.</p>
                        <p className="mt-2"><strong className="font-semibold">Zieldunkhöhe = Korbhöhe (120 Zoll) + Dunk-Spielraum (6 Zoll) = 126 Zoll</strong></p>
                        <p className="mt-2">Unser Dunk-Rechner verwendet diese Formel: Er berechnet Ihre maximale Sprungreichweite und sagt Ihnen, ob sie die Zieldunkhöhe von 126 Zoll erreicht oder überschreitet. Wenn Sie zu kurz kommen, berechnet er die Differenz und zeigt Ihnen genau, wie viel Sie Ihrem Vertikalsprung hinzufügen müssen.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Interpretation Ihrer Ergebnisse und nächste Schritte</h2>
                        <p>Nachdem Sie Ihre Daten eingegeben und auf "Berechnen" geklickt haben, erhalten Sie eines von zwei Ergebnissen:</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Ergebnis 1: Herzlichen Glückwunsch, Sie können dunken!</h3>
                        <p>Wenn Ihre maximale Reichweite über 126 Zoll liegt, gibt Ihnen der Dunk-Rechner grünes Licht. Das bedeutet, dass Sie körperlich die Sprungfähigkeit haben. Jetzt geht es darum, dieses Potenzial in Können umzusetzen. Üben Sie, Ihren Anlauf zu timen, den Basketball zu palmen (wenn möglich) und Ihren Sprung zu koordinieren, um am Korb erfolgreich abzuschließen.</p>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">Ergebnis 2: Sie sind nah dran! Hier ist, was Sie brauchen.</h3>
                        <p>Wenn Sie noch nicht so weit sind, lassen Sie sich nicht entmutigen! Hier liegt der wahre Wert des Dunk-Rechners. Er wird Ihnen die genaue Anzahl der Zoll nennen, die Sie Ihrem Vertikalsprung hinzufügen müssen. Dies wird Ihr neues Trainingsziel. Wenn er zum Beispiel sagt, dass Sie 4 weitere Zoll benötigen, sollte Ihr gesamtes Training darauf ausgerichtet sein, Ihren Vertikalsprung um diesen Betrag zu erhöhen.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Ein grundlegender Trainingsplan zur Verbesserung Ihres Vertikalsprungs</h2>
                        <p>Das Erreichen Ihres Dunking-Ziels erfordert einen engagierten Trainingsplan, der sich auf den Aufbau explosiver Kraft in Ihren Beinen und Ihrem Rumpf konzentriert. Dies beinhaltet zwei Haupttypen von Training:</p>
                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">1. Krafttraining (Die Grundlage)</h3>
                        <p>Ohne eine starke Basis können Sie nicht explosiv sein. Konzentrieren Sie sich auf Verbundbewegungen, die mehrere Muskelgruppen in Ihrem Unterkörper und Rumpf trainieren.</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Kniebeugen:</strong> Der König der Beinübungen. Langhantel-Kniebeugen bauen rohe Kraft in Ihren Quadrizeps, Gesäßmuskeln und Oberschenkelrückseiten auf.</li>
                            <li><strong>Kreuzheben:</strong> Entwickelt Ihre gesamte hintere Kette (Oberschenkelrückseiten, Gesäßmuskeln, unterer Rücken), die für die Sprungkraft entscheidend ist.</li>
                            <li><strong>Ausfallschritte:</strong> Hervorragend für einbeinige Kraft und Stabilität, die die einbeinige Absprungbewegung nachahmen.</li>
                            <li><strong>Wadenheben:</strong> Vernachlässigen Sie Ihre Waden nicht; sie sorgen für den letzten Stoß bei einem Sprung.</li>
                        </ul>

                        <h3 className="text-xl font-bold font-headline mt-4 mb-2">2. Plyometrie (Die Explosivität)</h3>
                        <p>Plyometrie trainiert Ihre Muskeln, maximale Kraft in minimaler Zeit zu erzeugen – die eigentliche Definition eines Vertikalsprungs.</p>
                         <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li><strong>Box-Jumps:</strong> Springen Sie auf eine stabile Box oder Plattform. Konzentrieren Sie sich auf eine weiche Landung und einen explosiven Aufwärtssprung.</li>
                            <li><strong>Tiefensprünge:</strong> Steigen Sie von einer niedrigen Box und springen Sie sofort nach der Landung so hoch wie möglich. Dies trainiert den Dehnungs-Verkürzungs-Zyklus Ihrer Muskeln.</li>
                            <li><strong>Hocksprünge:</strong> Springen Sie vertikal und ziehen Sie Ihre Knie zur Brust.</li>
                            <li><strong>Seilspringen:</strong> Eine einfache, aber effektive Möglichkeit, Koordination und Fußarbeit zu verbessern.</li>
                        </ul>
                         <p className="mt-4"><strong className="font-semibold">Wichtiger Hinweis:</strong> Priorisieren Sie immer die richtige Form, um Verletzungen vorzubeugen. Wenn Sie neu bei diesen Übungen sind, ziehen Sie in Erwägung, mit einem Trainer zu arbeiten. Ruhe und Erholung sind genauso wichtig wie das Training selbst. Geben Sie Ihren Muskeln Zeit, sich zu reparieren und stärker zu werden.</p>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold font-headline mb-2">Fazit: Von der Berechnung zur Realität</h2>
                        <p>Ein Dunk-Rechner ist mehr als nur ein lustiges Werkzeug; er ist eine Roadmap. Er verwandelt den abstrakten Traum vom Dunken in ein greifbares, erreichbares Ziel. Indem er Ihnen präzise Daten liefert, befähigt er Sie, intelligenter zu trainieren, motiviert zu bleiben und Ihren Fortschritt effektiv zu verfolgen. Geben Sie Ihre Daten ein, verstehen Sie Ihr Ziel und verpflichten Sie sich zu einem konsequenten Trainingsplan. Mit Engagement und dem richtigen Ansatz kann der Dunk-Rechner der erste Schritt auf Ihrer Reise sein, um über den Korb zu schweben.</p>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
