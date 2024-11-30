import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  registerUserToFirebase,
  setUserToFirebase,
  updateUserProfileToFirebase,
} from "../Firebase/actions";
import { handleFirebaseError } from "../Firebase/errorHandle";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
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

    try {
      const user = await registerUserToFirebase(email, password);

      if (!user) return;

      await updateUserProfileToFirebase({ displayName });
      await setUserToFirebase(user.uid, {
        uid: user.uid,
        displayName,
        email,
      });

      navigate("/");
      setIsPending(false);
    } catch (error) {
      handleFirebaseError(error);
      setIsPending(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-900 via-indigo-500 to-pink-500 relative"
      style={{
        backgroundImage: "url('/public/backgroundR.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {isPending && <LoadingSpin className="absolute" />}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg flex flex-col gap-4 items-center w-96">
        <img
          src="/public/logoPD.png"
          alt="Logo Sunrise Chat"
          style={{ width: "195px", height: "195px" }}
        />
        <h1 className="text-white font-bold text-3xl mb-2">Registrate</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <Input placeholder="Nombre Completo" type="text" />
          <Input placeholder="Correo Electrónico" type="email" />
          <Input placeholder="Contraseña" type="password" />

          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
            text="Registrarse"
            disabled={isPending}
          />
        </form>
        <p className="mt-4 text-white text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/login"
            className="text-pink-600 hover:text-pink-800 duration-150"
          >
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

