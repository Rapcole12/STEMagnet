import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Nav_logged_in from "../components/Nav_logged_in";
import rapcolepic from "../assets/rapcole.jpeg";

function Inbox() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [UserType, setUserType] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [profilePicture, setProfilePicture] = useState(""); // Store image URL or data here
  const [bio, setBio] = useState("");

  const handleData = () => {
    const data = {
      FirstName,
      LastName,
      Email,
      UserType,
      pronouns,
      profilePicture,
      bio,
    };
    // Send data to your backend or perform any desired actions
  };

  return (
    <main className="bg-gradient-to-r from-purple-400 to-violet-800 w-full h-screen">
      <div>
        <Nav_logged_in/>
      </div>
      <div class="mr-9">
        <div className="shadow-lg bg-white rounded-lg grid grid-cols-2 gap-4 w-full h-[580px] border border-black ml-4 mt-4 mr-4 ">
          <div className="w-2/3 mx border-r border-black">
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden rounded-full h-36 w-36 mt-4">
                <img
                  src={rapcolepic}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[#333333] font-semibold mt-2">Raphael Rodriguez</p>
              <p className="text-[#666666] text-[12px]">[User Type]</p>

              <div className="flex flex-col mt-4">
            <label htmlFor="bio" className="text-[12px] mb-1">
              Bio
            </label>
            <textarea
              className="resize-none mb-2 border border-black text-[14px] font-semibold p-2 rounded-xl"
              onChange={(e) => setBio(e.target.value)}
              name="bio"
              id="bio"
              rows={4} // Specify the number of rows
              />
              </div>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white-500 gap-8 mr-20 -ml-20">
            <h1 className="text-[20px] mt-2 font-semibold text-[#333333]">
              Inbox
            </h1>

              <div className="flex flex-col w-full">
                <p className="mt-4 w-full h-[50px] border border-black text-[14px] font-semibold p-2">
                test
                </p>
              </div>
              <div className="flex flex-col w-full">
                <p className="w-full h-[50px] border border-black text-[14px] font-semibold p-2">
                test
                </p>
              </div>

            {/* Add more fields here */}
            {/* Pronouns, Degree, Experience, etc. */}
          </div>
        </div>
        </div>
      
    </main>
  );
}

export default Inbox;
