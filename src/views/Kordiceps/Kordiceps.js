import React from "react";
// import styles from "../About/Heading.module.scss";
import styles from "../../views/Kordiceps/Kordiceps.module.scss";
import Kordi from "../../assets/images/kordiceps_photo.jpg";
import Heading from "../../components/Heading/Heading";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

const Kordiceps = ({ hideButton, fullText }) => {
  return (
    <div className={styles.kordiceps}>
      <Heading blackTitle="Kordiceps" secondaryText="Czym jest?" />
      <div className={styles.kordicepsComponent}>
        <div className={styles.componentKordicepsRight}>
          <img cllasName={styles.kordicepsImages} src={Kordi} />
        </div>
        <div className={styles.componetKordicepsLeft}>
          {fullText ? (
            <p className={styles.paragraphText}>
              Na Wschodzie Kordiceps od niepamiętnych czasów uważany jest za
              najbardziej pożyteczny spośród wszystkiego, co rośnie na Ziemi. W
              Chinach Kordiceps nazywają "Darem bogów", ponieważ żadna inna
              roślina nie posiada takiej wyjątkowej mocy. Nowe preparaty na
              bazie Kordicepsu korporacji Fohow-Feniks" na chwilę obecną
              stanowią najnowocześniejsze osiągnięcie światowej nauki i
              techniki. Ich kompleksowy skład uwzględnia wszystkie naukowe
              wymogi, zasady medycyny chińskiej i farmakologii. Najnowsza
              technologie pozwalają na maksymalne zachowanie aktywnych
              komponentów i usunięcie nieskutecznych składników i domieszek.
              Podnosi to przyswajalność preparatów przez organizm, zapewniając
              jeszcze większą skuteczność działania. Moc i specyfikacja
              stężonych płynnych form otrzymywanych z zawartości komórek grzybów
              wyższych, przede wszystkim Kordicepsu oraz Linchzhi i Grzyba
              Aromatycznego polega głównie na tym że są to preparaty w stu
              procentach systemowe. Systemowe działanie tych preparatów polega
              na szybkim regulowaniu pracy wszystkich systemów organizmu dzięki
              unikalnemu składowi. Oprócz tego, naturalna siła Kordicepsu i
              innych znanych grzybów wschodnich została wielokrotnie spotęgowana
              dzięki oryginalnej recepturze i niedoścignionej do tej pory przez
              nikogo biotechnologii przygotowania preparatów na naturalnej
              bazie. Rośnie w wysokich górach CHIN i TYBETU. Latem rośnie jako
              grzyb, a zimuje w larwie motyla, jako pasożyt, by wiosną znów
              rosnąć w postaci grzyba. Jako pasożyt odżywia się korzeniami
              roślin wysokogórskich ( RDEST, ASRAGAŁ, OFIOPOGON ). Jest bardzo
              odporny na chłód i zimno.
              <h3 className={styles.headerTextKordeceps}>
                ZASTOSOWANIE KORDICEPSU PRZYNIOSŁONAJWIĘKSZĄ EFEKTYWNOŚĆ W
                NASTĘPUJĄCYCH PRZYPADKACH:
              </h3>
              <p className={styles.paragraphText}>
                1. Schorzenia układu oddechowego. Kaszel, osłabienie, potliwość,
                złe samopoczucie, osłabienie płuc, niemoc - widoczny efekt
                przyjmowania kordicepsu, astma, gruźlica, rozedma płuc -
                doskonały efekt zastosowania kordicepsu.
              </p>
              <p className={styles.paragraphText}>
                2. Schorzenia nerek. Współczesna medycyna udowodniła, że
                zastosowanie kordicepsu poprawia wymianę materii w nerkach,
                poprawia funkcję nadnerczy, dynamikę komórek tkanki nerkowej,
                sprzyja usuwaniu toksyn, zmniejsza uszkodzenia kanalików
                nerkowych, zapobiega powtórnemu zakażeniu nerek, zapobiega
                hiperfosforyzacji, sprzyja usuwaniu bólu w okolicach
                lędźwiowych, zapobiega nietrzymaniu moczu i polucjom.
              </p>
              <p className={styles.paragraphText}>
                3. Schorzenia naczyń krwionośnych serca. W sposób umiarkowany i
                ciągły kordiceps polepsza przepływ krwi w naczyniach
                krwionośnych serca, reguluje stosunek wapnia i fosforu we krwi.
                Powstrzymuje tworzenie się skrzepów pochodzenia kolagenowego,
                współczynnik tej inhibicji dochodzi do 48,5%.
              </p>
              <p className={styles.paragraphText}>
                4. Schorzenia wątroby - marskość wątroby, żółtaczka. Kordiceps
                jest istotnym środkiem poprawiającym funkcję wątroby, a
                jednocześnie jest bardzo ważny w profilaktyce marskości wątroby.
                Na dzień dzisiejszy ani w Chinach, ani w innych częściach świata
                nie ma bardziej efektywnego preparatu w terapii marskości
                wątroby.
              </p>
              <p className={styles.paragraphText}>
                5. Schorzenia krwi. Przy takich schorzeniach krwi jak białaczka,
                preparat ma efekt terapeutyczny i wspomagający, a ponadto
                zapobiega przejściu białaczki w stadium złośliwe.
              </p>
              <p className={styles.paragraphText}>
                6. Schorzenia nowotworowe. Kordiceps jest efektywnym środkiem w
                zwalczaniu nowotworów, szczególnie w późnym stadium. Dotyczy to
                głównie wątroby, nerek, układu oddechowego. Kordiceps wpływa na
                usuwanie głównego ogniska schorzenia w zaatakowanych organach, a
                ponadto polepsza ich stan i funkcjonowanie. Oprócz tego
                podwyższa aktywność leukocytów, co pozwala na szybkie
                zastosowanie radio- i chemioterapii. Przy niezłośliwym
                nowotworze mózgu działanie preparatu jest doskonałe.
              </p>
              <p className={styles.paragraphText}>
                7. Działanie oczyszczające. Kordiceps będąc preparatem
                nietoksycznym, sprzyja usuwaniu z wątroby, nerek i płuc toksyn,
                w tym również zanieczyszczeń pochodzących z leków.
              </p>
              <p className={styles.paragraphText}>
                8. Preparat odbudowujący i wzmacniający. Kordiceps
                majużdobrąopinięjako środek odbudowujący i wzmacniający. Może
                być również środkiem profilaktycznym dla wszystkich wcześniej
                wymienionych schorzeń.
              </p>
              <h3 className={styles.headerTextKordeceps}>
                PROFILAKTYKA KORDICEPSOWA A NOWOTWORY Eliksir "Feniks" i Eliksir
              </h3>
              <p className={styles.paragraphText}>
                "Trzy Klejnoty Feniks" zawiera polisacharydy, lentinian, kwas
                Linchzhi , kwas kordicepsowy, uridynę, adeninę, triterpen,
                polipeptydy, glikopeptydy, enzymy, białka, wiele aminokwasów,
                witaminy B1, B2, B12 i K, alkaloidy i inne składniki, a ponadto
                potas, sód, wapń, magnez, żelazo, miedź, mangan, selen i inne
                mikroelementy, które charakteryzują się bardzo dużą
                bioaktywnością. Wpływają one na organizm człowieka zarówno każdy
                z osobna, jak i razem na zasadzie synergizmu. Linchzhi i
                Kordiceps w pierwszym rzędzie stymulują aktywność
                funkcjonujących komórek (są to LAK-komórki czyli zaktywizowane
                limfokiny-zabójcy), które "budzą się" pod wpływem T-komórek,
                makrofagów M8, naturalnych zabójców NK-komórek, limfocytów i
                innych i czynnik komórkowy drogą wzmocnienia bioaktywnej
                ruchliwości układu siateczkowo-śródbłonkowego i niszczenia
                komórek nowotworowych, dzięki czemu można przejąć kontrolę nad
                rozrostem nowotworu, aż do jego zmniejszenia. Bardziej
                konkretnie wygląda to w sposób następujący:
              </p>
              <p className={styles.paragraphText}>
                <span className={styles.headerTextParagraph}>
                  1. Po pierwsze:
                </span>
                ożywia i aktywizuje funkcjonujące komórki organizmu, zwiększa
                możliwości organizmu w walce z nowotworami (wytruwanie,
                rozpuszczanie komórek nowotworowych), przyczynia się do
                znacznego podwyższenia własnych (autonomicznych) możliwości
                organizmu do niszczenia komórek nowotworowych średnio o 82%,
                powoduje syntezę i wydzielanie czynnika komórkowego gwarantując
                zdrowie komórkom organizmu.
              </p>
              <p className={styles.paragraphText}>
                <span className={styles.headerTextParagraph}>
                  2. Po drugie:
                </span>
                hamuje wytwarzanie immunodperesantu przez komórki nowotworowe,
                powoduje, że komórki nowotworowe stają się dostępne dla
                komórek-zabójców, przywraca i nasila wrażliwość organizmu na
                komórki rakowe, wzmacnia antyrakową funkcję układu
                odpornościowego, usuwa wolne rodniki, obniża potencjał
                powierzchniowy komórek rakowych, wywołuje powtórną mutację
                genomu rakowego włączając proces programowanej śmierci komórek
                nowotworowych, aktywizuje również komórki szpiku kostnego w
                kierunku syntezy białek, DNA, RNA, przyspiesza proces
                rozmnażania się komórek szpiku kostnego drogą podziału,
                intensyfikuje jego funkcję krwiotwórczą.
              </p>
              <p className={styles.paragraphText}>
                <span className={styles.headerTextParagraph}>
                  3. Po trzecie:
                </span>
                Kwas Linchzhi posiada funkcję niszczenia komórek rakowych.
                Doświadczenia przeprowadzone na zwierzętach wykazały, że eliksir
                ten wywołuje silny efekt hamowania wielu rodzajów przerzutów:
                m.in. jest on skuteczny w 82,5-89,1% w przypadku raka Rawejsa,
                58,5-76,2% jest skuteczny w przypadku białaczki P388, do 62,1 %
                jest skuteczny w raku wątroby AH-13, AH7974, AH-66F, w 83,1-92%
                - w przypadku mięsaka sarcoma - 180, 72,2-85,7% - w acytnym raku
                Erlicha (EAC), w 42,7-56% jest skuteczny przy acytnym raku
                wątroby, w 86-98% - w przypadku mięsaka miofibroblastycznego.
              </p>
              <h3 className={styles.headerTextKordeceps}>
                Funkcja przeciwrakowa Eliksiru "Feniks"
              </h3>
              <p className={styles.paragraphText}>
                Działanie eliksiru Feniks charakteryzuje się doskonałą
                skutecznością w wielu rodzajach nowotworów w różnych stadiach.
                Przejawia się to w sposób następujący:
              </p>
              <p className={styles.paragraphText}>
                1.Preparat wzmacnia efekt terapeutyczny: przyjmowanie preparatu
                podczas radio- i chemioterapii wzmacnia efekt hamowania
                nowotworu i zwiększa skuteczność działania chemioterapii o
                68,3-76,5%, okres jej stosowania skraca się o 26%, natomiast
                skuteczność radioterapii zwiększa się o 26,5-33,9%.
              </p>
              <p className={styles.paragraphText}>
                2. Stwarza możliwość zwalczenia nowotworu: włącza osoby będące
                na granicy śmierci do procesu zdrowienia i w takim stadium
                nowotworu umożliwia dalsze stosowanie chemioterapii i
                kontynuowanie walki z rakiem w przypadku 12,8-26,6% z ogólnej
                liczby osób. Zażywanie preparatu po operacji usunięcia nowotworu
                przyspiesza rekonwalescencję i gojenie się ran, co umożliwia
                człowiekowi szybsze przejście do chemio- i radioterapii.
              </p>
              <p className={styles.paragraphText}>
                3. Hamuje szybkie odradzanie się nowotworu: w pewnym stopniu
                umożliwia rozwiązanie problemu puchliny brzusznej, a także
                poradzenie sobie z gromadzeniem się wody w obrębie klatki
                piersiowej.
              </p>
              <p className={styles.paragraphText}>
                4. Zmniejsza uboczne reakcje toksyczne: po radio- i
                chemioterapii obniża toksyczne reakcje uboczne, ułatwia sytuację
                w przypadku zakłócenia funkcji szpiku kostnego. 82,6-86,3% osób
                ma poziom leukocytów w granicach normy; 52,8-67,5% osób nie ma
                reakcji wymiotnej, u innych wymioty ustają w ciągu 1-3 dni; u
                16,5-25% osób zatrzymuje się proces wypadania włosów, u 96% osób
                normalizuje się odżywianie i sen.
              </p>
              <p className={styles.paragraphText}>
                5. Polepsza jakość życia: obserwowane jest znaczne polepszenie
                jakościżycia w ciągu całego okresu trwania walki z nowotworem,
                zwiększa się ilość przyjmowanych pokarmów, polepsza się sen,
                przywracany jest stan rześkości, wzmacnia się siła fizyczna. U
                92% osób poziom limfocytów wraca do normy, u 58% -znikają
                zaparcia, u 73% - zmniejszają się bóle, 65% leżących zaczyna
                wstawać i zażywać ruchu.
              </p>
              <p className={styles.paragraphText}>
                6. Zwiększa się długość życia: u wszystkich osób zażywających
                preparatw trakcie kuracji obserwuje się wydłużenie wcześniej
                prognozowanejdługości życia.
              </p>
              <h3 className={styles.headerTextKordeceps}>
                Działanie kordicepsu
              </h3>
              <p className={styles.paragraphText}>
                Moc i specyfika stężonych płynnych form otrzymywanych z
                zawartości komórek grzybów wyższych, przede wszystkim Kordicepsu
                oraz Linchzhi (Reishi) i Grzyba Aromatycznego polega głównie na
                tym, że są to preparaty w stu procentach systemowe. Systemowe
                oddziaływanie tych preparatów polega na szybkim regulowaniu
                pracy wszystkich systemów organizmu dzięki ich unikalnemu
                składowi. Oprócz tego, naturalna siła Kordicepsu i innych
                znanych grzybów wschodnich została wielokrotnie spotęgowana
                dzięki oryginalnej recepturze i niedoścignionej do tej pory
                przez nikogo biotechnologii przygotowania preparatów na
                naturalnej bazie. Wyżej została wspomniana zdolność stężonych
                preparatów w płynnej postaci otrzymywanych z Kordicepsu i innych
                grzybów wyższych do dużo szybszego regulowania stanu układu
                immunologicznego dzięki dużo większej zawartości w nich
                polisacharydów o działaniu immunoregulującym w porównaniu z
                podobnymi "suchymi" preparatami, tradycyjnie produkowanymi
                według starych technologii w postaci tabletek lub kapsułek. Nowe
                preparaty korporacji "Fohow - Feniks" na chwilę obecną stanowią
                najnowocześniejsze osiągnięcie światowej nauki i techniki. Ich
                kompleksowy skład uwzględnia wszystkie naukowe wymogi, zasady
                medycyny chińskiej i farmakologii. Cechą szczególną preparatów
                jest ich łagodne działanie i jednakowa regulacja Yin i Yang. W
                trakcie stosowania niniejszych preparatów następuje aktywizacja
                procesów w komórkach człowieka i spowolnienie procesów
                starzenia. Preparaty innych spółek, produkujących podobne płynne
                formy produktów zawierające Kordiceps, też zostały wyróżnione
                wieloma nagrodami zagranicznymi jako bardzo skuteczne środki
                wspomagające w walce z wszelakimi schorzeniami i odmładzające.
                Dzięki najnowszym technologiom działanie preparatów
                kilkudziesięciokrotnie przewyższa działanie surowca. W produkcji
                preparatów stosuje się współczesne wiodące metody rozdrabniania
                komórki i ekstrahowania z niej substancji, a mianowicie:
                wielofunkcyjne ekstrahowanie przy niskich lub niekiedy wysokich
                temperaturach, wyciąg metodą eks­trakcji w warunkach
                nadkrytycznych, wysokosprawna chromatografia kolumnowa,
                podciśnieniowe stężanie i inne. Najnowsze technologie pozwalają
                na maksymalne zachowanie aktywnych komponentów i usunięcie
                nieskutecznych składników i domieszek. Podnosi to przyswajalność
                preparatów przez organizm, zapewniając jeszcze większą
                skuteczność ich działania. We wszystkich przedsiębiorstwach
                korporacji "Fohow - Feniks" prowadzona jest szczególnie surowa
                kontrola nad jakością produktów Preparaty zawierające Kordiceps
                - szybko działające bioimmunoregulatory - pomimo tego, że są one
                biologicznie aktywnymi suplementami diety, przeszły badania
                kliniczne w takich krajach jak: Chiny, USA, Japonia i Korea
                Południowa. Wszędzie otrzymano wyraźne wyniki, potwierdzające
                celowość ich stosowania w przypadku różnych schorzeń, zostało
                także potwierdzone ich całkowite bezpieczeństwo. Układ
                odpornościowy - Coraz częściej na zdrowie człowieka patrzy się
                obecnie w pryzmacie sprawności układu odpornościowego. Medycyna
                naprawcza w obliczu choroby człowieka koncentrowała się
                zwłaszcza na zwalczaniu objawu. Jednak w przypadku wielu chorób
                przewlekłych oraz chorób o nie do końca rozpoznanej etiologii
                (pochodzeniu), takie naprawcze podejście zazwyczaj się nie
                sprawdza. Znacznie skuteczniejsze może być skoncentrowanie się
                na wzmocnieniu układu immunologicznego (odpornościowego). Coraz
                bardziej jasne staje się to, że źródłem zdrowia człowieka jest
                zasadniczo sprawnie działający jego wewnętrzny system naturalnej
                równowagi, utrzymujący w nim homeostazę. Za wychodzenie z chorób
                w bardzo istotnym stopniu odpowiedzialna jest naturalna zdolność
                organizmu do samoleczenia.
              </p>
            </p>
          ) : (
            <p className={styles.paragraphText}>
              Na Wschodzie Kordiceps od niepamiętnych czasów uważany jest za
              najbardziej pożyteczny spośród wszystkiego, co rośnie na Ziemi. W
              Chinach Kordiceps nazywają "Darem bogów", ponieważ żadna inna
              roślina nie posiada takiej wyjątkowej mocy. Nowe preparaty na
              bazie Kordicepsu korporacji Fohow-Feniks" na chwilę obecną
              stanowią najnowocześniejsze osiągnięcie światowej nauki i
              techniki. Ich kompleksowy skład uwzględnia wszystkie naukowe
              wymogi, zasady medycyny chińskiej i farmakologii. Najnowsza
              technologie pozwalają na maksymalne zachowanie aktywnych
              komponentów i usunięcie nieskutecznych składników i domieszek.
              Podnosi to przyswajalność preparatów przez organizm, zapewniając
              jeszcze większą skuteczność działania.
              <div className={styles.buttonKorgiceps}>
                {hideButton ? null : (
                  <Link to={routes.kordicepsPage}>
                    <Button>Więcej</Button>
                  </Link>
                )}
              </div>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Kordiceps;
