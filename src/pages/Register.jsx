import { LuImagePlus } from "react-icons/lu";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import {
  registerUserToFirebase,
  setUserToFirebase,
  updateProfileImageToFirebase,
  updateUserProfileToFirebase,
} from "../Firebase/actions";
import { handleFirebaseError } from "../Firebase/errorHandle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpin from "../components/shared/LoadingSpin";

const Register = () => {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const user = await registerUserToFirebase(email, password);

      if (!user) return;

      const photoURL = await updateProfileImageToFirebase(file, user.uid);
      await updateUserProfileToFirebase({
        displayName,
        photoURL,
      });
      await setUserToFirebase(user.uid, {
        uid: user.uid,
        displayName,
        email,
        photoURL,
      });

      navigate("/");
      setIsPending(false);
    } catch (error) {
      handleFirebaseError(error);
    }
  };

  return (
    <div className="relative bg-sky-200 min-h-screen flex items-center justify-center">
      {isPending && <LoadingSpin className="absolute" />}
      <div className="bg-white py-5 px-16 rounded-lg flex flex-col gap-4 items-center">
        <h1 className="text-neutral-600 font-bold text-4xl">Logo</h1>
        <h4 className="text-neutral-600 text-lg">Register</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input placeholder="display name" type="text" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />

          <input id="file" className="hidden" type="file" />
          <label
            htmlFor="file"
            className="flex items-center space-x-4 cursor-pointer p-4 text-sky-600/60 hover:brightness-150 duration-150"
          >
            <LuImagePlus size={48} />
            <span>Update image</span>
          </label>
          <Button
            className="bg-sky-600/80 disabled:bg-slate-300"
            text="Sign Up"
            disabled={isPending}
          />
        </form>
        <p className="mt-2 text-neutral-600">
          You do have an account?{" "}
          <Link className="text-sky-300 hover:text-sky-800 duration-150">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
