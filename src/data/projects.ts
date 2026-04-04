import { Project } from '../types';
import jobBoard from '../assets/images/job-board.jpg';
import lunchApp from '../assets/images/lunchapp.png';
import universitetas from '../assets/images/universitetaslt.png';
import woof from '../assets/images/WoofLt.png';
import activityGenerator from '../assets/images/RandomActivityGenerator.png';
import porsche from '../assets/images/FirstProject.png';
import onlineShop from '../assets/images/ThirdProject.png';
import numberGuesser from '../assets/images/SecondProject.png';
import portfolio from '../assets/images/FourthProject.png';

export const projects: Project[] = [
  {
    id: 0,
    num: '01',
    title: 'Job Board',
    description:
      'A full-stack job board platform with role-based authentication for employers and candidates. Employers can create, update and delete job posts, while candidates can browse listings and submit applications. Built with an ASP.NET Core Web API backend and a React TypeScript frontend.',
    techStack: ['React', 'TypeScript', 'SCSS', 'ASP.NET Core', 'Docker'],
    liveUrl: 'https://simasdan.github.io/job-board/',
    codeUrl: 'https://github.com/Simasdan/job-board',
    image: jobBoard,
  },
  {
    id: 1,
    num: '02',
    title: 'Lunch App',
    description:
      'A fully responsive lunch application featuring login and registration pages, as well as a meal ordering interface. Data for rendering is sourced from a JSON server. Upon accessing the application, a modal appears providing guidance on how to log in for testing purposes and instructions for using the meal ordering layout. The app addresses various edge cases and was built utilising best practices for code reusability, ensuring a maintainable and scalable codebase.',
    techStack: ['React', 'TypeScript', 'SCSS'],
    liveUrl: 'https://tangerine-brigadeiros-d5c2da.netlify.app/',
    codeUrl: 'https://github.com/Simasdan/Portfolio-projects/tree/main/5-lunch-app',
    image: lunchApp,
  },
  {
    id: 2,
    num: '03',
    title: 'Universitetas.lt',
    description:
      'A full-stack project of an online platform providing diverse information on business creation, offering assistance to both beginners and seasoned entrepreneurs. Built with a React TypeScript frontend and an ASP.NET Core Web API backend, hosted on Microsoft Azure.',
    techStack: ['React', 'TypeScript', 'SCSS', 'ASP.NET Core', 'Azure'],
    liveUrl: 'https://simasdan.github.io/universitetaslt/',
    codeUrl: 'https://github.com/Simasdan/universitetaslt',
    image: universitetas,
  },
  {
    id: 3,
    num: '04',
    title: 'Woof.lt',
    description:
      'A landing page for an online dog grooming platform for Lithuania-based dog groomers and owners. Clean, modern, and fully responsive design focused on clarity and conversion.',
    techStack: ['React', 'TypeScript', 'SCSS'],
    liveUrl: 'https://simasdan.github.io/woof.lt/',
    codeUrl: 'https://github.com/Simasdan/woof.lt',
    image: woof,
  },
  {
    id: 4,
    num: '05',
    title: 'Activity Generator',
    description:
      'A random activity generator fetching data from a JSON server. Fully responsive with a checkbox for filtering accessible activities, a generate button for new activities, and each activity has its own unique colour styling and image based on its category.',
    techStack: ['React', 'TypeScript', 'SCSS'],
    liveUrl: 'https://zippy-selkie-ac1252.netlify.app/',
    codeUrl: 'https://github.com/Simasdan/Portfolio-projects/tree/main/4-random-activity-generator',
    image: activityGenerator,
  },
  {
    id: 5,
    num: '06',
    title: 'Porsche Configurator',
    description:
      'A car configurator featuring several selections, an image slider that dynamically changes colours based on the colour selection, and calculates the total amount in euros based on configurator selections. Transfers to the order page after clicking the Order button.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://preeminent-centaur-a5d51a.netlify.app/',
    codeUrl: 'https://github.com/Simasdan/portfolio-projects/tree/main/1-porsche%20configurator',
    image: porsche,
  },
  {
    id: 6,
    num: '07',
    title: 'React Online Shop',
    description:
      'A concise demonstration of an online shopping platform built with React. Features an interactive Create New Item button, a filter input field, a sorting feature for arranging items, and a delete button with a confirmation dialog before removal.',
    techStack: ['React', 'CSS'],
    liveUrl: 'https://illustrious-axolotl-b964b4.netlify.app/',
    codeUrl: 'https://github.com/Simasdan/portfolio-projects/tree/main/3-react-online-shop',
    image: onlineShop,
  },
  {
    id: 7,
    num: '08',
    title: 'Number Guesser',
    description:
      'A random number guessing game. Upon loading, a random number between 1 and 100 is generated. After entering a guess, the player receives higher or lower hints until correct. A modal then shows how many attempts it took. The generated number is also logged to the console for testing convenience.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://peaceful-chimera-5ddf99.netlify.app/',
    codeUrl: 'https://github.com/Simasdan/portfolio-projects/tree/main/2-random%20number%20guesser',
    image: numberGuesser,
  },
  {
    id: 8,
    num: '09',
    title: 'This Portfolio',
    description:
      'The portfolio website you are currently viewing. Fully responsive for all screen sizes, built with React and TypeScript. Showcases projects, tech stack, certificates, and contact information with a modern light design.',
    techStack: ['React', 'TypeScript', 'SCSS'],
    liveUrl: 'https://simasdan.github.io/portfolio-web/',
    codeUrl: 'https://github.com/Simasdan/portfolio-web-v2',
    image: portfolio,
  },
];
