import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";
import { SiCodechef } from "react-icons/si";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto flex justify-between px-5 py-3">
        <Link className="flex items-center text-primary" to="/">
          <h1 className="font-bold text-xl mr-2">Forever Food</h1>
          <SiCodechef size={24} />
        </Link>
        <nav>
          {user && (
            <div>
              <span className="hidden md:inline text-sm mr-2">
                {user.email}
              </span>
              <button
                onClick={() => dispatch(logout())}
                className="border-2 border-primary py-1 px-2 rounded-md text-primary"
              >
                Logout
              </button>
            </div>
          )}
          {/* <div>
            <Link to="/login" className="mr-3">
              Login
            </Link>
            <Link to="/signup">Signup</Link>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
