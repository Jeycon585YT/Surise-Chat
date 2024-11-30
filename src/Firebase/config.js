import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAobje0utrbcOsnjTzteM_SWgSBjse8tBo",
  authDomain: "chat-app-30d84.firebaseapp.com",
  projectId: "chat-app-30d84",
  storageBucket: "chat-app-30d84.firebasestorage.app",
  messagingSenderId: "548742911610",
  appId: "1:548742911610:web:57b3f96ab3125cc84e0dc3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
