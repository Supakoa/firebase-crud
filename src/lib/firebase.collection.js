import { collection } from "firebase/firestore";
import { dbStore } from "./firebase.init";

export const postsCollectionRef = collection(dbStore, "posts");
