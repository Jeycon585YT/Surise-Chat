import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export const createUserToFirebase = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential;
  } catch (error) {
    console.log(error);
    return false;
  }
};
