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
    <main className="">
         <header>
                <div class="grid grid-cols-2">

                    <div class="bg-[#7382E7] w-[5/9] mx">
                        {/* Insert Image here*/}
                    </div>   

                    <div class="bg-white-500">
                        <h1 class="text-[20px] ml-4 mt-2 font-semibold text-[#333333]">
                            Sign Up
                        </h1>

                     <p class="ml-4 text-[12px] text-[#666666]">
                       Sign up for Free Today! 
                    </p>

                    <div class="grid grid-cols-2">
                        <div>
                            <p class="mt-4 text-[12px] mb-1">
                                First Name       
                            </p>
                            <input
                            className="border border-black text-[14px] font-semibold ml-2 w-[160px] h-[40px] rounded-xl"
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            name="firstName"
                            id="firstName"
                            />
                        </div>
                        <div>
                            test
                        </div>
                    </div>
                        
                    </div>
                    
                </div>
         </header>
    </main>
  );
}

export default SignUp;
