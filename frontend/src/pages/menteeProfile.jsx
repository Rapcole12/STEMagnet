import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Nav_logged_in from "../components/Nav_logged_in";
import rapcolepic from "../assets/rapcole.jpeg";

function SignUp() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [UserType, setUserType] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [degree, setDegree] = useState("");
  const [experience, setExperience] = useState("");
  const [profilePicture, setProfilePicture] = useState(""); // Store image URL or data here
  const [bio, setBio] = useState("");

  const handleData = () => {
    const data = {
      FirstName,
      LastName,
      Email,
      Password,
      UserType,
      gender,
      age,
      dob,
      pronouns,
      degree,
      experience,
      profilePicture,
      bio,
    };
    // Send data to your backend or perform any desired actions
  };

  return (
    <main className="">
      <div>
        <Nav_logged_in/>
      </div>
      <header>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-[#FFFFFF] w-[1/5] mx">
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden rounded-full h-36 w-36 mt-4">
                <img
                  src={rapcolepic}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[#333333] font-semibold mt-2">Raphael Rodriguez</p>
              <p className="text-[#666666] text-[12px]">Mentee</p>

              <div className="flex flex-col mt-4">
            <label htmlFor="bio" className="text-[12px] mb-1">
              Bio
            </label>
            <textarea
              className="border border-black text-[14px] font-semibold p-2 rounded-xl"
              onChange={(e) => setBio(e.target.value)}
              name="bio"
              id="bio"
              rows={4} // Specify the number of rows
              />
              </div>
            </div>
          </div>


          <div className="bg-white-500 gap-8">
            <h1 className="text-[20px] ml-4 mt-2 font-semibold text-[#333333]">
              Mentee Profile Page
            </h1>

            <p className="ml-4 text-[12px] text-[#666666]"></p>
            <div className="max-w-[320px]">
              <div className="flex flex-col">
                <p className="mt-4 text-[12px] mb-1">First Name</p>
                <input
                  className="border border-black text-[14px] font-semibold p-2 rounded-xl"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  id="firstName"
                />
              </div>

              <div className="flex flex-col mt-4">
                <p className="text-[12px] mb-1">Last Name</p>
                <input
                  className="border border-black text-[14px] font-semibold p-2 rounded-xl"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                  id="lastName"
                />
              </div>

              <div className="flex flex-col">
                <p className="mt-4 text-[12px] mb-1">Date of Birth</p>
                <input
                  className="border border-black text-[14px] font-semibold p-2 rounded-xl"
                  type="date"
                  onChange={(e) => setDob(e.target.value)}
                  name="dob"
                  id="dob"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col">
                  <label htmlFor="gender" className="text-[12px] mb-1">
                    Gender
                  </label>
                  <input
                    className="border border-black text-[14px] font-semibold p-2 rounded-xl"
                    type="text"
                    onChange={(e) => setGender(e.target.value)}
                    name="gender"
                    id="gender"
                    maxLength={50} // limit the input length
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="age" className="text-[12px] mb-1">
                    Age
                  </label>
                  <input
                    className="border border-black text-[14px] font-semibold p-2 rounded-xl"
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    name="age"
                    id="age"
                    min={0}
                    max={99}
                  />
                </div>
              </div>
            </div>

            {/* Add more fields here */}
            {/* Pronouns, Degree, Experience, etc. */}
          </div>
        </div>
      </header>
      <button onClick={handleData}>Submit</button>
    </main>
  );
}

export default SignUp;
