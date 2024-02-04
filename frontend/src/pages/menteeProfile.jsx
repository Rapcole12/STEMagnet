import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Nav_logged_in from "../components/Nav_logged_in";
import defaultpic from "../assets/defaultpic.png";
import axios from "axios"

function MenteeProfile() {
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

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');

  function getCurrentData() {

    axios.get(`http://localhost:3000/SignIn/getUser/${userId}`)
    .then(response => {
      const userData = response.data.user
      setFirstName(userData.FirstName)
      setLastName(userData.LastName)
      setGender(userData.Gender)
      setAge(userData.Age)
      setBio(userData.AboutMe)
      setUserType(userData.TypeOfUser)
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    })

  }

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

  getCurrentData()
  return (
    <main className="bg-gradient-to-r from-purple-400 to-violet-800 w-full h-screen">
      <getCurrentData />
      <div>
        <Nav_logged_in/>
      </div>
      <div class="mr-9">
        <div className="shadow-lg bg-white rounded-lg grid grid-cols-2 gap-4 w-full h-[580px] border border-black ml-4 mt-4 mr-4 ">
          <div className="w-2/3 mx">
            <div className="flex flex-col items-center">
              <div className="relative overflow-hidden rounded-full h-36 w-36 mt-4">
                <img
                  src={defaultpic}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-[#333333] font-semibold mt-2">{FirstName + ' ' + LastName}</p>
              <p className="text-[#666666] text-[12px]">{UserType}</p>

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
              placeholder={bio}
              />
              </div>
            </div>
          </div>


          <div className="bg-white-500 gap-8 mr-20">
            <h1 className="text-[20px] mx-auto mt-2 font-semibold text-[#333333]">
              Profile Page
            </h1>

            <p className="ml-4 text-[12px] text-[#666666]"></p>
            <div className="max-w-[320px]">
              <div className="flex flex-col">
                <p className="mt-4 text-[12px] mb-1">First Name</p>
                <input
                  className="placeholder-gray raph border border-black text-[14px] font-semibold p-2 rounded-xl"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  id="firstName"
                  placeholder={FirstName}
                />
              </div>

              <div className="flex flex-col mt-4">
                <p className="text-[12px] mb-1">Last Name</p>
                <input
                  className="placeholder-gray border border-black text-[14px] font-semibold p-2 rounded-xl"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                  id="lastName"
                  placeholder={LastName}
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

              <div className="placeholder-gray grid grid-cols-2 gap-4 mt-4">
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
                    placeholder={gender}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="age" className="text-[12px] mb-1">
                    Age
                  </label>
                  <input
                    className="placeholder-gray border border-black text-[14px] font-semibold p-2 rounded-xl"
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    name="age"
                    id="age"
                    min={0}
                    max={99}
                    placeholder={age}
                  />
                  
                </div>
                
              </div>
              <div class="mt-4 mx-auto ">
              <button class="border border-black mt-4 bg-[#C79CFC] hover:bg-[#E0D9F1] text-white font-bold py-2 px-4 rounded-full w-full" onClick={handleData}>
                Submit
              </button>
              </div>

            </div>
            {/* Add more fields here */}
            {/* Pronouns, Degree, Experience, etc. */}
          </div>
        </div>
        </div>
      
    </main>
  );
}

export default MenteeProfile;
