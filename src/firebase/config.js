import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "{your api key}",
  authDomain: "stylehub-5d2a5.firebaseapp.com",
  projectId: "stylehub-5d2a5",
  storageBucket: "stylehub-5d2a5.appspot.com",
  messagingSenderId: "7749362425",
  appId: "{your app-id}"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
