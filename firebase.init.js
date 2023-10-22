import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const firebaseAuthInit = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthInit;