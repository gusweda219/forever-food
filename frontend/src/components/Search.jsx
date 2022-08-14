import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler} className="py-6">
      <div className="flex items-center border border-primary rounded-md p-3">
        <FaSearch className="text-gray-400" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Seach recipes by name, ingredient and etc..."
          className="w-full focus:outline-none px-3"
        />
      </div>
    </form>
  );
};

export default Search;
