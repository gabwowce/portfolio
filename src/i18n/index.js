// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

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
              title: "Work Experience",
              experiences:{
                experience: {
                  tittle: "Junior Developer",
                  company: "Universalios valdymo sistemos, UAB",
                  startDate: "2024-06-25",
                  endDate: null,
                  employmentType: "Full Time",
                  description:{
                    1: "Working with the user interface of POS systems",
                    2: "Modifying design elements if the original plan requires changes",
                    3: "Collaborating with team members",
                  },
                  skills:{
                    1: "C# .NET",
                    2: "XAML",
                    3: "XML",
                    4: "WPF",
                    5: "HTML/CSS",
                  },
                },
                experience: {
                  tittle: "Planner",
                  company: "Girteka Europe West, UAB",
                  startDate: "2021-10-01",
                  endDate: "2023-09-01",
                  employmentType: "Full Time",
                  description:{
                    1: "Strategically planned cargo flows for efficient coordination",
                    2: "Analyzed supervised vehicle movements",
                    3: "Selected and adjusted optimal transportation options based on evolving circumstances",
                    4: "Collaborated with colleagues to resolve transportation issues",
                  },
                  skills:{
                    1: "Excel",
                    2: "Dynamics AX",
                  },
                },
                experience: {
                  tittle: "Administrator",
                  company: "Jarinta, UAB",
                  startDate: "2021-04-01",
                  endDate: "2021-09-01",
                  employmentType: "Full Time",
                  description:{
                    1: "Electrical network management",
                    2: "Apartment administration",
                    3: "Debt collection",
                    4: "Managed company documentation",
                  },
                  skills:{
                    1: "Excel",
                    2: "Word",
                  },
                },
              },
             
            },
            education: {
              institution: "Vilniaus kolegija",
              degree: "Higher non-university (professional bachelor's degree)",
              fieldOfStudy: "Software Engineering",
              startYear: 2023,
              endYear: 2027, 
            },
            languages: {
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
            projects:{
              project:{
                title: "Library Management App",
                description: "The library management system is designed for managing library data. The system allows tracking of book information, administering debts, and managing borrowers. It includes three modes: administrator, manager, and user, each with different rights and functionalities.",
                tools:{
                  1: "React",
                  2: "CSS/SCSS",
                  3: "ASP.NET Core Web API",
                  4: "MySQL"
                }
              },
              project:{
                title: "Real Estate Website",
                description: "This real estate website is designed to provide users with an intuitive platform for browsing and managing property listings. Built with React and TypeScript, the site features a responsive design using SCSS, ensuring an optimal experience across various devices.",
                tools:{
                  1: "React",
                  2: "TypeScript",
                  3: "SCSS",
                  4: "Responsive Design",
                }
              },
              
            },
          },
          contactPage: {
            title: "Contact Me",
            description: "Fill out the form and I will get back to you.",
          },
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
            description:"Programavimas, o ypač vartotojo sąsajos, yra mano gyvenimo varikliukas. Aš mėgaujuosi kiekviena minute praleista gilinantis į užduotis, ieškant kūrybiškų sprendimų, kuriant ir programuojant. Tikrai daug dirbu ir daug mokausi, gal dėl to, kad noriu tapti šios srities profesionale, bet manau ir dėl to, kad programų kūrimas yra mano top 1 hobis.",
            workExperience: {
              tittle: "Darbo patirtis",
              experiences:{
                experience: {
                  tittle: "Jaunesnioji programuotoja",
                  company: "Universalios valdymo sistemos, UAB",
                  startDate: "2024-06-25",
                  endDate: null,
                  employmentType: "Full Time",
                  description:{
                    1: "Dirbu su POS sistemų vartotojo sąsaja",
                    2: "Keičiu dizaino elementus, jei originalus planas reikalauja pakeitimų",
                    3: "Bendradarbiauju su komandos nariais",
                  },
                  skills:{
                    1: "C# .NET",
                    2: "XAML",
                    3: "XML",
                    4: "WPF",
                    5: "HTML/CSS",
                  },
                },
                experience: {
                  tittle: "Reisų koordinatorė/planuotoja",
                  company: "Girteka Europe West, UAB",
                  startDate: "2021-10-01",
                  endDate: "2023-09-01",
                  employmentType: "Full Time",
                  description:{
                    1: "Krovinių srautų planavimas ir organizavimas, siekiant efektyviai suplanuoti kuruojamų transporto priemonių judėjimą",
                    2: "Tinkamų reisų parinkimas ir jų koregavimas atsižvelgiant į besikeičiančias aplinkybes",
                    3: "Gaunamos informacijos apie transporto priemonių judėjimą sisteminimas ir analizavimas",
                    4: "Bendradarbiavimas su kolegomis sprendžiant krovinio gabenimo metu iškilusias problemas",
                  },
                  skills:{
                    1: "Excel",
                    2: "Dynamics AX",
                  },
                },
                experience: {
                  tittle: "Administratorė",
                  company: "Jarinta, UAB",
                  startDate: "2021-04-01",
                  endDate: "2021-09-01",
                  employmentType: "Full Time",
                  description:{
                    1: "Darbas su įvairiais projektais (elektros tinklas, skolų išieškojimas, daugiabučių administravimas, pažeidimų administravimas, apklausos ir kt.)",
                    2: "El. laiškų, skambučių, socialinių tinklų administravimas, bendravimas su klientais",
                    3: "Įmonės dokumentacijos tvarkymas, raštų, dokumentų rengimas, saugojimas",
                  },
                  skills:{
                    1: "Excel",
                    2: "Word",
                  },
                },
              },
              
            },
            education: {
              institution: "Vilniaus kolegija",
              degree: "Aukštasis neuniversitetinis (profesinis bakalauras)",
              fieldOfStudy: "Programų sistemos",
              startYear: 2023,
              endYear: 2027, 
            },
            languages: {
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
            },
          },
          portfolioPage: {
            title: "Mano Darbai",
            description: "Mano programavimo kelias buvo įvairialypis, apimantis įvairius projektus, kurie tarnavo kaip vertingi mokymosi šaltiniai. Esu sukūrusi įvairias programas, nuo duomenų analitikos projektų iki darbalaukio aplikacijų. Šiame portfelyje pateikiu savo pastaruosius darbus, kurie man labiausiai patinka.",
            projects:{
              project:{
                title: "Bibliotekos valdymo sistema",
                description: "Bibliotekos valdymo sistema skirta bibliotekos duomenų valdymui. Sistema leidžia sekti knygų informaciją, administruoti skolas ir valdyti skolininkus. Ji apima tris režimus: administratoriaus, vadybininko ir naudotojo, kiekvienas iš jų turi skirtingas teises ir funkcionalumą.",
                tools:{
                  1: "React",
                  2: "CSS/SCSS",
                  3: "ASP.NET Core Web API",
                  4: "MySQL"
                }
              },
              project:{
                title: "Nekilnojamojo turto svetainė",
                description: "Ši nekilnojamojo turto svetainė sukurta siekiant suteikti vartotojams intuityvią platformą nekilnojamojo turto sąrašams naršyti ir valdyti. Sukurta naudojant React ir TypeScript, svetainė pasižymi prisitaikančiu dizainu, naudojant SCSS.",
                tools:{
                  1: "React",
                  2: "TypeScript",
                  3: "SCSS",
                  4: "Responsive Design",
                }
              },
            }
            
          },
          contactPage: {
            title: "Susisiekite su Manimi",
            description: "Užpildykite formą ir aš su jumis susisieksiu.",
          },
        },
      },
    },
    lng: "lt", // numatytasis kalbos kodas
    fallbackLng: "en", // jeigu vertimas nerastas, naudoti šią kalbą
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
