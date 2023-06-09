import { async } from "@firebase/util";
import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between bg-gray-200 w-full p-4">
      <h1 className="text-center font-bold text-2xl">
        Firebase Google Auth & Context
      </h1>

      {user?.displayName ? (
        <button onClick={handleSignOut}>Log Out</button>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  );
};

export default Navbar;
