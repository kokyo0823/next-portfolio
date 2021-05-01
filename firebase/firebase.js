import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/f'

const config = {
  apiKey: "AIzaSyBHE_DjJMhb6PwOLfm-RogSTxfY7HIp0xE",
  authDomain: "next-portfolio-b0e16.firebaseapp.com",
  projectId: "next-portfolio-b0e16",
  storageBucket: "next-portfolio-b0e16.appspot.com",
  messagingSenderId: "507375862485",
  appId: "1:507375862485:web:0820891dc37cdd2926585c",
  measurementId: "G-0H228GXKRP"
}
export const firebaseApp = firebase.initializeApp(config);
export const fireFunctions = firebase.functions();

export default firebase;
