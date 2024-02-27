import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import { handleFirebaseError } from "./errorHandle";
import toast from "react-hot-toast";

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
