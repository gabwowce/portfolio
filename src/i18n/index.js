// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import adminPic from '../assets/experience/admin.jpg';
import codingPic from '../assets/experience/coding.jpg';
import planningPic from '../assets/experience/planning.jpg';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          header: {
            about: "About me",
            portfolio: "Portfolio",
            contact: "Contact",
          },
          footer: {
            copyright: "All rights reserved.",
            about: "About",
            portfolio: "Portfolio",
            contact: "Contact"
          },
          aboutPage: {
            name: "Gabrielė Tamaševičiūtė",
            jobTitle: "Junior Developer",
            description: "Programming is my driving passion. I enjoy every moment spent tackling challenges, seeking creative solutions, building and coding. I dedicate myself to hard work and continuous learning, not only because I aspire to become a professional in this field, but also because software development is my number one hobby.",
            workExperience: {
              title: "My History",
              experiences: [
                {
                  title: "Junior Developer",
                  company: "Universalios valdymo sistemos, UAB",
                  startDate: "2024-06-25",
                  endDate: null,
                  employmentType: "Full Time",
                  photo: codingPic,
                  description: [
                    "Working with the user interface of POS systems",
                    "Modifying design elements if the original plan requires changes",
                    "Collaborating with team members",
                  ],
                  skills: ["C# .NET", "XAML", "XML", "WPF", "HTML/CSS"]
                },
                {
                  "title": "Software Engineer Student",
                  "company": "Vilniaus Kolegija",
                  "startDate": "2023-09-01",
                  "endDate": "2027-01-01",
                  "employmentType": "Session-based",
                  "description": [
                    "Studies in Software Engineering",
                    "Structured/Object-Oriented Programming with Python, C++, C# .NET",
                    "Database management and SQL usage",
                    "Systems analysis and design"
                  ],
                  "skills": ["Python", "C++", "C#", "SQL", "Axure RP", "AutoCAD"]
                },
                {
                  title: "Planner",
                  company: "Girteka Europe West, UAB",
                  startDate: "2021-10-01",
                  endDate: "2023-09-01",
                  employmentType: "Full Time",
                  photo: planningPic,
                  description: [
                    "Strategically planned cargo flows for efficient coordination",
                    "Analyzed supervised vehicle movements",
                    "Selected and adjusted optimal transportation options based on evolving circumstances",
                    "Collaborated with colleagues to resolve transportation issues",
                  ],
                  skills: ["Excel", "Dynamics AX"]
                },
                {
                  title: "Administrator",
                  company: "Jarinta, UAB",
                  startDate: "2021-04-01",
                  endDate: "2021-09-01",
                  employmentType: "Full Time",
                  photo: adminPic,
                  description: [
                    "Electrical network management",
                    "Apartment administration",
                    "Debt collection",
                    "Managed company documentation",
                  ],
                  skills: ["Excel", "Word"]
                },
               

              ],
            },
            education: {
              institution: "Vilniaus kolegija",
              degree: "Higher non-university (professional bachelor's degree)",
              fieldOfStudy: "Software Engineering",
              startYear: 2023,
              endYear: 2027,
            },
            languages: {
              title:'Language Skills',
              details:{
                russian: {
                  speaking: 80, // good
                  comprehension: 100, // excellent
                  writing: 80 // good
                },
                lithuanian: {
                  speaking: 100, // excellent
                  comprehension: 100, // excellent
                  writing: 100 // excellent
                },
                english: {
                  speaking: 50, // average
                  comprehension: 80, // good
                  writing: 80 // good
                }
              }
             
            },
            skills:{
              title: 'My Skills'
            },
            computerSkills: {
              
              "ChatGPT": 80, // Skilled
              "Microsoft Excel": 80, // Skilled
              "XML": 80, // Skilled
              "AutoCAD": 70, // Advanced
              "Axure RP": 70, // Advanced
              "Bash Command Line": 70, // Advanced
              "C++": 70, // Advanced
              "CSS/SCSS": 70, // Advanced
              "Figma": 70, // Advanced
              "HTML": 70, // Advanced
              "Microsoft Dynamics Axapta": 70, // Advanced
              "Power BI": 70, // Advanced
              "Python": 70, // Advanced
              "Pygame": 60, // Advanced
              "Web Scraping": 60, // Advanced
              "Pandas": 60, // Advanced
              "Matplotlib": 60, // Advanced
              "ReactJS": 70, // Advanced
              "SQL": 70, // Advanced
              "SQLite": 60, // Advanced
              "MySQL": 60, // Advanced
              "C# .NET": 40, // Beginner
              "ASP.NET": 40, // Beginner
              "WPF": 40, // Beginner
              "NodeJS": 40 // Beginner
            }
          },
          portfolioPage: {
            title: "My Works",
            description: "My programming journey has been diverse, involving various projects that served as valuable learning resources. I've created a range of applications, from data analytics projects to desktop applications. In this portfolio, I present my recent works that I am most passionate about.",
            projects: [
              {
                title: "Library Management App",
                description: "The library management system is designed for managing library data. The system allows tracking of book information, administering debts, and managing borrowers. It includes three modes: administrator, manager, and user, each with different rights and functionalities.",
                tools: ["React", "CSS/SCSS", "ASP.NET Core Web API", "MySQL"],
              },
              {
                title: "Real Estate Website",
                description: "This real estate website is designed to provide users with an intuitive platform for browsing and managing property listings. Built with React and TypeScript, the site features a responsive design using SCSS, ensuring an optimal experience across various devices.",
                tools: ["React", "TypeScript", "SCSS", "Responsive Design"],
              },
            ],
          },
          contactPage: {
            title: "Contact Me",
            description: "Fill out the form and I will get back to you.",
          },
          statistics: {
            linesOfCode: {
                title: "Lines of Code Written",
                number: 50000,
                pic: "",
            },
            codeFirstTry: {
                title: "Code Written on First Try Without Errors",
                number: -1,
                pic: "",
            },
            bugsSquashed: {
                title: "Bugs Squashed",
                number: 120,
                pic: "",
            },
            monitorsUsed: {
                title: "Monitors Used",
                number: 3,
                pic: "",
            },
        },
          messages: [
        {
          id: 1,
          sender: "Draugas",
          recipient: "As",
          text: [
            {
              type: "sent",
              content: "No! It attracts bugs",
            },
            {
              type: "received",
              content: "How can you sit in such darkness? Open the curtains.",
            },
          ],
        },
        {
          id: 2,
          sender: "Mama",
          recipient: "As",
          text: [
            {
              type: "sent",
              content: "Ne! šviesą pritraukia bug'us",
            },
            {
              type: "received",
              content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas",
            },
          ],
        },
        {
          id: 3,
          sender: "Mama",
          recipient: "As",
          text: [
            {
              type: "sent",
              content: "Ne! šviesą pritraukia bug'us",
            },
            {
              type: "received",
              content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas",
            },
          ],
        },
      ],
 },
      },
      lt: {
        translation: {
          header: {
            about: "Apie mane",
            portfolio: "Portfolio",
            contact: "Kontaktai",
          },
          footer: {
            copyright: "Visos teisės saugomos.",
            about: "Apie mane",
            portfolio: "Portfolio",
            contact: "Kontaktai"
          },
          aboutPage: {
            name: "Gabrielė Tamaševičiūtė",
            jobTitle: "Jaunesnioji programuotoja",
            description: "Programavimas, o ypač vartotojo sąsajos, yra mano gyvenimo varikliukas. Aš mėgaujuosi kiekviena minute praleista gilinantis į užduotis, ieškant kūrybiškų sprendimų, kuriant ir programuojant. Tikrai daug dirbu ir daug mokausi, gal dėl to, kad noriu tapti šios srities profesionale, bet manau ir dėl to, kad programų kūrimas yra mano top 1 hobis.",
            workExperience: {
              title: "Mano istorija",
              experiences: [
                {
                  title: "Jaunesnioji programuotoja",
                  company: "Universalios valdymo sistemos, UAB",
                  startDate: "2024-06-25",
                  endDate: null,
                  employmentType: "Full Time",
                  photo: codingPic,
                  description: [
                    "Dirbu su POS sistemų vartotojo sąsaja",
                    "Keičiu dizaino elementus, jeigu originalus planas reikalauja pasikeitimų",
                    "Bendradarbiauju su komandos nariais",
                  ],
                  skills: ["C# .NET", "XAML", "XML", "WPF", "HTML/CSS"]
                },
                {
                  "title": "Programų sistemų studentas",
                  "company": "Vilniaus Kolegija",
                  "startDate": "2023-09-01",
                  "endDate": "2027-01-01",
                  "employmentType": "Sesijomis",
                  "description": [
                    "Studijos programų sistemų srityje",
                    "Strukūrinis/objektinis programavimas su Python, C++, C# .NET",
                    "Duomenų bazių valdymas ir SQL naudojimas",
                    "Sistemų analizė ir dizainas"
                  ],
                  "skills": ["Python", "C++", "C#", "SQL", "Axure RP", "AutoCAD"]
                },
                {
                  title: "Reisų planuotoja",
                  company: "Girteka Europe West, UAB",
                  startDate: "2021-10-01",
                  endDate: "2023-09-01",
                  employmentType: "Full Time",
                  photo: planningPic,
                  description: [
                    "Strategiškai planavau krovinių srautus, siekiant efektyvios koordinacijos",
                    "Analizavau stebimų transporto priemonių judėjimą",
                    "Pasirinkau ir pritaikiau optimalius transportavimo variantus, atsižvelgdama į besikeičiančias aplinkybes",
                    "Bendradarbiavau su kolegomis sprendžiant transportavimo problemas",
                  ],
                  skills: ["Excel", "Dynamics AX"]
                },
                {
                  title: "Administratorė",
                  company: "Jarinta, UAB",
                  startDate: "2021-04-01",
                  endDate: "2021-09-01",
                  employmentType: "Full Time",
                  photo: adminPic,
                  description: [
                    "Elektros tinklų valdymas",
                    "Bendrijų administravimas",
                    "Skolų išieškojimas",
                    "Tvarkiau įmonės dokumentus",
                  ],
                  skills: ["Excel", "Word"]
                },
              ],
            },
            education: {
              institution: "Vilniaus kolegija",
              degree: "Aukštesnis neuniversitetinis (profesinis bakalauro laipsnis)",
              fieldOfStudy: "Programų inžinerija",
              startYear: 2023,
              endYear: 2027,
            },
            languages: {
              title:'Kalbos',
              details:{
                rusų: {
                  kalbėjimas: 80, // good
                  supratimas: 100, // excellent
                  rašymas: 80 // good
                },
                lietuvių: {
                  kalbėjimas: 100, // excellent
                  supratimas: 100, // excellent
                  rašymas: 100 // excellent
                },
                anglų: {
                  kalbėjimas: 50, // average
                  supratimas: 80, // good
                  rašymas: 80 // good
                }
              }
             
            },
            skills:{
              title: 'Mano įgudžiai'
            },
            computerSkills: {
              "ChatGPT": 80, // Skilled
              "Microsoft Excel": 80, // Skilled
              "XML": 80, // Skilled
              "AutoCAD": 70, // Advanced
              "Axure RP": 70, // Advanced
              "Bash Command Line": 70, // Advanced
              "C++": 70, // Advanced
              "CSS/SCSS": 70, // Advanced
              "Figma": 70, // Advanced
              "HTML": 70, // Advanced
              "Microsoft Dynamics Axapta": 70, // Advanced
              "Power BI": 70, // Advanced
              "Python": 70, // Advanced
              "Pygame": 60, // Advanced
              "Web Scraping": 60, // Advanced
              "Pandas": 60, // Advanced
              "Matplotlib": 60, // Advanced
              "ReactJS": 70, // Advanced
              "SQL": 70, // Advanced
              "SQLite": 60, // Advanced
              "MySQL": 60, // Advanced
              "C# .NET": 40, // Beginner
              "ASP.NET": 40, // Beginner
              "WPF": 40, // Beginner
              "NodeJS": 40 // Beginner
            }
          },
          portfolioPage: {
            title: "Mano darbai",
            description: "Mano programavimo kelias buvo įvairus, įtraukiant įvairius projektus, kurie buvo vertingi mokymosi šaltiniai. Sukūriau įvairius programinės įrangos projektus, nuo duomenų analizės iki darbalaukio programų. Šiame portfelyje pateikiu savo naujausius darbus, kuriuos labiausiai myliu.",
            projects: [
              {
                title: "Bibliotekos valdymo sistema",
                description: "Bibliotekos valdymo sistema skirta bibliotekos duomenų valdymui. Sistema leidžia sekti knygų informaciją, administruoti skolas ir valdyti skolininkus. Ji apima tris režimus: administratoriaus, vadybininko ir naudotojo, kiekvienas iš jų turi skirtingas teises ir funkcionalumą.",
                tools: ["React", "CSS/SCSS", "ASP.NET Core Web API", "MySQL"],
              },
              {
                title: "Nekilnojamojo turto svetainė",
                description: "Ši nekilnojamojo turto svetainė yra sukurta siekiant suteikti vartotojams intuityvią platformą nekilnojamojo turto sąrašams naršyti ir valdyti. Sukurta naudojant React ir TypeScript, svetainė pasižymi prisitaikančiu dizainu, naudojant SCSS, užtikrinant optimalią patirtį įvairiuose įrenginiuose.",
                tools: ["React", "TypeScript", "SCSS", "Responsive Design"],
              },
            ],
          },
          contactPage: {
            title: "Susisiekite su manimi",
            description: "Užpildykite formą ir aš jums atsakysiu.",
          },
          statistics: {
            linesOfCode: {
                title: "Parašytų kodo eilučių",
                number: 50000,
                pic: "",
            },
            codeFirstTry: {
                title: "Kodas parašytas pirmuoju bandymu be klaidų",
                number: -1,
                pic: "",
            },
            bugsSquashed: {
                title: "Ištaisytų klaidų",
                number: 120,
                pic: "",
            },
            monitorsUsed: {
                title: "Naudojamų monitorių",
                number: 3,
                pic: "",
            },
        },

         messages: [
        {
          id: 1,
          sender: "Draugas",
          recipient: "As",
          text: [
            {
              type: "sent",
              content: "Ne! šviesą pritraukia bug'us",
            },
            {
              type: "received",
              content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas",
            },
          ],
        },
        {
          id: 2,
          sender: "Mama",
          recipient: "As",
          text: [
            {
              type: "sent",
              content: "Ne! šviesą pritraukia bug'us",
            },
            {
              type: "received",
              content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas",
            },
          ],
        },
        {
          id: 3,
          sender: "Mama",
          recipient: "As",
          text: [
            {
              type: "sent",
              content: "Ne! šviesą pritraukia bug'us",
            },
            {
              type: "received",
              content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas",
            },
          ],
        },
      ],
    },
  },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });


export default i18n;
