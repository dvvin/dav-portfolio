# React Portfolio, multiple pages with dark mode

*based on paytonjewell's [react-portfolio-template](https://github.com/paytonjewell/ReactPortfolioTemplate)*

## Features

🌑 Dark Mode Toggler and OS dark mode detection

📱Social Media Presence meta tags

📊 Google Analytics

📖 Multiple Pages (React Router)

📱 Fully Responsive

🎨 Modern Design

---

## Getting started

### prerequisites

- have [Git](https://git-scm.com/) installed on your machine
- have [Node.js](https://nodejs.org/en/download/) installed on your machine
- basic familiarity with your machine's command line
- basic understanding of JSON data outline (arrays of objects basically)

## how to use

- fork the repository and clone locally
- cd into the project and run `npm install` to install dependencies
- once installation is complete, run `npm run start` to get your local copy running in the browser.

## template instructions

### 1. replace the images

- replace `/src/assets/img/self.png`
- replace `/public/favicon.ico`
- replace `/public/website.jpg` (this is the image that shows up when you share the link on social media, you can take a screen shot when the infomation has been filled out)

### 2. Your Information

- edit `assets/info/Info.js` There are some instructions written in the comments there.
- replace `/public/resume.pdf` with your own resume

### 3. Color Scheme

#### Main Gradient

For the main gradient, you can change the colors in `/src/assets/colors/mainGradient.js`:

```js
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
```

#### Particles Background Color

For the particles background color, you can change the colors in `/src/assets/colors/particlesBg.js`
These are the colors I picked from iTerm2's color schemes, but you can use whatever you like.

```js
export const particleBgColors = () => {
  // for dark use atom one dark, for light use CLRS
  const background = (darkMode = false) => (darkMode ? '#0d2538' : '#DCD6C8');
  const particle = (darkMode = false) => (darkMode ? '#c678dd' : '#5C7C8A');
  const links = (darkMode = false) => (darkMode ? '#98c379' : '#E7B669');

  return {
    background,
    particle,
    links,
  };
};
```
### 4. Google Analytics Credentials

- edit `/src/utils/log.js`

```js
// fill with your own google analytics credentials
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};
```
