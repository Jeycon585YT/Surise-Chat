export const SearchUserItem = ({ user }) => {
  return (
    <>
      <div className="flex p-2 items-center gap-2 text-white hover:bg-black/40 cursor-pointer">
        <img
          className="w-12 h-12 rounded-full object-cover object-center"
          src={user?.photoURL}
          alt=""
        />
        <div>
          <span className="font-bold text-lg ">{user?.displayName}</span>
        </div>
      </div>
    </>
  );
};
