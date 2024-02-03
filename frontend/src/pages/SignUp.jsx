import React, {useState} from "react";
import { Link } from "react-router-dom";

function SignUp() {

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [UserType, setUserType] = useState('')

  const handleData = () => {

    const data = {
        FirstName,
        LastName, 
        Email, 
        Password, 
        UserType
    }

  }



  return (
    <main className="grid grid-cols-2 w-full h-screen">

                    <div class="bg-[#7382E7] w-[5/9] mx">
                        {/* Insert Image here*/}
                    </div>   

                    <div class="bg-white-500">
                        <h1 class="text-[20px] ml-8 mt-2 font-semibold text-[#333333]">
                            Sign Up
                        </h1>

                     <p class="pl-8 text-[12px] text-[#666666]">
                       Sign up for Free Today! 
                    </p>

                    <div class="grid grid-cols-2 gap-4">
                        <div class="ml-8">
                            <p class="pt-4 text-[12px] pb-1">
                                First Name       
                            </p>
                            <input
                            className=" pl-2 border border-black text-[14px] font-semibold w-full h-[40px] rounded-xl"
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            name="firstName"
                            id="firstName"
                            />
                        </div>
                        
                        <div class="mr-8">
                        <p class="mt-4 text-[12px] mb-1">
                                Last Name       
                            </p>
                            <input
                            className="pl-2 border border-black text-[14px] font-semibold w-full h-[40px] rounded-xl"
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            name="firstName"
                            id="firstName"
                            />
                        </div>
                        
                        
                        <div class="ml-8">
                            <p class="mt-4 text-[12px] mb-1">
                                    Email       
                                </p>
                                <input
                                className="pl-2 border border-black text-[14px] font-semibold w-full h-[40px] rounded-xl"
                                type="text"
                                onChange={(e) => setEmail(e.target.value)}
                                name="firstName"
                                id="firstName"
                                />
                        </div>
                        
                        <div class="mr-8">
                            <p class="mt-4 text-[12px] mb-1">
                                    Password       
                                </p>
                                <input
                                className="pl-2 border border-black text-[14px] font-semibold w-full h-[40px] rounded-xl"
                                type="text"
                                onChange={(e) => setPassword(e.target.value)}
                                name="firstName"
                                id="firstName"
                                />
                        </div>

                        <label className="inline-flex items-center ml-8">
                            <input
                            type="radio"
                            className="form-radio h-4 w-4"
                            name="accountType"
                            onChange={(e) => setUserType(e.target.value)}
                            value="businessOwner"
                            />
                            <span className="ml-2 mr-5 text-[12px]">Mentee</span>
                        </label>
                        
                        <label className="inline-flex items-center mr-8">
                            <input
                            type="radio"
                            className="form-radio h-4 w-4"
                            name="accountType"
                            onChange={(e) => setUserType(e.target.value)}
                            value="client"
                            />
                            <span className="ml-2 text-[12px]">Mentor</span>
                        </label>
                    </div>

                    
                        

                        

                    <div class="sm:mx-auto flex items-center pl-8 pt-20">
                        <input id="default-checkbox" type="checkbox" value="" class="w-3 h-3 rounded "></input>
                        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-black-300 text-[8px]">Agree to our <div class="underline inline-block">Terms of use </div> and <div class="inline-block underline"> Privacy Policy </div></label>
                    </div>
                    <div class="sm:mx-auto flex items-center mb-4 pl-8">
                        <input id="default-checkbox" type="checkbox" value="" class="w-3 h-3 rounded "></input>
                        <label for="default-checkbox" class="ms-2 text-sm font-medium dark:text-black-300 text-[8px]">Subscribe to our monthly newsletter</label>
                    </div>
                    <div className="pl-8">
                        <li className="sm:mx-auto items-center hover:bg-[#E0D9F1] w-[120px] h-[38px] flex bg-[#C79CFC] font-semibold rounded-full border border-black">
                            <button className="mx-auto block text-black" onClick={handleData}>
                            Sign Up
                            </button>
                        </li>
                    </div>

                    </div>        
    </main>
  );
}

export default SignUp;
