import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCVU7k6MHoEooa9Mmf3_oJ9amg8i9cO7zQ",
    authDomain: "whatsapp-web-2c2ab.firebaseapp.com",
    projectId: "whatsapp-web-2c2ab",
    storageBucket: "whatsapp-web-2c2ab.appspot.com",
    messagingSenderId: "22956606605",
    appId: "1:22956606605:web:9a7d699949fa6176edcec4",
    measurementId: "G-17T7DTF0JF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export  { auth, provider };
  export default db;