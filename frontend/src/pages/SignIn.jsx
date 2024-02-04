import React, {useState} from "react";
import NavBar from '../components/Nav'
import StemMagnetTransparent from "../assets/stemagentTransparent.png"

function SignIn() {

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const handleData = () => {

    const data = {
        Email, 
        Password, 
    }

  }



  return (
    <main className="h-screen overflow-y-hidden">
        <div className="sticky top-0 border-b border-black">
            <NavBar/>
        </div>
        <div className="grid grid-cols-2 h-screen">
            <div class="pb-10 bg-gradient-to-r from-purple-400 to-violet-800 flex items-center justify-center">
                <div className = "mx-auto justify-center items-center">
                    <img className = "w-[600px] h-auto"src = {StemMagnetTransparent}/>
                </div>
              
            </div> 

            <div class="bg-white-500">
                <h1 class="text-[20px] ml-8 mt-2 font-semibold text-[#333333]">
                    Log In
                </h1>

                <p class="pl-8 text-[12px] text-[#666666]">
                    Welcome Back! 
                </p>

                <div class="">                       
                        
                    <div class="ml-8 ">
                        <p class="mt-4 text-[12px] mb-1">
                            Email       
                        </p>
                        <input
                            className="pl-2 w-1/2 border border-black text-[14px] font-semibold w-half h-[40px] rounded-xl"
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            name="firstName"
                            id="firstName"
                            />
                    
                        
                        <p class="mt-4 text-[12px] mb-1">
                            Password       
                        </p>
                        <input
                            className="pl-2 w-1/2 border border-black text-[14px] font-semibold h-[40px] rounded-xl"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            name="firstName"
                            id="firstName"
                        />
                        </div>
                    


                </div>

               
                <div className="pt-8 pl-8">
                    <li className="items-center hover:bg-[#E0D9F1] w-[120px] h-[38px] flex bg-[#C79CFC] font-semibold rounded-full border border-black">
                        <button className="mx-auto block text-black" onClick={handleData}>
                            Log In
                        </button>
                    </li>
                </div>

            </div>        
        </div>
    </main>
  );
}

export default SignIn;
