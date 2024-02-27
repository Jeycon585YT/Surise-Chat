import { LuImagePlus } from "react-icons/lu";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";

const Register = () => {
  return (
    <div className="bg-sky-200 min-h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-16 rounded-lg flex flex-col gap-4 items-center">
        <h1 className="text-neutral-600 font-bold text-4xl">Logo</h1>
        <h4 className="text-neutral-600 text-lg">Register</h4>
        <form className="flex flex-col gap-4">
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
          <Button className="bg-sky-600/80" text="Sign Up" />
        </form>
        <p className="mt-2 text-neutral-600">You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
