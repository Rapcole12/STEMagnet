import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <header>
        <div className="grid grid-cols-3">
          <div className="bg-[#7382E7] w-[1/6] mx">
            {/* insert Image here */}
            {/* add an image uploader here */}
          </div>

          <div className="bg-white-500">
            <h1 className="text-[20px] ml-4 mt-2 font-semibold text-[#333333]">
              Profile Page
            </h1>

            <p className="ml-4 text-[12px] text-[#666666]"></p>

            <div className="grid grid-cols-2">
              <div>
                <p className="mt-4 text-[12px] mb-1">First Name</p>
                <input
                  className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  id="firstName"
                />
              </div>
              <div>
                <p className="mt-4 text-[12px] mb-1">Last Name</p>
                <input
                  className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                  id="lastName"
                />
              </div>
            </div>


<div className="grid grid-cols-2">
  <div>
    <p className="mt-4 text-[12px] mb-1">Gender</p>
    <input
      className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
      type="text"
      onChange={(e) => setGender(e.target.value)}
      name="gender"
      id="gender"
    />
  </div>
  <div>
    <p className="mt-4 text-[12px] mb-1">Age</p>
    <input
      className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
      type="number"
      onChange={(e) => setAge(e.target.value)}
      name="age"
      id="age"
    />
  </div>
</div>

<div>
  <p className="mt-4 text-[12px] mb-1">Date of Birth (DOB)</p>
  <input
    className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
    type="date"
    onChange={(e) => setDob(e.target.value)}
    name="dob"
    id="dob"
  />
</div>

<div>
  <p className="mt-4 text-[12px] mb-1">Pronouns</p>
  <input
    className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
    type="text"
    onChange={(e) => setPronouns(e.target.value)}
    name="pronouns"
    id="pronouns"
  />
</div>

<div>
  <p className="mt-4 text-[12px] mb-1">Degree</p>
  <input
    className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
    type="text"
    onChange={(e) => setDegree(e.target.value)}
    name="degree"
    id="degree"
  />
</div>

<div>
  <p className="mt-4 text-[12px] mb-1">Experience</p>
  <input
    className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
    type="text"
    onChange={(e) => setExperience(e.target.value)}
    name="experience"
    id="experience"
  />
</div>

<div>
  <p className="mt-4 text-[12px] mb-1">Profile Picture</p>
  {/* You can add an image uploader component here */}
</div>

<div>
  <p className="mt-4 text-[12px] mb-1">Bio</p>
  <textarea
    className="border border-black text-[14px] font-semibold ml-2 w-[400px] h-[100px] rounded-xl"
    onChange={(e) => setBio(e.target.value)}
    name="bio"
    id="bio"
  />
</div>

{/* ... (rest of your code) */}

          </div>
        </div>
      </header>
      <button onClick={handleData}>Submit</button>
    </main>
  );
}

export default SignUp;
