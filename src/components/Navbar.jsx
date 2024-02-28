import { logOutFromFirebase } from "../Firebase/actions";
import Button from "./shared/Button";

const Navbar = () => {
  const handleLogoutClick = () => {
    logOutFromFirebase();
  };

  return (
    <div className="flex items-center bg-black/40 rounded-lg rounded-r-none h-20 p-2 justify-between text-slate-50">
      <span className="font-black text-xl">Logo</span>
      <div className="flex items-center gap-2">
        <img
          className="bg-slate-50 h-6 w-6 rounded-full object-cover"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Muhammad_Ali_NYWTS.jpg/1200px-Muhammad_Ali_NYWTS.jpg"
          alt="profile image"
        />
        <span className="">Muhammed Ali</span>
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
