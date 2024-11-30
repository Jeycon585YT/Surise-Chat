import { logOutFromFirebase } from "../Firebase/actions";
import { useSelector } from "react-redux";
import photo from "../assets/images/defaultPhoto.jpg";
import Button from "./shared/Button";
import { resetChatOnRedux } from "../redux/chat/utils";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const handleLogoutClick = async () => {
    await logOutFromFirebase();
    resetChatOnRedux();
  };

  return (
    <div className="max-sm:hidden flex items-center bg-gradient-to-r from-purple-900 via-pink-700 to-orange-600 h-20 px-4 justify-between text-white shadow-lg rounded-b-md">
      
        <img
          src={'/public/logoPD.png'}
          alt="Logo"
          className="h-16 w-17 object-contain mr-2" // Ajusta el tamaño de tu logo
        />
      
      <div className="flex items-center gap-4">
        <img
          className="bg-gradient-to-r from-pink-500 to-yellow-500 h-10 w-10 rounded-full object-cover border-2 border-pink-400 shadow-md"
          src={user?.photoURL || photo}
          alt="profile image"
        />
        <span className="text-pink-200 font-semibold">{user?.displayName}</span>
        <Button
          className="bg-gradient-to-r from-red-500 via-orange-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg transition duration-300 ease-in-out"
          text="Cerrar sesión"
          onClick={handleLogoutClick}
        />
      </div>
    </div>
  );
};

export default Navbar;

