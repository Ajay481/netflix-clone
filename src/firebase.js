import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbRKHy8X8cfvSfciGfiW_SdBEfqC6ezao",
  authDomain: "netflix-clone-b6959.firebaseapp.com",
  projectId: "netflix-clone-b6959",
  storageBucket: "netflix-clone-b6959.appspot.com",
  messagingSenderId: "371092828925",
  appId: "1:371092828925:web:6908af24d6a9065870c494",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
