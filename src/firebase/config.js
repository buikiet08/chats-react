import { initializeApp } from "firebase/app";
import { getAuth,FacebookAuthProvider,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBPpBOJnclsEvWZTwAgCNJSscnTXDHK8_8",
  authDomain: "chat-app-8274a.firebaseapp.com",
  projectId: "chat-app-8274a",
  storageBucket: "chat-app-8274a.appspot.com",
  messagingSenderId: "317571436285",
  appId: "1:317571436285:web:91a95ddef36585361e7894",
  measurementId: "G-SNL22DFESN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const provider = new FacebookAuthProvider();
const providerGg = new GoogleAuthProvider();
export {auth,db, provider, providerGg}