import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push } from "firebase/database";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_PID,
  storageBucket: import.meta.env.VITE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.VITE_APPID,
  databaseURL: import.meta.env.VITE_DBURL,
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const userID = v4();
export const date: Date = new Date();
export const reference = ref(database, "chat/");

export const sendMessage = (userName: string, content: string): void => {
  const msg = {
    userID,
    userName,
    date: `${date.getHours()}:${date.getMinutes()}`,
    content,
  };
  set(ref(database, `chat/${push(reference).key}`), msg);
};
