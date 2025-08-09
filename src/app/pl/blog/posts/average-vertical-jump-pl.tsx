import Link from 'next/link';

export function AverageVerticalJumpArticlePl() {
    return (
        <div className="space-y-4 text-base text-foreground/90">
             <p>
                Zarówno sportowcy płci męskiej, jak i żeńskiej, czasami chcą wiedzieć, jak wypadają na tle przeciętnych zdolności do skoku pionowego innych mężczyzn i kobiet. W tym pytaniu kryje się tak naprawdę wiele. Podam wam niektóre dane badawcze dotyczące przeciętnego skoku pionowego wśród mężczyzn i kobiet w wieku dwudziestu lat, ale najpierw muszę przedstawić swoje argumenty, dlaczego tak naprawdę nie powinno was to obchodzić.
            </p>

            <h3 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Co oznacza przeciętny skok pionowy?</h3>
            <p>
                Przeciętny to słowo bez precyzyjnego znaczenia. Może odnosić się do średniej lub mediany. Mediana to punkt, w którym połowa ludzi skacze na taką samą wysokość lub wyżej, a połowa na taką samą wysokość lub niżej. Średnią otrzymuje się, sumując wszystkie wysokości skoków pionowych i dzieląc przez liczbę skoczków. Jeśli więc masz pięć osób, a cztery mają 20-calowy skok pionowy, a jedna 40-calowy, mediana wynosi 20 (połowa skacze na taką samą wysokość lub wyżej, połowa na taką samą wysokość lub niżej), a średnia wynosi 24, zafałszowana przez jednego skoczka w grupie. Tak więc według jednej miary ktoś ze skokiem 22-calowym jest poniżej przeciętnej, a według innej powyżej.
            </p>
            <p>
                Ponieważ jeden bardzo wysoki lub bardzo niski skoczek może tak bardzo zniekształcić liczby, ważną liczbą jest mediana, i to właśnie ją przyjmiemy za naszą normalną zdolność do skoku pionowego.
            </p>

            <div className="bg-secondary/50 p-4 rounded-lg my-4 italic border-l-4 border-primary">
                <p>
                Potrzebujesz spersonalizowanego programu, aby wzmocnić swój trening skoków?{' '}
                <Link href="#" className="font-semibold text-primary hover:underline not-italic">
                    Sprawdź moją recenzję Vertical Mastery, aby zobaczyć, dlaczego jest lepszy niż Jump Manual.
                </Link>
                </p>
            </div>

            <h3 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Normalny skok pionowy w stosunku do kogo?</h3>
            <p>
                Oto pytanie, które naprawdę ma znaczenie. Czy naprawdę obchodzi cię, jaki jest normalny skok pionowy w populacji ogólnej? W latach 1960-1962 tylko 9,8% mężczyzn i 9,3% kobiet w wieku 20-39 lat było otyłych. Do 2000 roku liczby te wynosiły 23,7 dla mężczyzn i 28,4 dla kobiet (Patterson, 2004, s. 39). Ponieważ wysoki poziom tkanki tłuszczowej koreluje ze słabymi wynikami w skoku pionowym, sportowiec zainteresowany normami skoku pionowego prawdopodobnie nie będzie zainteresowany badaniem, które obejmuje reprezentatywny przekrój społeczeństwa, z jedną czwartą populacji zaniżającą wyniki, ponieważ nie reprezentuje to sportowców, z którymi faktycznie konkurujesz.
            </p>
            <p>
                Z drugiej strony, większość badań dotyczących skoku pionowego dotyczy dzieci w wieku szkolnym i elitarnych sportowców na poziomie uniwersyteckim i zawodowym. Tak więc znowu, większość ludzi, którzy pytają o przeciętny skok pionowy, prawdopodobnie nie przejmuje się zbytnio tym, jak wypadają na tle dziesięciolatków lub Lebrona Jamesa (lub, co więcej, koszykarza z pierwszej dywizji NCAA). Aby było to miarodajne, musiałbyś znaleźć populację podobną do tej, z którą chcesz się zmierzyć.
            </p>

            <h3 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Teraz trochę liczb</h3>
            <p>
                Istnieją badania, które całkiem dobrze odnoszą się do przeciętnego typu wojownika weekendowego lub sportowca licealnego. Jedno z najlepszych i najnowszych badań dotyczyło grupy studentów medycyny o profilu bardziej zbliżonym do populacji z 1960 roku niż z 2000 roku, co oznacza, że było tam kilka osób z nadwagą, ale nie w tak dużej liczbie, jak widzimy dzisiaj.
            </p>
            <p>
                Ponadto wyniki w skoku stopniowo rosną od 10 roku życia do liceum, a następnie pozostają względnie stałe co najmniej do 30 roku życia (Patterson, 2004, s. 39). Badanie to nie wykazało znaczącego spadku wyników w skoku w ciągu dekady od 21 do 30 roku życia, więc dla każdego od późnego liceum do 30 roku życia są to całkiem dobre miary, jeśli chcesz sprawdzić, czy jesteś powyżej przeciętnej wśród osób o rozsądnej kondycji, ale nie elitarnych sportowców.
            </p>
            <p>
                W tej grupie liczby rozkładały się następująco (Patterson, 2004, s. 33). Proszę zauważyć, że są to wyniki średnie, ale podają zakres i nie jest on ogromny, więc powinny być względnie bliskie mediany (wszystkie wyniki w calach).
            </p>
            <ul className="list-disc pl-6 space-y-2 py-2">
                <li><strong className="font-semibold">Mężczyźni, 21-30 lat:</strong> 22,1 +/- 3,4, średni wskaźnik masy ciała, 25,4</li>
                <li><strong className="font-semibold">Kobiety, 21-30 lat:</strong> 14,1, +/- 2,5, średni wskaźnik masy ciała, 23,5</li>
            </ul>
            <p>
                Ale to tylko średnia. Chcesz wiedzieć, czy jesteś naprawdę dobry, czy naprawdę zły?
            </p>
            <p>
                Aby znaleźć się w 95. percentylu mężczyzn, co oznacza, że jesteś lepszy niż 94% mężczyzn w wieku 21-25 lat (zasadniczo w kwiecie wieku), musiałbyś skoczyć 28 cali. Aby znaleźć się w 95. percentylu kobiet, musiałabyś skoczyć 19 cali. Z drugiej strony, jeśli chcesz się tylko upewnić, że nie jesteś w dolnych 5%, musisz skoczyć co najmniej 16,5 cala dla mężczyzn i 10 cali dla kobiet (Patterson, 2004, s. 38).
            </p>
            <p>
                Jeśli masz od 17 do 30 lat i jesteś w populacji nieco sprawniejszej niż przeciętna, oto kilka liczb, do których warto dążyć. Chcesz wiedzieć, jak wypadasz na tle trudniejszej konkurencji? Na BodyBuilding.com Josh Henkin mówi
            </p>
            <blockquote className="border-l-4 border-primary/50 pl-4 my-4 italic text-muted-foreground">
                <p className="mb-2">Przeciętny skok pionowy zawodnika futbolu amerykańskiego I dywizji NCAA: 29-31 cali.</p>
                <p>Przeciętny skok pionowy koszykarza I dywizji NCAA: 27-30 cali</p>
            </blockquote>
            <p>
                Tymczasem Michael Jordan miał podobno 48-calowy skok pionowy, ale to wciąż mniej niż niesamowity Kadour Ziani, rekordzista świata z 60-calowym skokiem pionowym (chociaż wiele źródeł podaje 56 cali). Nieźle jak na faceta o wzroście 5'11".
            </p>

            <h3 className="text-2xl font-bold font-headline pt-4 border-t mt-6">Protokoły testu skoku pionowego</h3>
            <p>
                Skąd wiesz, jak wysoko potrafisz skoczyć? Jaki jest ważny test na skok pionowy? Możesz myśleć, że to oczywiste, ale w rzeczywistości różne metody testowania dają bardzo różne wyniki, podobnie jak różne protokoły lub zasady skoków.
            </p>
            <p>
                Niektóre testy skoku pozwalają na zamach ramion, a niektóre wymagają, aby ręce pozostały na biodrach. Niektóre pozwalają na "podejście", takie jak start z rozbiegu, a niektóre nie. Niektóre testy obejmują platformy siłowe, pomiar prędkości startu, obliczanie rzeczywistego środka masy ciała, korygowanie lub nie zmian przed startem i tak dalej.
            </p>
            <p>
                Aby zilustrować problem związany tylko z ostatnim przypadkiem, załóżmy, że test opiera się na przemieszczeniu środka ciężkości. Jeśli stanę na ziemi i w ogóle nie poruszę stopami, ale rzucę ręce nad głowę, mój środek ciężkości nieco się podniesie, ale tak naprawdę mój skok pionowy powinien być mierzony jako zero.
            </p>
            <p>
                Jak się okazuje, wiele różnych metod testowania skutkuje, co nie jest zaskakujące, różnymi wartościami skoku pionowego, nawet przy pomiarze tego samego wyniku.
            </p>
            <p>
                Najczęstszym pomiarem jest tak zwany test Sargenta. Jest to najprostszy i najbardziej bezpośredni test. Sięgasz tak wysoko, jak potrafisz na ścianie lub tablicy i zaznaczasz punkt. Następnie posypujesz rękę kredą, skaczesz z całej siły i ponownie uderzasz w ścianę, zostawiając kredowy ślad w najwyższym punkcie. Zmierz różnicę i to jest twój skok pionowy. Możesz użyć tej metody zarówno do skoków z rozbiegu, jak i z miejsca. Jest to najczęstszy sposób pomiaru, a urządzenia takie jak system treningowy Vertec Jump pozwalają uniknąć konieczności brudzenia ścian (jest to w zasadzie zestaw ramion wystających z drążka, a najwyższe ramię, którego dotkniesz, mierzy twój skok).
            </p>
            <p>
                Problem z testem Sargenta polega na tym, że nie jest on porównywalny z innymi metodami ze względu na zamach ramion. Złotym standardem jest test wydajności skoku pionowego, ale wymaga on złożonej wideografii i obliczania dokładnej pozycji środka masy ciała w czasie. Inne metody obejmują obliczanie wysokości na podstawie precyzyjnego pomiaru prędkości startu lub czasu w powietrzu.
            </p>
            <p>
                Dobra wiadomość jest jednak taka, że test Sargenta ma wysoki poziom wiarygodności. Innymi słowy, może nie dawać tych samych liczb co inne testy, ale od jednego skoku do drugiego daje spójne wyniki. Powodem, dla którego jest to dobra wiadomość, jest to, że najczęściej jesteśmy zainteresowani pomiarem skoku pionowego jako sposobem śledzenia postępów. Gdyby test był niewiarygodny, nie moglibyśmy być pewni, że faktycznie robimy postępy, a zmiany mogłyby być spowodowane błędem testu. W rzeczywistości jednak test Sargenta ma doskonały poziom wiarygodności (patrz Aragón-Vargas, 2000, s. 223, nr 1).
            </p>
            <p>
                Dla większości sportowców ważne jest, aby uzyskać wiarygodnie spójny pomiar wysokości skoku od treningu do treningu dla danej osoby, aby mogła ona zaznaczyć postępy. Innymi słowy, zazwyczaj nie jest tak ważne porównywanie jednej osoby z drugą lub opracowywanie standardowej miary, ale po prostu miara, której dany sportowiec może użyć, aby zobaczyć, co działa, a co nie.
            </p>
        </div>
    )
}
