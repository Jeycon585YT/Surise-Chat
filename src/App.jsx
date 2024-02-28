import Home from "./pages/Home";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster />
      <Register />
      {/* <Home /> */}
    </>
  );
};

export default App;
