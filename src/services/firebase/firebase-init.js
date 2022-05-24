import { initializeApp } from "firebase/app";
import environment from "../../environments/environment";

export const appInit = initializeApp(environment.FIREBASE_CONFIG);
