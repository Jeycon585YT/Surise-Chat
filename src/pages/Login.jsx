import Input from "../components/shared/Input";
import Button from "../components/shared/Button";

const Login = () => {
  return (
    <div className="bg-sky-200 min-h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-16 rounded-lg flex flex-col gap-4 items-center">
        <h1 className="text-neutral-600 font-bold text-4xl">Logo</h1>
        <h4 className="text-neutral-600 text-lg">Login</h4>
        <form className="flex flex-col gap-4">
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />

          <Button className="bg-sky-600/80" text="Sign In" />
        </form>
        <p className="mt-2 text-neutral-600">
          You don&apos;t have an account? Register
        </p>
      </div>
    </div>
  );
};

export default Login;
