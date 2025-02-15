import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import { useState } from "react";

interface Props {
  placeholder: string;
}
const SearchBar = ({ placeholder }: Props) => {
  const [search, setSearch] = useState("");

  console.log(search);
  return (
    <div className="flex items-center pl-1 bg-white pr-3 rounded-lg shadow-md">
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => setSearch(e.target.value)}
        className="placeholder:text-xs pl-3 px-2 py-0 inset-0 focus-visible:ring-0 ring-0 border-0 shadow-none flex-1"
      />
      <IoSearchOutline size={12} />
    </div>
  );
};

export default SearchBar;
