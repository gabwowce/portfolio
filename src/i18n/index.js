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
          error: {
            text: "Oops! The page you’re looking for doesn’t exist.",
            btn: "Back to Home",
          },
          header: {
            about: "About",
            portfolio: "Portfolio",
            contact: "Contact"
          },
          footer: {
            copyright: "All rights reserved.",
            pageLinks:[
              {
                title:"About",
                link:'/about',
                links:[
                  {
                    title:"Hero section",
                    link:"about-hero"
                  },
                  {
                    title: "My Skills",
                    link:"about-skills"
                  },
                  {
                    title: "My History",
                    link:"about-history"
                  },
                  {
                    title: "Language Skills",
                    link:"about-languages"
                  }
                ]
              },
              {
                title:"Portfolio",
                link:'/porfolio',
                links:[
                  {
                    title:"Hero skiltis",
                    link:"portfolio-hero"
                  },
                  {
                    title: "Mano Įgūdžiai",
                    link:"about-skills"
                  },
                  {
                    title:"Mano Istorija",
                    link:"about-history"
                  },
                  {
                    title: "Kalbų Įgūdžiai",
                    link:"about-language"
                  }
                ]
              },
              
              {
                title:"Kontaktai",
                link:'/contact',
                links:[
                  {
                    title:"Hero skiltis",
                    link:"contact-hero"
                  },
                  {
                    title: "Mano Įgūdžiai",
                    link:"about-skills"
                  },
                  {
                    title: "Mano Istorija",
                    link:"about-history"
                  },
                  {
                    title: "Kalbų Įgūdžiai",
                    link:"about-language"
                  }
                ]
              }
            ],
          },
          aboutPage: {
            name: "Gabrielė Tamaševičiūtė",
            jobTitle: "Junior Developer",
            description: "Programming is my driving passion. I enjoy every moment spent tackling challenges, seeking creative solutions, building and coding. I dedicate myself to hard work and continuous learning, not only because I aspire to become a professional in this field, but also because software development is my number one hobby.",
            stats:{
              title:"Some Statistic",
              subtitle:""
            },
            workExperience: {
              title: "My History",
              subtitle:"Although the storyline is straight, the twists in it are unexpected.",
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
                    "Collaborating with team members"
                  ],
                  skills: ["C# .NET", "XAML", "XML", "WPF", "HTML/CSS"]
                },
                {
                  title: "Software Engineer Student",
                  company: "Vilniaus Kolegija",
                  startDate: "2023-09-01",
                  endDate: "2027-01-01",
                  employmentType: "Session-based",
                  description: [
                    "Studies in Software Engineering",
                    "Structured/Object-Oriented Programming with Python, C++, C# .NET",
                    "Database management and SQL usage",
                    "Systems analysis and design"
                  ],
                  skills: ["Python", "C++", "C#", "SQL", "Axure RP", "AutoCAD"]
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
                    "Collaborated with colleagues to resolve transportation issues"
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
                    "Managed company documentation"
                  ],
                  skills: ["Excel", "Word"]
                }
              ]
            },
            education: {
              institution: "Vilniaus kolegija",
              degree: "Higher non-university (professional bachelor's degree)",
              fieldOfStudy: "Software Engineering",
              startYear: 2023,
              endYear: 2027
            },
            languages: {
              title: "Language Skills",
              subtitle:"Languages are my passion! I mean programming languages. Who wants to talk when you can write code?",
              details: {
                russian: {
                  speaking: 80,
                  comprehension: 100,
                  writing: 80
                },
                lithuanian: {
                  speaking: 100,
                  comprehension: 100,
                  writing: 100
                },
                english: {
                  speaking: 50,
                  comprehension: 80,
                  writing: 80
                }
              }
            },
            skills: {
              title: "My Skills",
              subtitle: 'I love them all, but I owe a big thanks to ChatGPT – thanks for being there during tough times!'
            },
            computerSkills: {
              "ChatGPT": 80,
              "Microsoft Excel": 80,
              "XML": 80,
              "AutoCAD": 70,
              "Axure RP": 70,
              "Bash Command Line": 70,
              "C++": 70,
              "CSS/SCSS": 70,
              "Figma": 70,
              "HTML": 70,
              "Microsoft Dynamics Axapta": 70,
              "Power BI": 70,
              "Python": 70,
              "Pygame": 60,
              "Web Scraping": 60,
              "Pandas": 60,
              "Matplotlib": 60,
              "ReactJS": 70,
              "SQL": 70,
              "SQLite": 60,
              "MySQL": 60,
              "C# .NET": 40,
              "ASP.NET": 40,
              "WPF": 40,
              "NodeJS": 40
            }
          },
          portfolioPage: {
            title: "My Works",
            description: "My programming journey has been diverse, involving various projects that served as valuable learning resources. I've created a range of applications, from data analytics projects to desktop applications. In this portfolio, I present my recent works that I am most passionate about.",
            projects: [
              {
                title: "Library Management App",
                description: "The library management system is designed for managing library data. The system allows tracking of book information, administering debts, and managing borrowers. It includes three modes: administrator, manager, and user, each with different rights and functionalities.",
                tools: ["React", "CSS/SCSS", "ASP.NET Core Web API", "MySQL"]
              },
              {
                title: "Real Estate Website",
                description: "This real estate website is designed to provide users with an intuitive platform for browsing and managing property listings. Built with React and TypeScript, the site features a responsive design using SCSS, ensuring an optimal experience across various devices.",
                tools: ["React", "TypeScript", "SCSS", "Responsive Design"]
              }
            ]
          },
          contactPage: {
            title: "Contact Me",
            description: "Fill out the form and I will get back to you."
          },
          statistics: {
            linesOfCode: {
              title: "Lines of Code Written",
              number: 50000
            },
            codeFirstTry: {
              title: "Code Written on First Try Without Errors",
              number: -1
            },
            bugsSquashed: {
              title: "Bugs Squashed",
              number: 120
            },
            monitorsUsed: {
              title: "Monitors Used",
              number: 3
            }
          },
          messages: [
            {
              id: 1,
              sender: "Draugas",
              recipient: "As",
              text: [
                
                { type: "received", content: "How can you sit in such darkness? Open the curtains." },
                { type: "sent", content: "No! It the light attracts bugs" },
              ]
            },
            {
              id: 2,
              sender: "Mama",
              recipient: "As",
              text: [
                
                { type: "received", content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas" },
                { type: "sent", content: "Ne! šviesą pritraukia bug'us" },
              ]
            },
            {
              id: 3,
              sender: "Tetis",
              recipient: "As",
              text: [
              
                { type: "received", content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas" },
                { type: "sent", content: "Ne! šviesą pritraukia bug'us" },
              ]
            }
          ]
        }
      },
      lt: {
        translation: {
          error: {
            text: "Ups! Puslapis, kurio ieškote, neegzistuoja.",
            btn: "Grįžti į pradžią",
          },
          header: {
            about: "Apie mane",
            portfolio: "Portfolio",
            contact: "Kontaktai"
          },
          footer: {
            copyright: "Visos teisės saugomos.",
            pageLinks:[
              {
                title:"Apie mane",
                link:'/about',
                links:[
                  {
                    title:"Hero skiltis",
                    link:"abaut-hero"
                  },
                  {
                    title: "Mano Įgūdžiai",
                    link:"about-skills"
                  },
                  {
                    title: "Mano Istorija",
                    link:"about-history"
                  },
                  {
                    title: "Kalbų Įgūdžiai",
                    link:"about-languages"
                  }
                ]
              },
              {
                title:"Portfolio",
                link:'/porfolio',
                links:[
                  {
                    title:"Hero skiltis",
                    link:"portfolio-hero"
                  },
                  {
                    title: "Mano Įgūdžiai",
                    link:"about-skills"
                  },
                  {
                    title:"Mano Istorija",
                    link:"about-history"
                  },
                  {
                    title: "Kalbų Įgūdžiai",
                    link:"about-language"
                  }
                ]
              },
              {
                title:"Kontaktai",
                link:'/contact',
                links:[
                  {
                    title:"Hero skiltis",
                    link:"contact-hero"
                  },
                  {
                    title: "Mano Įgūdžiai",
                    link:"about-skills"
                  },
                  {
                    title: "Mano Istorija",
                    link:"about-history"
                  },
                  {
                    title: "Kalbų Įgūdžiai",
                    link:"about-language"
                  }
                ]
              }
            ],
          },
          aboutPage: {
            name: "Gabrielė Tamaševičiūtė",
            jobTitle: "Jaunesnioji programuotoja",
            description: "Programavimas, o ypač vartotojo sąsajos, yra mano gyvenimo varikliukas. Aš mėgaujuosi kiekviena minute praleista gilinantis į užduotis, ieškant kūrybiškų sprendimų, kuriant ir programuojant. Tikrai daug dirbu ir daug mokausi, gal dėl to, kad noriu tapti šios srities profesionale, bet manau ir dėl to, kad programų kūrimas yra mano top 1 hobis.",
            stats:{
              title:"Šiek tiek statistokos",
              subtitle:""
            },
            workExperience: {
              title: "Mano istorija",
              subtitle:"Nors istorijos linija tiesi, bet posūkiai joje netikėti.",
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
                    "Koreguoju dizaino elementus, jei pirminis planas reikalauja pakeitimų",
                    "Dirbu komandoje"
                  ],
                  skills: ["C# .NET", "XAML", "XML", "WPF", "HTML/CSS"]
                },
                {
                  title: "Programų inžinerijos studentė",
                  company: "Vilniaus Kolegija",
                  startDate: "2023-09-01",
                  endDate: "2027-01-01",
                  employmentType: "Sesijinis mokymas",
                  description: [
                    "Programų inžinerijos mokslai",
                    "Struktūrinis/Objektinis programavimas: Python, C++, C# .NET",
                    "Duomenų bazės valdymas, SQL kalbos naudojimas",
                    "Sistemų analizė ir projektavimas"
                  ],
                  skills: ["Python", "C++", "C#", "SQL", "Axure RP", "AutoCAD"]
                },
                {
                  title: "Planavimo specialistas",
                  company: "Girteka Europe West, UAB",
                  startDate: "2021-10-01",
                  endDate: "2023-09-01",
                  employmentType: "Full Time",
                  photo: planningPic,
                  description: [
                    "Strateginis krovinių srautų planavimas",
                    "Transporto priemonių judėjimo analizė",
                    "Optimalių gabenimo variantų parinkimas",
                    "Kolektyvinis darbas, sprendžiant krovinių pristatymo problemas"
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
                    "Elektros tinklo valdymas",
                    "Butų administravimas",
                    "Skolų išieškojimas",
                    "Bendrovės dokumentų administravimas"
                  ],
                  skills: ["Excel", "Word"]
                }
              ]
            },
            education: {
              institution: "Vilniaus kolegija",
              degree: "Aukštasis neuniversitetinis (profesinis bakalauras)",
              fieldOfStudy: "Programų inžinerija",
              startYear: 2023,
              endYear: 2027
            },
            languages: {
              title: "Kalbų įgūdžiai",
              subtitle:"Kalbos yra mano aistra! Turiu omenyje programavimo kalbas. Kam kalbėtis, kai galima rašyti kodą?",
              details: {
                rusų: {
                  kalbėjimas: 80,
                  supratimas: 100,
                  rašymas: 80
                },
                lietuvių: {
                  kalbėjimas: 100,
                  supratimas: 100,
                  rašymas: 100
                },
                anglų: {
                  kalbėjimas: 50,
                  supratimas: 80,
                  rašymas: 80
                }
              }
            },
            skills: {
              title: "Mano įgūdžiai",
              subtitle: 'Aš myliu juos visus, bet esu labai dėkingas ChatGPT – ačiū, kad buvai šalia sunkiu metu!'
            },
            computerSkills: {
              "ChatGPT": 80,
              "Microsoft Excel": 80,
              "XML": 80,
              "AutoCAD": 70,
              "Axure RP": 70,
              "Bash Command Line": 70,
              "C++": 70,
              "CSS/SCSS": 70,
              "Figma": 70,
              "HTML": 70,
              "Microsoft Dynamics Axapta": 70,
              "Power BI": 70,
              "Python": 70,
              "Pygame": 60,
              "Web Scraping": 60,
              "Pandas": 60,
              "Matplotlib": 60,
              "ReactJS": 70,
              "SQL": 70,
              "SQLite": 60,
              "MySQL": 60,
              "C# .NET": 40,
              "ASP.NET": 40,
              "WPF": 40,
              "NodeJS": 40
            }
          },
          portfolioPage: {
            title: "Mano darbai",
            description: "Mano programavimo kelias buvo labai įvairus ir susijęs su daugybe projektų, kurie tapo puikiais mokymosi šaltiniais. Nuo duomenų analizės projektų iki darbalaukio programų kūrimo, mano kelias buvo pilnas iššūkių ir atradimų. Šiame portfolio pateikiu naujausius darbus, kuriais labiausiai didžiuojuosi.",
            projects: [
              {
                title: "Bibliotekos valdymo sistema",
                description: "Sistema skirta bibliotekų duomenims tvarkyti, leidžianti stebėti knygų informaciją, administruoti skolas ir tvarkyti skolintojus. Sistemoje yra trys režimai: administratoriaus, vadybininko ir vartotojo. Kiekvienas režimas turi skirtingas teises ir funkcijas.",
                tools: ["React", "CSS/SCSS", "ASP.NET Core Web API", "MySQL"]
              },
              {
                title: "Nekilnojamojo turto svetainė",
                description: "Ši nekilnojamojo turto svetainė sukurta tam, kad vartotojai galėtų lengvai naršyti ir tvarkyti turto įrašus. Svetainė sukurta naudojant React ir TypeScript, turi adaptyvų dizainą, kuris užtikrina optimalią patirtį visų tipų įrenginiuose.",
                tools: ["React", "TypeScript", "SCSS", "Adaptyvus dizainas"]
              }
            ]
          },
          contactPage: {
            title: "Susisiekite",
            description: "Užpildykite formą ir aš su jumis susisieksiu."
          },
          statistics: {
            linesOfCode: {
              title: "Parašyta kodo eilučių",
              number: 50000
            },
            codeFirstTry: {
              title: "Kodas parašytas iš pirmo karto be klaidų",
              number: -1
            },
            bugsSquashed: {
              title: "Sunaikinta klaidų",
              number: 120
            },
            monitorsUsed: {
              title: "Naudoti monitoriai",
              number: 3
            }
          },
          messages: [
            {
              id: 1,
              sender: "Draugas",
              recipient: "As",
              text: [
                { type: "sent", content: "No! It attracts bugs" },
                { type: "received", content: "How can you sit in such darkness? Open the curtains." }
              ]
            },
            {
              id: 2,
              sender: "Mama",
              recipient: "As",
              text: [
                { type: "sent", content: "Ne! šviesą pritraukia bug'us" },
                { type: "received", content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas" }
              ]
            },
            {
              id: 3,
              sender: "Tetis",
              recipient: "As",
              text: [
                { type: "sent", content: "Ne! šviesą pritraukia bug'us" },
                { type: "received", content: "Kaip gali tokioje tamsoje sedėti, atskleisk užuolaidas" }
              ]
            }
          ]
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
}
)
;

export default i18n;
