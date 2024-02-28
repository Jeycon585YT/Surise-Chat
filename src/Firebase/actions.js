import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "./config";
import { handleFirebaseError } from "./errorHandle";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { setIsLoadingToRedux, setUserToRedux } from "../redux/auth/utils";

export const registerUserToFirebase = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    toast.success("You have successfully registered!");

    return userCredential?.user;
  } catch (error) {
    handleFirebaseError(error);
    return false;
  }
};

export const updateProfileImageToFirebase = async (file, uid) => {
  if (!file) return null;
  try {
    const storageRef = ref(storage, "images/" + uid);

    const snapshot = await uploadBytes(storageRef, file);
    const photoURL = await getDownloadURL(snapshot.ref);
    return photoURL;
  } catch (error) {
    handleFirebaseError(error);
    return false;
  }
};

export const updateUserProfileToFirebase = async (data) => {
  try {
    await updateProfile(auth.currentUser, data);

    return true;
  } catch (error) {
    handleFirebaseError(error);
    return false;
  }
};

export const setUserToFirebase = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data);
    await setDoc(doc(db, "userChats", uid), {});
    setUserToRedux(data);
  } catch (error) {
    handleFirebaseError(error);
  }
};

onAuthStateChanged(auth, (user) => {
  if (!user) {
    setUserToRedux(undefined);
  } else {
    const { uid, displayName, email, photoURL } = user;
    setUserToRedux({ uid, displayName, email, photoURL });
  }

  setIsLoadingToRedux(false);
});

export const loginToFirebase = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    handleFirebaseError(error);
    return false;
  }
};

export const logOutFromFirebase = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    handleFirebaseError(error);
    return false;
  }
};
