import React, { Suspense } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useState } from "react";

const translationAz = {
  about: "Haqqımda",
  skills: "Bacarıqlar",
  project: "Layihələr",
  contact: "Əlaqə Saxla",
  hello: "Salam, Bu mənəm",
  name: "Kərimov Orxan",
  i: "Və mən",
  dev: "Veb Proqramçıyam...",
  fre: "İş Axtarıram",
  info1:
    "Kod yazmaq sadəcə xətləri yığmaq deyil; həm də fikirləri birləşdirməyə aiddir. Bizim kompüterlərlə ünsiyyət qurmaq bacarığımız təkcə problemləri həll etmir, həm də bizə yeni dünyalar yaratmağa imkan verir. Bir tərtibatçı olaraq klaviaturamız və kodumuz rəqəmsal aləmin qapılarını açmağa kömək edən sehrli açarlardır. ",
  infoAbout1:
    "Salam, mən Orxan Kərimov. Mən 1995-ci ildə Azərbaycanın gözəl torpaqlarında anadan olmuşam. Kompüter və texnologiyaya marağım uşaqlıqdan mənə təsir edib. Bununla belə, mən proqramlaşdırmaya olan marağımı bu yaxınlarda kəşf etdim və bu səyahətə yenicə başladım.",
  infoAbout2:
    "Sosial media platformalarında gördüyüm digər tərtibatçıların layihələri və təcrübələri məni motivasiya edir. Mən hər gün yeni bir şey öyrənirəm və bu, məni daha yaxşı proqramçı olmaq yolunda irəliləyir.",
  infoAbout3:
    "Sosial media platformalarında gördüyüm digər tərtibatçıların layihələri və təcrübələri məni motivasiya edir. Mən hər gün yeni bir şey öyrənirəm və bu, məni daha yaxşı proqramçı olmaq yolunda irəlilədir.",
  infoAbout4:
    "Əvvəlcə proqram dünyasında böyük layihələrin öhdəsindən gəlməkdən uzaq ola bilərəm, amma özümü inkişaf etdirmək və hər addımda irəliləmək əzmindəyəm. Mən texnologiyaya töhfə vermək və öz layihələrimi yaratmaq arzusunu daşıyıram. Gələcəkdə proqram dünyası ilə daha çox məşğul olmağa və yeni layihələr hazırlamağa ümid edirəm.",
  infoAbout5:
    "Proqramlaşdırmaya yeni başlayan biri kimi bu səyahətin mənim üçün nə qədər həyəcanlı olduğunu çatdırmaq istədim. Unutmayın ki, hər kəs bir yerdən başlamalı və öyrənməyə davam etməlidir! Kim olduğuma gəlincə, mən proqramlaşdırma və texnologiyanın geniş dünyasını araşdırmaq istəyən maraqlı bir insanam. Öyrənməyə olan həvəsim və bu sahədə böyümək əzmim məni yeni çətinliklərlə üzləşməyə və biliklərimi daim genişləndirməyə sövq edir. İnanıram ki, gələcəyi öyrənmək və yenilik etmək istəyənlər üçün sonsuz imkanlar var və mən bu səyahətin bir hissəsi olmaqdan həyəcanlıyam.",
  bt: "Bacarıqlarım və təcrübəm",
  infoSkills1:
    "Karyeram boyunca bir sıra vacib bacarıqlar inkişaf etdirdim və müxtəlif iş təcrübələri qazandım. Bu səyahət zamanı əldə etdiyim bilik və bacarıqların xülasəsi: HTML 5: HTML 5-də 100% bacarıq səviyyəsim var. Veb inkişaf proseslərində HTML 5-dən səmərəli istifadə edə bilirəm. CSS 3: CSS 3-də bacarıqlarım 100% səviyyəsindədir. CSS 3 istifadə edərək veb dizaynda estetik və istifadəçi dostu interfeyslər yarada bilirəm.",
  infoSkills2:
    "JavaScript: JavaScript-də 70% bacarıq səviyyəm var. Bu dillərlə interaktiv veb proqramların hazırlanmasında təcrübəm var. Node.js: Mənim Node.js bacarıqlarım 60% səviyyəsindədir. Node.js-dən server tərəfində inkişaf və proqram inkişaf proseslərində istifadə edə bilərəm. React & Next.js: React və Next.js-də bacarığım 75%-dir. Müasir veb proqramlar yaratmaq üçün bu texnologiyalardan səmərəli istifadə edə bilirəm.",
    infoSkills3:"MongoDB və Firebase: MongoDB və Firebase-dəki bacarıqlarım 50% səviyyəsindədir. Verilənlər bazası idarəçiliyi və bulud əsaslı proqramlar haqqında biliklərimlə layihələrə effektiv töhfə verə bilərəm. Bu mənim karyeram və bacarıqlarımın qısa xülasəsidir. Yaradıcı layihələr üzərində işləməyi və yeni bacarıqlar əldə etməyi səbirsizliklə gözləyirəm. Əlavə sualınız və ya iş təklifiniz varsa, mənimlə əlaqə saxlayın!",
  fName: "Ad",
  lName: "Soyad",
  eMail: "E-Poçt",
  mesagge: "Mesajınız burada...",
  send: "Göndər",
  warningMesagge: "Tələb olunan sahələr boş ola bilməz",
  grMesagge: "Mənimlə əlaqə saxladığınız üçün təşəkkür edirəm",
  hapS: "Xoşbəxt tələbələr",
  hapC: "Xoşbəxt müştərilər",
  fsProject: "Tam layihələr",
  pProject: "Ümumi layihələr",
  year: "2022 (iyun-avqust)",
  edu: "Təhsil Nazirliyi və Peşə Təhsil Mərkəzi",
  specialty: "SQL proqramçısı",
  year2: "2022 (iyul-oktyabr)",
  edu2: "Gənclər və İdman Nazirliyi və CODE Factory",
  specialty2: "Veb proqramçı",
  year3: "2022/Sen-2023/Yan",
  edu3: "IT Academy and Algorithmics",
  specialty3: "Front-End developer",
  year4: "2023/Avqust-2024/Yan(Davam edir...)",
  edu4: "JED Academy",
  specialty4: "FRONT-END proqramçı",
  certficate: "Sertfikata bax",
  hCertf: "Sertficatlar və kurslar",
  cv: "CV-ni yüklə",
  hire: "",
  navHome: "Ev",
  navAbout:"Haqqında",
 navSkills:"Bacarıqlar",
 navProjects:"Proyektlər",
 navContact:"Əlaqə"
};
const translationEn = {
  about: "About",
  skills: "Skills",
  project: "Projects",
  contact: "Contact Me",
  hello: "Hello, It's me ",
  name: "Karimov Orkhan",
  i: "And I'am",
  dev: "a Web Developer...",
  fre: "looking for a job",
  info1:
    "Writing code is not just about assembling lines; it's also about connecting thoughts. Our ability to communicate with computers not only solves problems but also enables us to create new worlds. As a developer, our keyboard and code are the magical keys that help us unlock the doors to the digital realm.",
  infoAbout1:
    " Hello, I`m Orxan Kerimov. I was born in the beautiful lands of  Azerbaijan in 1995. My interest in computers and technology hasinfluenced me since my childhood. However, I&apos;ve only recentlydiscovered my curiosity for programming and have just embarked on this journey.",
  infoAbout2:
    "   The projects and experiences of other developers that I see on social media platforms motivate me. I learn something new every day, and it propels me forward on the path to becoming a better programmer.",
  infoAbout3:
    "The projects and experiences of other developers that I see on social media platforms motivate me. I learn something new every day, and it propels me forward on the path to becoming a better programmer.",
  infoAbout4:
    "Initially, I may be far from tackling big projects in the software world, but I am determined to develop myself and progress at every step. I carry the dream of contributing to technology and creating my own projects. In the future, I hope to be more involved in the software world and develop new projects.",
  infoAbout5:
    "As someone who is just starting out in programming, I wanted to convey how exciting this journey is for me. Remember that everyone has to start somewhere and keep on learning! As for who I am, I'm a curious individual eager to explore the vast world of programming and technology. My passion for learning and my determination to grow in this field drive me to take on new challenges and continuously expand my knowledge. I believe that the future holds endless possibilities for those who are willing to learn and innovate, and I'm excited to be a part of that journey.",
  bt: "My Skills & Work Experience",
  infoSkills1:
    "Throughout my career, I have developed a range of essential skills and gained various work experiences. Here is a summary of the knowledge and skills I have acquired during this journey: HTML 5: I have a proficiency level of 100% in HTML 5. I can effectively use HTML 5 in web development processes. CSS 3: My skills in CSS 3 are at 100%. I can create aesthetic and user-friendly interfaces in web design using CSS 3.",
  infoSkills2:
    "JavaScript: I have a proficiency level of 70% in JavaScript. I am experienced in developing interactive web applications with these languages. Node.js: My Node.js skills are at 60%. I can use Node.js in server-side development and application development processes. React & Next.js: My proficiency in React and Next.js is at 75%. I can efficiently use these technologies to create modern web applications.",
    infoSkills3:"MongoDB & Firebase: My skills in MongoDB and Firebase are at 50%. With my knowledge of database management and cloud-based applications, I can contribute to projects effectively. This is a brief summary of my career and skills. I look forward to working on creative projects and acquiring new skills. If you have any further questions or job offers, please feel free to contact me!",
  fName: "First Name",
  lName: "Last Name",
  eMail: "E-Post",
  mesagge: "Mesagge here...",
  send: "Send",
  warningMesagge: "Required fields cannot be empyt",
  grMesagge: "Thanks for contacting me",
  hapS: "Happy Students",
  hapC: "Happy Customers",
  fsProject: "Full-Stack Projects",
  pProject: "Public Projects",
  year: "2022 (June-August)",
  edu: "Ministry of Education and Vocational Education Center",
  specialty: "SQL programmer",
  year2: "2022 (July-October)",
  edu2: "Ministry of Youth and Sports and CODE Factory",
  specialty2: "WEB developer",
  year3: "2022/Sept-2023/Jan",
  edu3: "IT Academy and Algorithmics",
  specialty3: "FRONT-END developer",
  year4: "2023/Aug-2024/Jan( Continue...)",
  edu4: "JED Academy",
  specialty4: "FRONT-END developer",
  certficate: "See the certificate",
  hCertf: "Certficates and Courses",
  cv: "Upload CV",
  hire: "Hire Me",
  navHome: "Home",
  navAbout: "About",
  navSkills: "Skills",
  navProjects: "Projects",
  navContact: "Contact"
};
const translationRu = {
  about: "Об о мне",
  skills: "Навыки",
  project: "Проекты",
  contact: "Связь",
  hello: "Привет, это я",
  name: "Керимов Орхан",
  i: "И я",
  dev: "Веб-программист...",
  fre: " ищу работу",
  info1:
    "Написание кода — это не просто сборка строк; это также об объединении мыслей. Наша способность общаться с компьютерами не только решает проблемы, но и позволяет нам создавать новые миры. Как разработчик, наша клавиатура и код — это волшебные ключи, которые помогают нам открыть двери в цифровой мир.",
  infoAbout1:
    "Здравствуйте, я Орхан Керимов. Я родился в прекрасных землях Азербайджана в 1995 году. Мой интерес к компьютерам и технологиям повлиял на меня с детства. Однако я лишь недавно обнаружил в себе интерес к программированию и только что отправился в это путешествие ",
  infoAbout2:
    "Меня мотивируют проекты и опыт других разработчиков, которые я вижу в социальных сетях. Я узнаю что-то новое каждый день, и это продвигает меня вперед на пути к тому, чтобы стать лучшим программистом.",
  infoAbout3:
    "Меня мотивируют проекты и опыт других разработчиков, которые я вижу в социальных сетях. Я узнаю что-то новое каждый день, и это продвигает меня вперед на пути к тому, чтобы стать лучшим программистом.",
  infoAbout4:
    "Поначалу я, возможно, далек от крупных проектов в мире программного обеспечения, но я полон решимости развиваться и прогрессировать на каждом этапе. Я несу мечту внести свой вклад в развитие технологий и создать свои собственные проекты. В будущем я надеюсь более активно участвовать в мире программного обеспечения и разрабатывать новые проекты.",
  infoAbout5:
    "Как человек, который только начинает заниматься программированием, я хотел передать, насколько захватывающим для меня является это путешествие. Помните, что каждому нужно с чего-то начинать и продолжать учиться! Что касается того, кто я, то я любопытный человек, стремящийся исследовать огромный мир программирования и технологий. Моя страсть к обучению и решимость расти в этой области заставляют меня решать новые задачи и постоянно расширять свои знания. Я верю, что будущее открывает безграничные возможности для тех, кто готов учиться и внедрять инновации, и я рад быть частью этого пути.",
  bt: "Мои навыки и опыт",
  infoSkills1:
    "За время своей карьеры я развил ряд важных навыков и приобрел различный опыт работы. Вот краткое изложение знаний и навыков, которые я приобрел во время этого путешествия: HTML 5: Мой уровень владения HTML 5 составляет 100%. Я могу эффективно использовать HTML 5 в процессах веб-разработки. CSS 3: Мои навыки работы с CSS 3 на 100%. Я могу создавать эстетичные и удобные интерфейсы в веб-дизайне с помощью CSS 3.",
  infoSkills2:
    "JavaScript: Мой уровень владения JavaScript составляет 70%. У меня есть опыт разработки интерактивных веб-приложений на этих языках.Node.js: Мои навыки работы с Node.js находятся на уровне 60%. Я могу использовать Node.js в процессах серверной разработки и разработки приложений. Реагировать иNext.js: Мой уровень владения React и Next.js составляет 75%. Я могу эффективно использовать эти технологии для создания современных веб-приложений.",
    infoSkills3: "MongoDB и Firebase: мои навыки работы с MongoDB и Firebase находятся на уровне 50%. Благодаря моим знаниям в области управления базами данных и облачных приложений я могу эффективно участвовать в проектах. Это краткий обзор моей карьеры и навыков. Я с нетерпением жду возможности работать над творческими проектами и приобретать новые навыки. Если у вас есть дополнительные вопросы или предложения о работе, пожалуйста, свяжитесь со мной!",
  fName: "Имя",
  lName: "Фамилия",
  eMail: "Электронная почта",
  mesagge: "Ваше сообщение здесь...",
  send: "Отправлять",
  warningMesagge: "Обязательные поля не могут быть пустыми",
  grMesagge: "Спасибо, что связались со мной",
  hapS: "Счастливые студенты",
  hapC: "Счастливые клиенты",
  fsProject: "Полнофункциональные проекты",
  pProject: "Общественные проекты",
  year: "2022 (июнь-август)",
  edu: "Центр Министерства образования и профессионального образования",
  specialty: "SQL-программист",
  year2: "2022 (июль-октябрь)",
  edu2: "Министерство молодежи и спорта и Фабрика CODE",
  specialty2: "Веб-разработчик",
  year3: "2022/сентябрь-2023/январь",
  edu3: "ИТ Академия и алгоритмика",
  specialty3: "ФРОНТ-ЭНД разработчик",
  year4: "2023/Авкуст-2024/Ян",
  edu4: "Академия ДЖЕД",
  specialty4: "ФРОНТ-ЭНД разработчик",
  certficate: "Посмотреть сертификат",
  hCertf: "Сертификат и курс",
  cv: "Загрузите резюме",
  hire: "Найми Меня",
  navHome: "Дом",
 navAbout:"Об о мне",
navSkills:"Навыки",
navProjects:"Проекты",
navContact:"Связь"
};

i18n.use(initReactI18next).init({
  resources: {
    az: { translation: translationAz },
    en: { translation: translationEn },
    ru: { translation: translationRu },
  },
  lng: "az",
  fallbackLng: "az",
  interpolation: {
    escapeValue: { escapeValue: false },
  },
});

const Language = () => {
    const [selectedLang, setSelectedLang] = React.useState('az');

    const onClick = (e) => {
        e.preventDefault();
        const selectedValue = e.target.value;
        i18n.changeLanguage(selectedValue);
        setSelectedLang(selectedValue);
    };

    let languageName;
    if (selectedLang === 'az') {
        languageName = 'AZE';
    } else if (selectedLang === 'en') {
        languageName = 'ENG';
    } else if (selectedLang === 'ru') {
        languageName = 'RUS';
    }

    return (
        <Suspense fallback="Loading...">
            <form className="flex items-center justify-center gap-7 rounded-xl backdrop-blur-md border border-[rgba(255,255,255,0.3)] p-3">
                <button
                    onClick={onClick}
                    className="text-white group hover:text-primary relative"
                    type="submit"
                    value="az"
                >
                    {selectedLang === 'az' && (
                        <span className="rounded-full p-1 border  border-primary">{languageName}</span>
                    )}
                    {selectedLang !== 'az' && 'AZE'}
                </button>
                <button
                    onClick={onClick}
                    className="text-white group hover:text-primary relative"
                    type="submit"
                    value="en"
                >
                    {selectedLang === 'en' && (
                        <span className="rounded-full p-1 border border-primary">{languageName}</span>
                    )}
                    {selectedLang !== 'en' && 'ENG'}
                </button>
                <button
                    onClick={onClick}
                    className="text-white group hover:text-primary relative"
                    type="submit"
                    value="ru"
                >
                    {selectedLang === 'ru' && (
                        <span className="rounded-full p-1 border  border-primary">{languageName}</span>
                    )}
                    {selectedLang !== 'ru' && 'RUS'}
                </button>
            </form>
        </Suspense>
    );
};

  
  
  export default Language;