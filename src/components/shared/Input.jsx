const Input = ({ placeholder, type }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 text-sm placeholder:text-gray-400"
    />
  );
};

export default Input;
