import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import LoadingSpin from "../components/shared/LoadingSpin";
import { loginToFirebase } from "../Firebase/actions";

const Login = () => {
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      await loginToFirebase(email, password);
      setIsPending(false);
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);

    const email = e.target[0].value;
    const password = e.target[1].value;

    handleLogin(email, password);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-fixed bg-center bg-cover relative"
      style={{
        backgroundImage: "url('/public/backgroundL2.jpg')",
      }}
    >
      {isPending && <LoadingSpin className="absolute" />}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg flex flex-col gap-4 items-center w-96">
        <img
          src="/public/logoPD.png"
          alt="Logo Sunrise Chat"
          style={{ width: "200px", height: "200px" }}  
        />
        <h1 className="text-white font-bold text-3xl mb-3">Inicio de sesión</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
          <Input placeholder="Correo Electrónico" type="email" />
          <Input placeholder="Contraseña" type="password" />
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md"
            text="Iniciar sesión"
          />
        </form>
        <p className="mt-4 text-white text-sm">
          ¿No tienes una cuenta creada?{" "}
          <Link
            to="/register"
            className="text-blue-300 hover:text-blue-400 duration-150"
          >
            Regístrate
          </Link>
        </p>
      </div>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
        <span>Desarrollado por </span>
        <span className="font-bold text-indigo-400">JEDAL Software</span>
        <img
          src="/public/logo.png" 
          alt="Logo JEDAL"
          className="w-7 h-6" 
        />
      </div>
    </div>
  );
};

export default Login;

