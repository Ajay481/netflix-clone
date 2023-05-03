import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZjJcaxYpqsTArRtTzOmOc3PgdJV1ELiY",
  authDomain: "netflix--project.firebaseapp.com",
  projectId: "netflix--project",
  storageBucket: "netflix--project.appspot.com",
  messagingSenderId: "714911286362",
  appId: "1:714911286362:web:a6089101604ffd4c380463"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
