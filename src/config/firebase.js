import firebase from "firebase/app";
import "firebase/analytics";

// add firebase config below:
// example of what it will look like:

/*  also note the values for the config properties for 
the example below are not actual values they are just serving as placeholders */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT9wIF40-qK3pLjn9ayNwVLWUQhY3TT0c",
  authDomain: "example-portfolio-351af.firebaseapp.com",
  projectId: "example-portfolio-351af",
  storageBucket: "example-portfolio-351af.appspot.com",
  messagingSenderId: "342356102713",
  appId: "1:342356102713:web:6dfba946f5d6b8674687e8",
  measurementId: "G-ZENNNEK7FP",
};

// initialized firebase application
firebase.initializeApp(firebaseConfig);

//   initialized google analytics
const reactGoogleAnalytics = firebase.analytics();

export { reactGoogleAnalytics };
