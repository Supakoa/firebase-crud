import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "@firebase/database";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import environment from "../../environments/environment";

const app = initializeApp(environment.FIREBASE_CONFIG);

export const db = getDatabase(app);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
