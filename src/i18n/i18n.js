import i18next from 'i18next'
import { initReactI18next } from "react-i18next"

i18next
.use(initReactI18next)
.init({
  lng: 'en',
  resources: {
    en: {
        translation: {
            hello: 'Hi! My name is Kamil Półkośnik, I am ',
            developer: 'Junior React Native Developer.',
            invite: 'I invite you to see my virtual CV.',
            buttons: {
                about: 'About me',
                skills: 'My skills',
                experience: 'My experience',
                contact: 'Contact',
                memes: 'Favourite memes',
                language: 'Change language: PL',
                sendMail: 'Send e-mail',
                showDetails: 'Show details',
                hideDetails: 'Hide details',
                callMe: 'Call me',
                back: 'Home page',
                yes: 'YES',
                no: 'NO'
            },
            memeModal: {
                attention: 'ATTENTION!',
                content: "A sense of humor is a very subjective thing. The content you want to go to is not intended to offend anyone! Are you sure you want to continue?"
            },
            aboutScreen: {
                me: `It's me, handsome, don't you think? `,
                life: `Outside of work, I am a husband and father of two busy kids - Flavia and Joseph. I like cooking, history, strength sports, financial books, good movies and of course JavaScript. However, what made me love the work of a programmer is React/React-Native.`,
                work: "Before I discovered programming, I worked in many places, e.g. a restaurant, a logistic company or a pawnshop.",
                dishes: 'These are some dishes I made working as chef.',
                programing: 'A friend encouraged me to learn programming. It took me 5 years to decide on this. After the first online course (HTML + CSS) I felt that this is it. Today, when I already have experience with commercial projects - I just made sure that I chose the right professional path. I am hungry for new challenges, knowledge and skills. Feel free to contact me.'
            },
            memeScreen: {
                click: 'Click to zoom'
            },
            skillScreen: {
                wiki: 'Information from Wikipedia.',
                react: 'Free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.',
                js: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).',
                ts: 'Free and open source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. It is designed for the development of large applications and transpiles to JavaScript. As it is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.',
                redux: 'An open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook Flux architecture, it was created by Dan Abramov and Andrew Clark. Since mid-2016, the primary maintainers are Mark Erikson and Tim Dorr.',
                node: 'An open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS. Node.js is a back-end JavaScript runtime environment. Node.js runs on the V8 JavaScript Engine and executes JavaScript code outside a web browser.',
                paper: 'High-quality, standard-compliant Material Design library that has you covered in all major use-cases.',
                html: 'A markup language used to create hypertext documents.',
                css: 'A style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
                sass: 'A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.',
                firebase: 'A set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It offers NoSQL and real-time hosting of databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as a real-time communication server.',
                axios: 'Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.',
                git: 'Git: A distributed version control system: tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different systems). Github: An Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project. Headquartered in California, it has been a subsidiary of Microsoft since 2018.',
                jira: 'A proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.',
                bitbucket: 'A Git-based source code repository hosting service owned by Atlassian. Bitbucket offers both commercial plans and free accounts with an unlimited number of private repositories.',
                android: 'Is the official integrated development environment (IDE) for Googles Android operating system, built on JetBrains IntelliJ IDEA software and designed specifically for Android development. It is available for download on Windows, macOS and Linux based operating systems. It is a replacement for the Eclipse Android Development Tools (E-ADT) as the primary IDE for native Android application development.',
                expo: 'Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.',
                wordpress: 'A free and open-source content management system (CMS) written in hypertext preprocessor language and paired with a MySQL or MariaDB database with supported HTTPS.',
                elementor: 'An Israeli software company. The Elementor website builder allows WordPress users to create and edit websites by employing the drag and drop technique, with a built-in responsive mode.'
            },
            experienceScreen: {
                self: 'Self-employment',
                moose: 'Company: Moose INC',
                createWordpress: 'Creating simple pages/e-shops',
                techWordpress: "Key technologies: WordPress, Elementor, WooCommerce",
                createWeb: 'Creating simple, static websites',
                techWeb: 'Key technologies: HTML, CSS, JavaScript, Git',
                createIntern: 'Creating React/React Native Apps',
                techIntern: 'Key technologies: React/React Native, Redux, Firebase',
                createWork: 'Creating React-Native Apps',
                techWork: 'Key technologies: React Native, Redux, TypeScript, Android, iOS, Styled components, Git',
                currently: 'Junior React-Native Developer 07.2022-currenty'
            }
        }
    },
    pl: {
        translation: {
            hello: 'Cześć! Nazywam się Kamil Półkośnik, jestem ',
            developer: 'Junior React Native Developerem.',
            invite: 'Zapraszam Cię do zapoznania się z moim wirtualnym CV.',
            buttons: {
                about: 'O mnie',
                skills: 'Co potrafię',
                experience: 'Doświadczenie zawodowe',
                contact: 'Kontakt',
                memes: 'Ulubione memy',
                language: 'Change language: ENG',
                sendMail: 'Wyślij e-mail',
                showDetails: 'Pokaż dane',
                hideDetails: 'Ukryj dane',
                callMe: 'Zadzwoń',
                back: 'Wróć',
                yes: 'TAK',
                no: 'NIE'
            },
            memeModal: {
                attention: 'UWAGA!',
                content: "Poczucie humoru to bardzo subiektywna kwestia. Treści do których chcesz przejść nie mają na celu urażenia kogokolwiek! Czy na pewno chcesz przejść dalej?"
            },
            aboutScreen: {
                me: `To ja, przystojniak, nie sądzisz? `,
                life: 'Na co dzień jestem mężem i tatą dwójki żywiołowych dzieciaków - Flawii i Józefa. Lubię gotowanie, historię, sporty siłowe, książki o tematyce finansowej, dobre filmy oraz oczywiśce JavaScript. Jednak to za co pokochałem pracę programisty to React/React-Native.',
                work: "Zanim odkryłem programowanie, pracowałem w wielu miejscach, np. restauracja, firma logistyczna czy lombard.",
                dishes: 'Oto dania, które przygotowałem pracując jako szef kuchni.',
                programing: 'Do nauki programowania namawiał mnie znajomy. Zajęło mi aż 5 lat, żeby się na to zdecydować. Po pierwszym kursie online (HTML + CSS) poczułem, że to jest to. Dzisiaj, kiedy mam już doświadczenie z komercyjnych projektów - tylko się upewniłem, że obrałem właściwą ścieżkę zawodową. Jestem głodny nowych wyzwań, wiedzy i umiejętności. Zapraszam do kontaktu.'

            },
            memeScreen: {
                click: 'Klinkij aby powiększyć'
            },
            skillScreen: {
                wiki: 'Informacja z Wikipedii.',
                react: 'Biblioteka języka programowania JavaScript, która wykorzystywana jest do tworzenia interfejsów graficznych aplikacji internetowych. Została stworzona przez Jordana Walke, programistę Facebooka, a zainspirowana przez rozszerzenie języka PHP – XHP. Często wykorzystywana do tworzenia aplikacji typu Single Page Application.',
                js: 'Skryptowy oraz wieloparadygmatowy język programowania, stworzony przez firmę Netscape, najczęściej stosowany na stronach internetowych. Twórcą JavaScriptu jest Brendan Eich. W połowie lat 90. XX wieku organizacja ECMA wydała na podstawie JavaScriptu standard języka skryptowego o nazwie ECMAScript, aktualnie rozwijaniem tego standardu zajmuje się komisja TC39.',
                ts: 'Wolny i otwartoźródłowy język programowania stworzony przez firmę Microsoft jako nadzbiór języka JavaScript. Umożliwia on opcjonalne statyczne typowanie oraz programowanie zorientowane obiektowo oparte na klasach. TypeScript jest nadzbiorem JavaScript, a więc potencjalnie każdy program napisany w języku JavaScript jest poprawnym programem TypeScript. Aplikacje napisane w TypeScript transpilują się bezpośrednio do języka JavaScript.',
                redux: 'Redux to biblioteka JavaScript typu open source do zarządzania i centralizacji stanu aplikacji. Jest najczęściej używany z bibliotekami takimi jak React lub Angular do budowania interfejsów użytkownika. Podobnie jak architektura Flux Facebooka, została stworzona przez Dana Abramova i Andrew Clarka.',
                node: 'Wieloplatformowe środowisko uruchomieniowe o otwartym kodzie do tworzenia aplikacji typu server-side napisanych w języku JavaScript.',
                paper: 'Wysokiej jakości, zgodna ze standardami biblioteka Material Design, która obejmuje wszystkie główne przypadki użycia.',
                html: 'Język znaczników stosowany do tworzenia dokumentów hipertekstowych.',
                css: 'Arkusz stylów CSS to lista dyrektyw (tzw. reguł) ustalających w jaki sposób ma zostać wyświetlana przez przeglądarkę internetową zawartość wybranego elementu (lub elementów) (X)HTML lub XML. Można w ten sposób opisać wszystkie pojęcia odpowiedzialne za prezentację elementów dokumentów internetowych, takie jak rodzina czcionek, kolor tekstu, marginesy, odstęp międzywierszowy lub nawet pozycja danego elementu względem innych elementów bądź okna przeglądarki. Wykorzystanie arkuszy stylów daje znacznie większe możliwości pozycjonowania elementów na stronie, niż oferuje sam (X)HTML',
                sass: 'Sass to język skryptowy preprocesora, który jest interpretowany lub kompilowany w Kaskadowe Arkusze Stylów. SassScript to sam język skryptowy. Sass składa się z dwóch składni. Oryginalna składnia, zwana „składnią z wcięciem”, używa składni podobnej do Hamla.',
                firebase: 'Firebase to zestaw usług hostingowych dla każdego typu aplikacji. Oferuje NoSQL i hosting w czasie rzeczywistym baz danych, treści, uwierzytelnianie społecznościowe i powiadomienia lub usługi, takie jak serwer komunikacji w czasie rzeczywistym.',
                axios: 'Axios jest to prosty klient HTTP, za pomocą którego tworzymy zapytania w przeglądarce oraz NodeJS. Jego elementem charakterystycznym jest wykorzystanie mechanizmu tzw. obietnic, czyli wykonywane zapytanie zwraca nam jego status w postaci reject albo resolve.',
                git: 'Git: Rozproszony system kontroli wersji. Stworzył go Linus Torvalds jako narzędzie wspomagające rozwój jądra Linux. Git stanowi wolne oprogramowanie i został opublikowany na licencji GNU GPL w wersji 2. Github: Hostingowy serwis internetowy przeznaczony do projektów programistycznych wykorzystujących system kontroli wersji Git. Stworzony został przy wykorzystaniu frameworka Ruby on Rails i języka Erlang. Serwis działa od kwietnia 2008 roku. GitHub udostępnia darmowy hosting programów open source i prywatnych repozytoriów (część funkcji w ramach prywatnych repozytoriów jest płatna).',
                jira: 'Zamknięte oprogramowanie firmy Atlassian służące do śledzenia błędów oraz zarządzania projektami. Nazwa to skrócona forma słowa „Gojira”, czyli japońskiej nazwy Godzilla.',
                bitbucket: 'Hostingowy serwis internetowy przeznaczony dla projektów programistycznych wykorzystujących system kontroli wersji Git oraz Mercurial, którego obecnym właścicielem jest firma Atlassian. Serwis umożliwia bezpłatne wykorzystanie usługi wraz z dodatkowymi płatnymi planami. Jest obecnie jednym z najpopularniejszych tego typu serwisów, z którego korzystają m.in. firmy Ford, PayPal, czy Starbucks. W kwietniu 2019 r. Atlassian ogłosił, że Bitbucket dotarł do 10 milionów zarejestrowanych użytkowników i ponad 28 milionów repozytoriów.',
                android: 'Oficjalne środowisko programistyczne na platformę Android, zbudowane na podstawie oprogramowania IntelliJ IDEA od JetBrains. Może zostać zainstalowane na systemach Windows, macOS i opartych na Linuksie. Przed wydaniem Android Studio, głównym środowiskiem programistycznym dla systemu Android było Eclipse.',
                expo: 'Expo to platforma typu open source do tworzenia uniwersalnych natywnych aplikacji na Androida, iOS i przeglądarek internetowych za pomocą JavaScript i React.',
                wordpress: 'Napisany w języku PHP system zarządzania treścią (CMS) zaprojektowany głównie do obsługi blogów.Wykorzystuje bazę danych MySQL. Rozpowszechniany jest na licencji GNU General Public License i jest dostępny bezpłatnie.',
                elementor: 'Elementor Ltd. to izraelska firma programistyczna. Kreator stron internetowych Elementor pozwala użytkownikom WordPressa tworzyć i edytować strony internetowe za pomocą techniki przeciągania i upuszczania z wbudowanym trybem responsywnym.'
            },
            experienceScreen: {
                self: 'Samozatrudnienie',
                moose: 'Firma: Moose INC',
                createWordpress: 'Tworzenie prostych stron/e-sklepów',
                techWordpress: "Technologie: WordPress, Elementor, WooCommerce",
                createWeb: 'Tworzenie prostych, statycznych stron internetowych',
                techWeb: 'Technologies: HTML, CSS, JavaScript, Git',
                createIntern: 'Tworzenie aplikacji React/React Native',
                techIntern: 'Technologie: React / React Native, Redux, Firebase',
                createWork: 'Tworzenie aplikacji React-Native',
                techWork: 'Technologie: React Native, Redux, TypeScript, Android, iOS, Styled components, Git',
                currently: 'Junior React-Native Developer 07.2022-obecnie'
            }

        }
    }
  }
})