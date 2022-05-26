import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import environment from "../environments/environment";

const app = initializeApp(environment.FIREBASE_CONFIG);

export const dbStore = getFirestore(app);
