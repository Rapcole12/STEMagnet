import React from "react";
import { Link } from "react-router-dom";
import rapcolepic from "../assets/rapcole.jpeg";

const Nav = () => {
    const profileImageUrl = rapcolepic;

  return (
    <nav className="bg-white py-4 border-b border-black">
      <div className="container mx-auto flex justify-between items-center ">
        <ul className="flex space-x-24">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/match">Match</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <div className="relative overflow-hidden rounded-full h-10 w-10">
            <img
              src={profileImageUrl}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
