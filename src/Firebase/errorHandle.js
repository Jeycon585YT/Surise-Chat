import toast from "react-hot-toast";

export const handleFirebaseError = (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  let customMessage = "";

  switch (errorCode) {
    case "auth/email-already-in-use":
      customMessage =
        "La dirección de correo electrónico ya está en uso. Utilice una dirección de correo electrónico diferente o intente iniciar sesión.";
      break;

    case "auth/weak-password":
      customMessage = "La contraseña debe tener al menos 6 caracteres.";
      break;

    case "auth/invalid-credential":
      customMessage =
        "Credenciales no válidas. Por favor verifique su información de inicio de sesión e inténtelo nuevamente.";
      break;

    default:
      customMessage = `${errorCode}: ${errorMessage}`;
      break;
  }
  toast.error(customMessage);
  console.error(customMessage);
};
