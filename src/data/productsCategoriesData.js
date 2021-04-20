import clinerImage from "../assets/icons/oczyszczanie_icon.png";
import nutritionImage from "../assets/icons/odzywianie_icon.png";
import regulationImage from "../assets/icons/regulacja_icon.png";
import careImage from "../assets/icons/pielegnacja_icon.png";
import therapyImage from "../assets/icons/terapia_icon.png";
import healthImage from "../assets/icons/zdrowysen_icon.png";
import tea from "../assets/icons/green-tea.svg";
import paste from "../assets/icons/toothpaste.svg";
import bed from "../assets/icons/bed.svg";
import blanket from "../assets/icons/blanket.svg";
import bodyLotion from "../assets/icons/body-lotion.svg";
import capsule from "../assets/icons/capsule.svg";
import elixir from "../assets/icons/elixir.svg";
import faceMask from "../assets/icons/face-mask.svg";
import gel from "../assets/icons/gel.svg";
import mattress from "../assets/icons/mattress.svg";
import pillows from "../assets/icons/pillows.svg";
import pilows1 from "../assets/icons/pillows1.svg";
import shampoo from "../assets/icons/shampoo.svg";
import tampon from "../assets/icons/tampon.svg";
import toothpaste from "../assets/icons/toothpaste.svg";
import underwear from "../assets/icons/underwear.svg";
import belt from "../assets/icons/champion-belt.svg";
import tea1 from "../assets/images/tea.jpg";
import photo1 from "../assets/images/zdjęcie1.png";
import photo2 from "../assets/images/zdjęcie2.png";
import photo3 from "../assets/images/zdjęcie3.png";
import photo4 from "../assets/images/zdjęcie4.png";

export const productsCategoriesData = [
  {
    id: 1,
    icon: clinerImage,
    title: "Oczyszczanie",
    content: " seria oczyszczająca",
    categories: [
      {
        name: "herbaty",
        icon: tea,
      },
      {
        name: "kapsułki",
        icon: capsule,
      },
      {
        name: "pasty",
        icon: paste,
      },
    ],
    products: [
      {
        id: 1, //id produktu
        name: "Hebrbata ziolowa", //naza produktu
        code: "F-004/15BV", //kod produktu
        image: tea1, // zdjęcie produktu
        compositionOfProduct:
          "25 saszetek z bibułki filtrowanej po 2 g w opakowaniu", //skład produktu
        howToUseProduct:
          "Jedną saszetkę herbaty można użyć 3 - 4 razy dziennie w różnych odstępach czasu. Za każdym razem tę samą saszetkę należy na około 3 minuty (przy pierwszym zaparzaniu herbaty wystarczy włożyć saszetkę do gorącej wody tylko na kilka sekund, aż woda się zabarwi), zanurzyć w szklance pełnej gorącej wody, następnie wyjąc saszetkę i wypić herbatę. Nie stosować wrzątku do parzenia herbaty. Należy odczekać kilka minut, dopóki woda nie przestygnie. Pod wieczór stężenie Kordicepsu w herbacie zmniejsza się. Nie występują zakłócenia snu.",
        //sposób uzycia produktu
        dosage: " brak specjalnych wymagań", //dawkowanie
        storageMethod: " brak specjalnych wymagań",
        //sposób przechowywania
        description:
          "Herbata Liuwei Feniks wytwarzana jest na postawie teorii Tradycyjnej Chińskiej Medycyny, przy zastosowaniu przodujących technologii naukowych, z Kordicepsu chińskiego i herbaty Puerh o trzyletnim okresie dojrzewania. Napój posiada świeży oryginalny aromat i słodkawy smak. W skład herbaty w określonych proporcjach wchodzą takie rośliny, jak Astragalus, szałwia czerwonokorzeniowa, żeńszeń pięciolistny, chryzantema, wiciokrzew. Produkt o smaku nasyconym, słodkawym, aromatycznym.",
        //opis prodktu
        comments: "brak uwag",
        //uwagi
        type: "herbaty",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 2,
        //id produktu
        name: "kapsułki",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "kapsułki",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 3,
        //id produktu
        name: "pasty",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "pasty",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 4,
        //id produktu
        name: "Hebrbata rumiankowa",
        //naza produktu
        code: "F-004/15BV",
        //kod produktu
        image: tea1,
        // zdjęcie produktu
        compositionOfProduct:
          "25 saszetek z bibułki filtrowanej po 2 g w opakowaniu",
        //skład produktu
        howToUseProduct:
          "Jedną saszetkę herbaty można użyć 3 - 4 razy dziennie w różnych odstępach czasu. Za każdym razem tę samą saszetkę należy na około 3 minuty (przy pierwszym zaparzaniu herbaty wystarczy włożyć saszetkę do gorącej wody tylko na kilka sekund, aż woda się zabarwi), zanurzyć w szklance pełnej gorącej wody, następnie wyjąc saszetkę i wypić herbatę. Nie stosować wrzątku do parzenia herbaty. Należy odczekać kilka minut, dopóki woda nie przestygnie. Pod wieczór stężenie Kordicepsu w herbacie zmniejsza się. Nie występują zakłócenia snu.",
        //sposób uzycia produktu
        dosage: "brak specjalnych wymagań",
        //dawkowanie
        storageMethod: " brak specjalnych wymagań",
        //sposób przechowywania
        description:
          "Herbata Liuwei Feniks wytwarzana jest na postawie teorii Tradycyjnej Chińskiej Medycyny, przy zastosowaniu przodujących technologii naukowych, z Kordicepsu chińskiego i herbaty Puerh o trzyletnim okresie dojrzewania. Napój posiada świeży oryginalny aromat i słodkawy smak. W skład herbaty w określonych proporcjach wchodzą takie rośliny, jak Astragalus, szałwia czerwonokorzeniowa, żeńszeń pięciolistny, chryzantema, wiciokrzew. Produkt o smaku nasyconym, słodkawym, aromatycznym.",
        //opis prodktu
        comments: "",
        //uwagi
        type: "herbaty",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 5,
        //id produktu
        name: "Hebrbata owocowa",
        //naza produktu
        code: "",
        //kod produktu
        image: tea1,
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description:
          "Herbata Liuwei Feniks wytwarzana jest na postawie teorii Tradycyjnej Chińskiej Medycyny, przy zastosowaniu przodujących technologii naukowych, z Kordicepsu chińskiego i herbaty Puerh o trzyletnim okresie dojrzewania. Napój posiada świeży oryginalny aromat i słodkawy smak. W skład herbaty w określonych proporcjach wchodzą takie rośliny, jak Astragalus, szałwia czerwonokorzeniowa, żeńszeń pięciolistny, chryzantema, wiciokrzew. Produkt o smaku nasyconym, słodkawym, aromatycznym.",
        //opis prodktu
        comments: "",
        //uwagi
        type: "herbaty",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
    ],
  },
  {
    id: 2,
    icon: nutritionImage,
    title: "Odżywianie",
    content: "seria odżywcza",
    categories: [
      {
        name: "kapsułki",
        icon: capsule,
      },
      {
        name: "eliksiry",
        icon: elixir,
      },
    ],
    products: [
      {
        id: 1,
        //id produktu
        name: "kapsułki",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "kapsułki",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 2,
        //id produktu
        name: "eliksiry",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "eliksiry",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
    ],
  },
  {
    id: 3,
    icon: regulationImage,
    title: "Regulacja",
    content: "seria regulująca",
    categories: [
      {
        name: "kapsułki",
        icon: capsule,
      },
      {
        name: "eliksiry",
        icon: elixir,
      },
    ],
    products: [
      {
        id: 1,
        //id produktu
        name: "kapsułki",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "kapsułki",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 2,
        //id produktu
        name: "eliksiry",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "eliksiry",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
    ],
  },
  {
    id: 4,
    icon: careImage,
    title: "Pielęgnacja",
    content: "seria pielęgnacyjna",
    categories: [
      {
        name: "kapsułki tamponowe",
        icon: tampon,
      },
      {
        name: "żele",
        icon: gel,
      },
      {
        name: "wkładki higieniczne",
        icon: underwear,
      },
      {
        name: "maseczki",
        icon: faceMask,
      },
      {
        name: "pasty",
        icon: paste,
      },
      {
        name: "szampony",
        icon: shampoo,
      },
    ],
    products: [
      {
        id: 1,
        //id produktu
        name: "Tampony higieniczne Gui Fei Bao (Perła Księżniczki)",
        //naza produktu
        code: "KODFY001",
        //kod produktu
        image: "photo1",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "tylko do użytku zewnętrznego",
        //sposób uzycia produktu
        dosage: "tylko do użytku zewnętrznego",
        //dawkowanie
        storageMethod: "brak specjalnych wymagań",
        //sposób przechowywania
        description:
          "Tampony higieniczne dopochwowe. Komfort i higiena kobiety. Doskonale absorbują wydzieliny z narządów żeńskich inne niż krew menstruacyjna, dbając o dobre samopoczucie kobiety.  Wygodne w użyciu.",
        //opis prodktu
        comments: "",
        //uwagi
        type: "kapsułki tamponowe",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 2,
        //id produktu
        name: "Żel odżywiający pod prysznic FOHOW z kordicepsem",
        //naza produktu
        code: "KODF535",
        //kod produktu
        image: "photo2",
        // zdjęcie produktu
        compositionOfProduct:
          "Żel pod prysznic Fohow z kordicepsem posiada skład słabo zasadowy, jego PH równe 6.0 delikatnie i bezpiecznie oddziałuje na skórę, zachowując jej naturalne PH..W składzie żelu pod prysznic Fohow znajdują się naturalne składniki, w tym: ekstrakt z cordyceps sinensis, owoców seler nicy, korzenia szparaga i innych wartościowych roślin i ziół cenionych w TCM.",
        //skład produktu
        howToUseProduct: "tylko do użytku zewnętrznego",
        //sposób uzycia produktu
        dosage: "tylko do użytku zewnętrznego",
        //dawkowanie
        storageMethod: "brak specjalnych wymagań",
        //sposób przechowywania
        description:
          "Skóra ludzka – jest to jeden z ważniejszych organów człowieka, który zabezpiecza przed dostaniem się do niego bakterii, jest wyjątkową barierą chroniącą przed wirusami i substancjami toksycznymi. To największy organ ciała, który waży ok 3 kg i ma powierzchnię ok 2 m2. Warstwa zewnętrzna odnawia się w wyniku zachodzących procesów metabolicznych organizmu.Biorąc pod uwagę właściwości skóry, bardzo ważny jest wybór środka, który będzie oddziaływał delikatnie i bezpiecznie. Jednym z głównych kryteriów przy wyborze żelu pod prysznic jest zachowanie naturalnej równowagi PH skóry. Środki o niskim PH (przewaga kwasu) wywołują podrażnienia i osłabiają ochronne funkcje skóry. I na odwrót, środki z wysokim PH (wysoko zasadowe) wywołują suchość skóry, stwarzając tym samym warunki do namnażania się bakterii i powstawania alergii, świądu skóry i innych.Unikatowa zbilansowana receptura żelu zapewnia jednoczesne oczyszczenie, regulację i regenerację skóry. Rozpuszczalne w wodzie substancje roślinne zawarte z żelu delikatnie oddziałują na skórę. Żel działa bardzo delikatnie i na długo eliminuje zabrudzenia skóry. Nadaje się dla ludzi o różnych typach skóry, jest idealnym wyborem dla utrzymania piękna oraz komfortowej pielęgnacji w każdych warunkach klimatycznych. W połączeniu z wodą składniki żelu wytwarzają obfitą i miękką pianę i świeży aromat, pomagają pozbyć się uczucia zmęczenia. Żel zawiera ekstrakt z kordycepsu chińskiego, stymuluje mikrokrążenie, wzmacnia barierę ochronną skóry, zapobiega przenikaniu bakterii i podrażniających czynników środowiska zewnętrznego.Polisacharydy szparagów, aminokwasy i flawanony wyprowadzają wolne rodniki, posiadają właściwości antyoksydacyjne, spowalnia procesy starzenia się skóry. Wykazuje efekt antybakteryjny, wytwarza zdrową mikroflorę skóry. W skład żelu wchodzi biologicznie aktywny ekstrakt z wysuszonych dojrzałych owoców seler nicy, które zawsze były stosowane w medycynie jako środek leczenia świądu skóry. Żel odżywczy nie podrażnia skóry, wykazuje działanie antybakteryjne i reguluje kwasowo zasadową równowagę skóry. Kwas hialuronowy zawarty w składzie żelu nie tylko uzupełnia brak wilgotności w skórze, ale również stymuluje wzrost i regenerację komórek, sprawiając, że Państwa skóra staje się bardziej gładka, delikatna i lśniąca.Żel odżywczy Fohow – to oczyszczenie, regulacja i regeneracja zdrowia skóry w jednym produkcie.",
        //opis prodktu
        comments: "brak uwag",
        //uwagi
        type: "żele",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 3,
        //id produktu
        name: "",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: ".",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: ".",
        //opis prodktu
        comments: "",
        //uwagi
        type: "wkładki higieniczne",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 4,
        //id produktu
        name: "maseczki",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "maseczki",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 5,
        //id produktu
        name: "Pasta do zębów z kordicepsem",
        //naza produktu
        code: "KODF506",
        //kod produktu
        image: "photo3",
        // zdjęcie produktu
        compositionOfProduct:
          "Kompozycja pasty do zębów Fenix, oprócz ekstraktów z kordycepsów i lingzhi, zawiera ekstrakty z wielu innych naturalnych roślin, którymi są glikozydy roślinne i fenol. Jego formuła naukowa zapewnia podwójną normalizację tła bakteryjnego jamy ustnej. Pasta Fohow to najnowsza pasta do zębów trzeciej generacji, Chińscy Cordyceps wraz z Pantą i, oczywiście, Żeń-szeniem - „Trzy chińskie perły”. Pochodzenie Kordyceps jest owiana wieloma tajemnicami i mitami, w rzeczywistości jest perłą medycyny chińskiej. Cordyceps jest zarówno zwierzęciem, jak i rośliną, tradycyjnie nazywaną „trawą owadów”. Rośnie zarówno pod ziemią, jak i nad nią, latem i zimą.",
        //skład produktu
        howToUseProduct:
          "Używaj pasty rano i wieczorem a będziesz miał jeszcze zdrowsze zęby!",
        //sposób uzycia produktu
        dosage: "tylko do użytku zewnętrznego",
        //dawkowanie
        storageMethod: "brak specjalnych wymagań",
        //sposób przechowywania
        description:
          "Pasta do zębów Fohow z ekstraktem z Cordyceps i Lingzhi jest najnowszym osiągnięciem zdobytym w ciągu wielu lat badań. Zarówno cordyceps, jak i linchzhi mają właściwości regulacyjne, które pozwalają znacząco poprawić stan jamy ustnej.Kompozycja pasty do zębów Fenix, oprócz ekstraktów z kordycepsów i lingzhi, zawiera ekstrakty z wielu innych naturalnych roślin, którymi są glikozydy roślinne i fenol. Jego formuła naukowa zapewnia podwójną normalizację tła bakteryjnego jamy ustnej. Pasta Fohow to najnowsza pasta do zębów trzeciej generacji. W przypadku glikozydów roślinnych i fenolu wszystkie szkodliwe drobnoustroje jamy ustnej zostają zabite, jama ustna jest oczyszczona z pasożytów, a możliwość rozmnażania się drobnoustrojów jest zmniejszona. Pasta do zębów Fenix ma właściwości profilaktyczne, które pomagają wzmocnić zęby: Cordyceps i wyciąg z Linzi w połączeniu z naturalnymi składnikami pochodzenia roślinnego pomaga zapobiegać krwawiącym dziąsłom lub pozbyć się ich. Leczy owrzodzenia jamy ustnej, zapalenie przyzębia, usuwa nieprzyjemne zapachy z ust, ból dziąseł, próchnicę. Pasta Fohow usuwa zarazki z ust i utrzymuje usta w czystości. Ponadto ma wiele przydatnych właściwości:Łagodzi swędzenie i łagodzi obrzęki po ukąszeniach komarów.Pomaga uniknąć pojawienia się blizn w przypadku odmrożeń lub oparzeń. Skutecznie wspomaga procesy zapalne i ból gardła;Pomaga przy dermozie stóp, trądziku, kłującym upale.",
        //opis prodktu
        comments: "brak uwag",
        //uwagi
        type: "pasty",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 6,
        //id produktu
        name: "Szampon do włosów zmiękczający z kordicepsem",
        //naza produktu
        code: "KODF532",
        //kod produktu
        image: "photo4",
        // zdjęcie produktu
        compositionOfProduct:
          "Ekstrakt z kordicepsu: Ekstrakt z kordicepsu chińskiego jest bogaty w niezbędne dla skóry głowy substancje odżywcze, szybko przywraca niezbędną dla włosów równowagę nawilżenia i substancji odżywczych, regeneruje uszkodzone włosy, przywraca im zdrowie, sprawia, ze stają się gładkie i jedwabiste. Ekstrakt z żeńszenia:Ekstrakt z żeńszenia regeneruje uszkodzone łuski włosów, nawilża i napełnia włosy substancjami odżywczymi, sprawia, ze włosy stają się bardziej miękkie, mocne i posłuszna. Zapobiega wypadaniu i starzeniu się włosów, a także siwieniu. Ekstrakt z korzenia szparagaEkstrakt z korzenia szparaga łatwo przenika w strukturę włosa, ma działanie antystatyczne, sprawia, że włosy stają się bardziej posłuszne, wykazuje dodatkowe działanie nawilżające, doskonale pielęgnuje włosy. Ekstrakt z orzecha mydlanego:Orzech mydlany odznacza się doskonałym działaniem antybakteryjnym, eliminuje łupież i świąd, zapobiega wypadaniu włosów, reguluje równowagę wodno tłuszczową, poprawia jakość włosów, stymuluje porost nowych włosów, utrzymuje włosy w nawilżonym stanie.",
        //skład produktu
        howToUseProduct:
          "Wystarczy przez dwa tygodnie regularnie stosować szampon zmiękczający Fohow aby rozwiązać 6 głównych problemów włosów: suchość, sztywność, uszkodzenia, kruchość, wypadanie, łupież.",
        //sposób uzycia produktu
        dosage: "tylko do użytku zewnętrznego",
        //dawkowanie
        storageMethod: "brak specjalnych wymagań",
        //sposób przechowywania
        description:
          "Biorąc pod uwagę to, że ze środków pielęgnacji włosów korzystamy praktycznie codziennie, bardzo ważnym jest to, żeby wybrać szampon, który nie tylko będzie miał wpływ na wygląd zewnętrzny, ale także poprawi jakość włosów. Jednym z najważniejszych kryteriów wyboru szamponu jest jego naturalny skład, który nie będzie podrażniał skóry głowy. Szampon zmiękczający Fohow zawiera naturalne roślinne ekstrakty mające działanie odżywcze i regenerujące włosy i skórę głowy. W 100% naturalny skład szamponu gwarantuje delikatną i efektywną pielęgnację włosów każdego typu.Głębokie nawilżenie.Delikatna piana o wzbogaconej formule delikatnie i głęboko oczyszcza włosy, nadaje skórze głowy trwałe uczucie świeżości.Długotrwałe nawilżenie. Naturalne ekstrakty z kordicepsu i żeńszenia zapewniają długotrwałe nawilżenie włosów, dzięki czemu stają się one lśniące i jedwabiste. Zapobiegają wysuszeniu i łamliwości włosów.Głęboka regeneracja.Ekstrakty z kordicepsu i innych składników roślinnych regenerują uszkodzone włosy, nawilżają cebulki włosów, wzmacniają skórę, pomagają stworzyć warstwę ochronną, sprzyjają wchłanianiu substancji odżywczych. Gładkie lśniące włosy. Zbilansowana formuła nawilżenia i odżywiania napełnia włosy siłą witalną, pomaga im pozostać lśniącymi i jedwabistymi w każdych warunkach.Zmiękczający szampon Fohow pomoże Państwu dostrzec piękno waszych włosów b pełnej krasie",
        //opis prodktu
        comments: "brak uwag",
        //uwagi
        type: "szampony",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
    ],
  },
  {
    id: 5,
    icon: therapyImage,
    title: "terapia",
    content: "seria terapeutyczna",
    categories: [
      {
        name: "pasy rozgrzewające",
        icon: belt,
      },
      {
        name: "balsamy",
        icon: bodyLotion,
      },
    ],
    products: [
      {
        id: 1,
        //id produktu
        name: "pasy rozgrzewające",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "pasy rozgrzewające",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 2,
        //id produktu
        name: "balsamy",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "balsamy",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
    ],
  },
  {
    id: 6,
    icon: healthImage,
    title: "Zrowy sen",
    content: "seria regeneracyjna",
    categories: [
      {
        name: "poduszki",
        icon: pillows,
      },
      {
        name: "pościel",
        icon: bed,
      },
      {
        name: "Kołderki",
        icon: pilows1,
      },
    ],
    products: [
      {
        id: 1,
        //id produktu
        name: "poduszki",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "poduszki",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 2,
        //id produktu
        name: "pościel",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "pościel",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
      {
        id: 3,
        //id produktu
        name: "Kołderki",
        //naza produktu
        code: "",
        //kod produktu
        image: "",
        // zdjęcie produktu
        compositionOfProduct: "",
        //skład produktu
        howToUseProduct: "",
        //sposób uzycia produktu
        dosage: "",
        //dawkowanie
        storageMethod: "",
        //sposób przechowywania
        description: "",
        //opis prodktu
        comments: "",
        //uwagi
        type: "Kołderki",
        // wszystko co ma miec jeden produkt jezeli chodzi o jego opis np. skladniki, dizlanie itp.
      },
    ],
  },
];
