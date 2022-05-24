import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth_signIn = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth_signIn, provider);
