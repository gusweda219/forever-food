import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../features/user/userSlice";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup({ email, password }));
  };
  return (
    <form
      className="flex flex-col max-w-[400px] mx-auto my-10 px-5 py-3"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-medium">Signup</h3>

      <div className="flex flex-col my-4">
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border border-gray-300 p-2 rounded-md focus:outline-primary mb-2"
        />

        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="border border-gray-300 p-2 rounded-md focus:outline-primary"
        />
      </div>

      <p className="text-xs font-light text-center text-gray-400">
        You already have an account?{" "}
        <Link to="/login" className="text-primary font-medium">
          Login
        </Link>
      </p>

      <button className="bg-primary py-2 my-4 text-white rounded-md">
        Signup
      </button>
    </form>
  );
};

export default Signup;
