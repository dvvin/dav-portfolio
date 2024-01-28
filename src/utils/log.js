import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBp-bUOEBItQ0ll7v74ZBezHI3RKuhvV7U",
  authDomain: "davportfolio-52f19.firebaseapp.com",
  projectId: "davportfolio-52f19",
  storageBucket: "davportfolio-52f19.appspot.com",
  messagingSenderId: "742818917122",
  appId: "1:742818917122:web:d628fd958ce8e696c5301b",
  measurementId: "G-KYPMHL2HPR"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
