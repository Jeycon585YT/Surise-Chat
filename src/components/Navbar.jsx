import { logOutFromFirebase } from "../Firebase/actions";
import { useSelector } from "react-redux";
import photo from "../assets/images/defaultPhoto.jpg";
import Button from "./shared/Button";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  const handleLogoutClick = () => {
    logOutFromFirebase();
  };

  return (
    <div className="flex items-center bg-black/40 rounded-lg rounded-r-none h-20 p-2 justify-between text-slate-50">
      <span className="font-black text-xl">Logo</span>
      <div className="flex items-center gap-2">
        <img
          className="bg-slate-50 h-6 w-6 rounded-full object-cover"
          src={user?.photoURL || photo}
          alt="profile image"
        />
        <span className="">{user?.displayName}</span>
        <Button
          className="bg-amber-950 text-sm font-medium"
          text="Logout"
          onClick={handleLogoutClick}
        />
      </div>
    </div>
  );
};

export default Navbar;
