import firebase from "firebase/app"
import "firebase/auth"
import "firebase/storage"
console.log(process.env);
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })
const app = firebase.initializeApp({
  apiKey: "AIzaSyCCoQJSd1TMNMIocHZa5dnE3Kkm4TiWVYM",

  authDomain: "ecomplainbox-18f35.firebaseapp.com",

  databaseURL: "https://ecomplainbox-18f35-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "ecomplainbox-18f35",

  storageBucket: "ecomplainbox-18f35.appspot.com",

  messagingSenderId: "292970186647",

  appId: "1:292970186647:web:bc051a690f28c60ff866d2",

  measurementId: "G-NQPS2PP61J"
})
const storage = firebase.storage();
export { storage};
export const auth = app.auth()

export default app
