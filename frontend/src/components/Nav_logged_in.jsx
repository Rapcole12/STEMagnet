import React from "react";
import { Link } from "react-router-dom";
import defaultpic from "../assets/defaultpic.png";
import inboxicon from "../assets/inboxicon.png";

const Nav = () => {
    const profileImageUrl = defaultpic;
    const inboxImageUrl = inboxicon;
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');

  return (
    <nav className="bg-white py-4 border-b border-black">
      <div className="container mx-auto flex justify-between items-center ">
        <ul className="flex space-x-24 ml-8">
          <li>
            <Link to = {`/ProfileCarousel?userId=${userId}`}>Match</Link>
          </li>
          <li>
            <Link to={`/quotes?userId=${userId}`}>Quotes</Link>
          </li>
          <li>
            <Link to={`/aboutus?userId=${userId}`}>About Us</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-7">
        <div className="relative overflow-hidden h-7 w-7">
            <a href={`/inbox?userId=${userId}`}>
            <img
              src={inboxImageUrl}
              alt="Inbox"
              className="h-full w-full object-cover"
            />
            </a>
          </div>
          <div className="relative overflow-hidden rounded-full h-10 w-10">
            <a href={`/menteeProfile?userId=${userId}`}>
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
