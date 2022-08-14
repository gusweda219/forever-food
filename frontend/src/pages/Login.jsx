import { useState } from "react";
import { login } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };
  return (
    <form
      className="flex flex-col max-w-[400px] mx-auto my-10 px-5 py-3"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-medium">Login</h3>

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
        Not registered yet?{" "}
        <Link to="/signup" className="text-primary font-medium">
          Create an account
        </Link>
      </p>

      <button className="bg-primary py-2 my-4 text-white rounded-md">
        Login
      </button>
      {error && (
        <div className="p-2 border border-[#e7195a] rounded-md text-[#e7195a]">
          {error}
        </div>
      )}
    </form>
  );
};

export default Login;
