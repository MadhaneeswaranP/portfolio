import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Madhaneeswaran P', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Madhaneeswaran P',
  subtitle: 'Junior FullStack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Career-Software-Engineer.png',
  paragraphOne: 'Innovative optimised solution seeker',
  paragraphTwo: 'Excited to be at the deployment phase of my career as a web developer',
  paragraphThree: 'I  am ambitious to be working at your organization.',
  resume: 'https://docs.google.com/document/d/1-LiSVuP8MT94MQEfNrP5u0jjCudZQ4v65Yve0HgMkdo/edit', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Memories Project.png',
    title: 'MEMORIES APPLICATION',
    info: 'This application was developed using React, Node Js, Mongo DB, Material UI, Express framework. You can create pictures,edit and delete it.',
    info2: '',
    url: 'https://memories-client-madhan.netlify.app/',
    repo: 'https://github.com/MadhaneeswaranP/memories-project-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Url Shortener project.png',
    title: 'URL SHORTENER',
    info: 'This application was developed using Node Js, EJS framework, Express, Mongo DB, BootStrap. The application is used to shorten your URL',
    info2: '',
    url: 'https://url-shortener-madhan.herokuapp.com/',
    repo: 'https://github.com/MadhaneeswaranP/url-shortener', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Country data.png',
    title: 'Weather Data Of All Country',
    info: 'This webpage was developed using HTML5, CSS3, JAVASCRIPT. It Shows the weather details of all countries.',
    info2: '',
    url: 'https://madhaneeswaranp.github.io/RestCountry/',
    repo: 'https://github.com/MadhaneeswaranP/RestCountry', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Shopping Cart.png',
    title: 'Shopping Cart',
    info: 'This Webpage was developed using HTML5,CSS3,JAVASCRIPT. This page was developed by using pure javascript without using any Frameworks/Libraries',
    info2: '',
    url: 'https://madhaneeswaranp.github.io/Dom-project/',
    repo: 'https://github.com/MadhaneeswaranP/Dom-project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'madhanrock.rpt@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/madhaneeswaran-p-70218b181/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MadhaneeswaranP',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
