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
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      // use location emoji
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
    // {
    //   link: 'https://andy8647.com/andy.pdf',
    //   icon: 'fa fa-user-circle',
    //   label: 'resume',
    // },
    // {
    //   link: 'https://instagram.com/andy_lgc?igshid=YmMyMTA2M2Y=',
    //   icon: 'fa fa-instagram',
    //   label: 'instagram',
    // },
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
    // {
    //   link: 'https://twitter.com/Andy8647L',
    //   icon: 'fa fa-twitter',
    //   label: 'twitter',
    // },
    // {
    //   link: 'https://500px.com/p/andy8647lgc?view=photos',
    //   icon: 'fa fa-500px',
    //   label: '500px',
    // },
  ],

  bio: "Hello! I'm Davin Davila. I'm a full stack developer with an interest in learning algorithms. I graduated from the University of Texas Rio Grande Valley with a major in Computer Science. I enjoy building websites, software, and studying the implementation of data structures and algorithms.",

  skills: {
    languages: ['TypeScript', 'JavaScript', 'C++', 'Java', 'Rust', 'Ruby', 'HTML/CSS'],

    frameworks: [
      'React',
      'Express.js',
      'Node.js',
      'Bootstrap',
      'Ruby on Rails',
      'Tailwind CSS'
    ],
    databases: ['SQLite', 'PostgreSQL', 'Sequelize'],

    cloudServices: ['Firebase', 'Netlify', 'Render'],

    tools: [
      'Git',
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
    // This is where your portfolio projects will be detailed
    {
      title: 'Open Source React Portfolio Template',
      live: 'https://andy8647.com', //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/Andy8647/react-portfolio-template', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://andy8647.com/website.jpg',
    },
    {
      title: 'CryptoGoGo - Online Cryptocurrency Community and Trading platform',
      live: null, //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: 'https://github.com/Andy8647/CryptoGoGo', // this should be a link to the **repository** of the project, where the code is hosted.
      image: 'https://i.ibb.co/6BsWs6f/01.jpg',
    },
    {
      title: 'Dynrank.js - High-performance dynamic bar chart visualization library',
      live: null,
      source: 'https://github.com/Andy8647/dynrank',
      image: 'https://i.ibb.co/HFkMKtH/02.jpg',
    },
  ],
};
