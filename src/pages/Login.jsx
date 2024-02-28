import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import { loginToFirebase } from "../Firebase/actions";
import { useState } from "react";
import LoadingSpin from "../components/shared/LoadingSpin";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsPending(true);

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      console.log(email, password);
      await loginToFirebase(email, password);
      setIsPending(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-sky-200 min-h-screen flex items-center justify-center">
      {isPending && <LoadingSpin className="absolute" />}
      <div className="bg-white py-5 px-16 rounded-lg flex flex-col gap-4 items-center">
        <h1 className="text-neutral-600 font-bold text-4xl">Logo</h1>
        <h4 className="text-neutral-600 text-lg">Login</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />

          <Button className="bg-sky-600/80" text="Sign In" />
        </form>
        <p className="mt-2 text-neutral-600">
          You don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-sky-300 hover:text-sky-800 duration-150"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
