import self from '../img/self.png';
import { colors } from '../colors/mainGradient';

export const info = {
  firstName: 'Davin',
  lastName: 'Davila',
  initials: 'DD', // the example uses first and last, but feel free to use three or more if you like.
  position: 'a Full Stack Developer',
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],

  miniBio: [
    {
      emoji: '📍',
      text: 'based in McAllen, Texas',
    },
    // {
    //   emoji: '💻',
    //   text: 'Full Stack Developer at commonsku',
    // },
    {
      emoji: '📧',
      text: 'davin0@live.com',
    },
  ],

  socials: [
    {
      link: 'https://davin0.netlify.app/Davin_Davila_Resume_2024.pdf',
      icon: 'fa fa-user-circle',
      label: 'resume',
    },
    {
      link: 'https://github.com/dvvin',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/davin-davila-952291191/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
  ],

  bio: "Hello! I'm Davin Davila. I'm a Full-Stack developer with an interest in web development and designing algorithms. I graduated from the University of Texas Rio Grande Valley with a major in Computer Science. I enjoy building websites, software, and studying the implementation of data structures and algorithms.",

  skills: {
    languages: [
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
      'SQL',
      'C/C++',
      'Java',
      'Python',
      'Rust',
      'Ruby',
    ],

    frameworks: [
      'Next.js',
      'React',
      'Express.js',
      'Node.js',
      'Bootstrap',
      'Tailwind',
      'Ruby on Rails'
    ],
    databases: ['SQLite', 'PostgreSQL', 'MySQL', 'MongoDB', 'Prisma'],

    cloudServices: ['Firebase', 'Netlify', 'Render', 'Vercel'],

    tools: [
      'Git',
      'Linux',
      'npm',
      'yarn',
      'Jira'
    ],
  },

  hobbies: [
    {
      label: 'Video Games',
      emoji: '🎮',
    },
    {
      label: 'Music',
      emoji: '🎸',
    },
    {
      label: 'Anime',
      emoji: '🎞',
    },
    {
      label: 'Coding',
      emoji: '💻',
    },
    {
      label: 'TV Shows',
      emoji: '📺',
    },
  ],

  portfolio: [
    {
      title: 'Vaquero Scheduler',
      live: 'https://vaquero-scheduler.vercel.app', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/dvvin/vaquero-scheduler', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://raw.githubusercontent.com/dvvin/vaquero-scheduler/master/public/example.png',
    },
    {
      title: 'E-Sports Manager',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/dvvin/E-Sports-Manager', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://raw.githubusercontent.com/dvvin/E-Sports-Manager/main/public/homepage.png',
    },
  ],
};
