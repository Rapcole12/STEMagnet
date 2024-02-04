import React from "react";
import { Link } from "react-router-dom";
import rapcolepic from "../assets/rapcole.jpeg";
import inboxicon from "../assets/inboxicon.png";

const Nav = () => {
    const profileImageUrl = rapcolepic;
    const inboxImageUrl = inboxicon;

  return (
    <nav className="bg-white py-4 border-b border-black">
      <div className="container mx-auto flex justify-between items-center ">
        <ul className="flex space-x-24 ml-8">
          <li>
            <Link to="/match">Match</Link>
          </li>
          <li>
            <Link to="/quotes">Quotes</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-7">
        <div className="relative overflow-hidden h-7 w-7">
            <a href="/inbox">
            <img
              src={inboxImageUrl}
              alt="Inbox"
              className="h-full w-full object-cover"
            />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-full h-10 w-10">
            <a href="/menteeProfile">
            <img
              src={profileImageUrl}
              alt="Profile"
              className="h-full w-full object-cover"
            />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
