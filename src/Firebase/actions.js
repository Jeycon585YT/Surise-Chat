import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "./config";
import { handleFirebaseError } from "./errorHandle";
import toast from "react-hot-toast";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

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

export const updateUserProfileToFirebase = async (...data) => {
  try {
    await updateProfile(auth.currentUser, data);
    return true;
  } catch (error) {
    handleFirebaseError(error);
    return false;
  }
};
