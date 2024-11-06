// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import adminPic from '../assets/experience/admin.jpg';
import codingPic from '../assets/experience/coding.jpg';
import planningPic from '../assets/experience/planning.jpg';
import blueBg from '../assets/projects/blue-bg.png';
import LibraryPic from '../assets/projects/LabraryWeb.png';
import buildingBg from '../assets/projects/building-bg.png';
import RealEstatePic from '../assets/projects/RealEstateWeb.png';

import portfolioBgLight from '../assets/projects/portfolioBgLight.png';
import portfolioBgDark from '../assets/projects/portfolioBgDark.png';

import portfolioDark from '../assets/projects/portfolioDark.png';
import portfolioLight from '../assets/projects/portfolioLight.png';

import RealEstateMobile from '../assets/projects/RealEstateMobile.png';
import porfolioLightMobile from '../assets/projects/porfolioLightMobile.png';
import porfolioDarkMobile from '../assets/projects/porfolioDarkMobile.png';
import { light } from '@mui/material/styles/createPalette';

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
          contact: {
            title: "Let's chat. Tell me about your project",
            subtitle: "Let's create something together 👋",
            message:'Send me a message 🚀',
            sendMessage: "SEND MESSAGE",
            name:'Name',
            mss:"Message"
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
                
              },
              {
                title:"Portfolio",
                link:'/portfolio',
                
              },
              
              {
                title:"Contact",
                link:'/contact',
               
              }
            ],
          },
          aboutPage: {
            name: "Gabrielė Tamaševičiūtė",
            jobTitle: "Junior Developer",
            description: "Software development is my driving passion. I enjoy every moment spent tackling challenges, seeking creative solutions, building and coding. I dedicate myself to hard work and continuous learning, not only because I aspire to become a professional in this field, but also because software development is my number one hobby.",
            stats:{
              title:"Some Statistic",
              subtitle:""
            },
            workExperience: {
              title: "My History",
              subtitle:"Like a storyline, my story has many unexpected twists",
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
                    "Solving problems and fixing bugs"
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
              title: "My Relationship with Languages",
              subtitle: "Me and languages – trying to find common ground here.",
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
                  speaking: 60,
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
            title: "My Projects",
            description: "My programming journey has been diverse, involving various projects that served as valuable learning resources. I've created a range of applications, from data analytics projects to desktop applications. In this portfolio, I present my recent works that I am most passionate about.",
            projects: [
              {
                title: "Library Management App",
                description: "The library management system is designed for managing library data. The system allows tracking of book information, administering debts, and managing borrowers. It includes three modes: administrator, manager, and user, each with different rights and functionalities.",
                tools: ["React", "SCSS", "ASP.NET Core Web API", "MySQL"],
                links:{
                  front:'https://github.com/gabwowce/LibraryManagement-frontend',
                  back:'https://github.com/gabwowce/LibraryManagement-backend'
                },
                images:{
                  dark:{
                    bg: blueBg,
                    pic: LibraryPic,
                    pic2: null
                  },
                  light:{
                    bg: blueBg,
                    pic: LibraryPic,
                    pic2: null
                  }
                },
                
              },
              {
                title: "Real Estate Website",
                description: "This real estate website project was created to deepen knowledge of React and TypeScript. Additionally, the site was developed as a practical tool to enhance skills in accurately replicating designs from Figma.",
                tools: ["React", "TypeScript", "SCSS"],
                links:{
                  front:'https://github.com/gabwowce/real-estate-fronted-app',
                  link:'https://gabwowce.github.io/real-estate-fronted-app'
                },
                images:{
                  light:{
                    bg: buildingBg,
                    pic: RealEstatePic,
                    pic2: RealEstateMobile,
                  },
                  dark:{
                    bg: buildingBg,
                    pic: RealEstatePic,
                    pic2: RealEstateMobile,
                  }
                },
                
              },
              {
                title: "My Portfolio Website",
                description: "This portfolio website is a personal project showcasing my skills and experience in programming. I designed it myself to deepen my design and programming abilities. Focused on creating user-friendly interfaces, I continuously refine my development approach. The responsive layout offers a seamless experience across devices, reflecting my enthusiasm for engaging web experiences.",
                tools: ["React", "Material-UI", "CSS", "i18next"],
                links:{
                  front:'https://github.com/gabwowce/portfolio',
                },
                images: {
                  light: {
                    bg: portfolioBgDark,
                    pic: portfolioDark, 
                    pic2: porfolioDarkMobile,
                  },
                  dark: {
                    bg: portfolioBgLight,
                    pic: portfolioLight,
                    pic2: porfolioLightMobile,
                  }
                },
              }
            ]
          },
          contactPage: {
            title: "Contact Me",
            description: "Fill out the form and I will get back to you."
          },
          statistics: {
            linesOfCode: {
              title: "Lines of Code",
              number: '50000+'
            },
            codeFirstTry: {
              title: "First Try, No Errors",
              number: -1
            },
            bugsSquashed: {
              title: "Bugs Squashed",
              number: '99+'
            },
            monitorsUsed: {
              title: "Monitors Used",
              number: '3+'
            }
          },
          messages: [
            {
              id: 1,
              sender: "Russian",
              recipient: "Aš",
              text: [
                { type: "received", content: "Ну что, как думаешь, нам ещё нужна практика?" },
                { type: "sent", content: "Не, мне уже всё понятно! Я тебя прекрасно понимаю." },
                { type: "received", content: "О, круто! Значит, можем спокойно общаться без проблем." },
                { type: "sent", content: "Да, без проблем! Всё ясно с первого слова." },
               
              ]
            },
            {
              id: 2,
              sender: "Lithuanian",
              recipient: "As",
              text: [
                { type: "received", content: "Labas! Kaip sekasi?" },
                { type: "sent", content: "Labas! Puikiai, lietuvių kalba – kaip vanduo, nesunkiai plaukiu!" },
                { type: "received", content: "Ha, aišku, kad taip!" },
              ]
            },
            {
              id: 3,
              sender: "English",
              recipient: "As",
              text: [
                { type: "received", content: "Hey! I get everything you say, but I still need to practice a bit more before I sound like a pro." },
                { type: "sent", content: "Haha, you’re doing great! I get everything, just need a bit more talking practice myself." },
                { type: "received", content: "Well, at least we’re fluent in understanding each other, right?" },
                { type: "sent", content: "Exactly! We’re practically language ninjas, just need to level up the speaking part!" },
              ]
            }
          ]
        }
      },
      lt: {
        translation: {
          contact: {
            title: "Pasikalbėkime. Papasakok apie savo projektą",
            subtitle: "Sukurkime ką nors kartu 👋",
            message: 'Parašyk man žinutę 🚀',
            sendMessage: "SIŲSTI ŽINUTĘ",
            name:'Vardas',
            mss:"Žinutė"
        },
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
                
              },
              {
                title:"Portfolio",
                link:'/portfolio',
                
              },
              {
                title:"Kontaktai",
                link:'/contact',
               
              }
            ],
          },
          aboutPage: {
            name: "Gabrielė Tamaševičiūtė",
            jobTitle: "Jaunesnioji programuotoja",
            description: "Programų kūrimas yra mano gyvenimo varikliukas. Aš mėgaujuosi kiekviena minute praleista gilinantis į užduotis, ieškant kūrybiškų sprendimų, kuriant ir programuojant. Tikrai daug dirbu ir daug mokausi, gal dėl to, kad noriu tapti šios srities profesionale, bet manau ir dėl to, kad programų kūrimas yra mano top 1 hobis.",
            stats:{
              title:"Šiek tiek statistokos",
              subtitle:""
            },
            workExperience: {
              title: "Mano istorija",
              subtitle:"Kaip ir istorijos linija, taip ir mano istorija - daug netikėtų posukių",
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
                    "Dirbu komandoje",
                    "Sprendžiu problemas ir taisau klaidas"
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
              title: "Santykiai su kalbomis",
              subtitle:"Čia aš ir kalbos - bandom rasti bendrą kalbą",
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
                  kalbėjimas: 60,
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
            description: "Mano programavimo kelias buvo įvairus, apimantis įvairius projektus, kurie buvo vertingi mokymosi šaltiniai. Nuo duomenų analizės projektų iki darbalaukio programų kūrimo, mano kelias buvo pilnas iššūkių ir atradimų. Šiame portfolio pateikiu naujausius darbus, kuriais labiausiai džiaugiuosi.",
            projects: [
              {
                title: "Bibliotekos valdymo sistema",
                description: "Sistema skirta bibliotekų duomenims tvarkyti, leidžianti stebėti knygų informaciją, administruoti skolas ir tvarkyti skolintojus. Sistemoje yra trys režimai: administratoriaus, vadybininko ir vartotojo. Kiekvienas režimas turi skirtingas teises ir funkcijas.",
                tools: ["React", "SCSS", "ASP.NET Core Web API", "MySQL"],
                links:{
                  front:'https://github.com/gabwowce/LibraryManagement-frontend',
                  back:'https://github.com/gabwowce/LibraryManagement-backend'
                },
                images:{
                  dark:{
                    bg: blueBg,
                    pic: LibraryPic,
                    pic2: null
                  },
                  light:{
                    bg: blueBg,
                  pic: LibraryPic,
                  pic2: null
                  }
                },
                
              },
              {
                title: "Nekilnojamojo turto svetainė",
                description: "Šis nekilnojamojo turto svetainės projektas buvo sukurtas siekiant gilinti žinias apie React ir TypeScript. Taip pat puslapis buvo kuriamas kaip praktinis įrankis tobulinti įgūdžius atkuriant tikslų dizainą iš Figma.",
                tools: ["React", "TypeScript", "SCSS"],
                links:{
                  front:'https://github.com/gabwowce/real-estate-fronted-app',
                  link:'https://gabwowce.github.io/real-estate-fronted-app'
                },
                images:{
                  dark:{
                    bg: buildingBg,
                    pic: RealEstatePic,
                    pic2: RealEstateMobile,
                  },
                  light:{
                    bg: buildingBg,
                    pic: RealEstatePic,
                    pic2: RealEstateMobile,
                  }
                },
              },
              {
                title: "Mano Portfelio Svetainė",
                description: "Ši porfolio svetainė yra asmeninis projektas, pristatantis mano įgūdžius ir patirtį programavime. Svetainės dizainą sukūriau pati, siekdama gilinti dizaino ir programavimo žinias. Dėmesys vartotojui draugiškoms sąsajoms leidžia nuolat tobulinti savo požiūrį. Reaguojantis dizainas užtikrina sklandžią patirtį įvairiuose įrenginiuose, atspindint mano entuziazmą kurti patrauklias žiniatinklio patirtis.",
                tools: ["React", "Material-UI", "CSS", "i18next"],
                links:{
                  front:'https://github.com/gabwowce/portfolio',
                },
                images: {
                  light: {
                    bg: portfolioBgDark,
                    pic: portfolioDark, 
                    pic2: porfolioDarkMobile,
                  },
                  dark: {
                    bg: portfolioBgLight,
                    pic: portfolioLight,
                    pic2: porfolioLightMobile,
                  }
                },
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
              number: '50000+'
            },
            codeFirstTry: {
              title: "Kodas be klaidų iš pirmo karto",
              number: -1
            },
            bugsSquashed: {
              title: "Sunaikinta klaidų",
              number: '99+'
            },
            monitorsUsed: {
              title: "Naudoti monitoriai",
              number: '3+'
            }
          },
          messages: [
            {
              id: 1,
              sender: "Rusų kalba",
              recipient: "Aš",
              text: [
                { type: "received", content: "Ну что, как думаешь, нам ещё нужна практика?" },
                { type: "sent", content: "Не, мне уже всё понятно! Я тебя прекрасно понимаю." },
                { type: "received", content: "О, круто! Значит, можем спокойно общаться без проблем." },
                { type: "sent", content: "Да, без проблем! Всё ясно с первого слова." },
               
              ]
            },
            {
              id: 2,
              sender: "Lietuvių kalba",
              recipient: "As",
              text: [
                { type: "received", content: "Labas! Kaip sekasi?" },
                { type: "sent", content: "Labas! Puikiai, lietuvių kalba – kaip vanduo, nesunkiai plaukiu!" },
                { type: "received", content: "Ha, aišku, kad taip!" },
              ]
            },
            {
              id: 3,
              sender: "Anglų kalba",
              recipient: "As",
              text: [
                { type: "received", content: "Hey! I get everything you say, but I still need to practice a bit more before I sound like a pro." },
                { type: "sent", content: "Haha, you’re doing great! I get everything, just need a bit more talking practice myself." },
                { type: "received", content: "Well, at least we’re fluent in understanding each other, right?" },
                { type: "sent", content: "Exactly! We’re practically language ninjas, just need to level up the speaking part!" },
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
