import { IoSearchCircle } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="flex items-center bg-primary rounded-lg mt-3 ml-3 mr-3 bg-base-200">
      <input
        type="text"
        placeholder="Buscar"
        className="flex-grow p-2 text-lg h-7 w-70 border-none outline-none rounded-lg"
      />
      <IoSearchCircle className="text-3xl text-white ml-2" />
    </div>
  );
};

export default SearchInput;
