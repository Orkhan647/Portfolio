import { initializeApp,getApp,getApps} from "firebase/app"
import { getFirestore} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyBMM3pS_U95mA6CWEz67ZH-j1Nt9k7T-sE",
    authDomain: "portfolio-orkhan.firebaseapp.com",
    projectId: "portfolio-orkhan",
    storageBucket: "portfolio-orkhan.appspot.com",
    messagingSenderId: "983226258588",
    appId: "1:983226258588:web:d155cd8b822c8a74a54959",
    measurementId: "G-LBDLNY6TC9"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
  const db= getFirestore(app)

  export { app, db }