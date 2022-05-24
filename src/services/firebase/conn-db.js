import { getDatabase } from "@firebase/database";

export const db = (init) => getDatabase(init);
