import React, {useState} from "react";
import NavBar from '../components/Nav'
import StemMagnetTransparent from "../assets/stemagentTransparent.png"
import { useSnackbar } from "notistack"
import axios from 'axios'


function SignUp() {

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [TypeOfUser, setUserType] = useState('')
  const { enqueueSnackbar } = useSnackbar()

  const handleData = async () => {


    if(!FirstName || !LastName || !Email || !Password || !TypeOfUser)
    {
        enqueueSnackbar('All Boxes Must be Filled', {variant: 'info'})
    }
    else
    {

            axios.post('http://localhost:3000/create_user',{
                FirstName: FirstName,
                LastName: LastName,
                Email: Email,
                Password: Password,
                TypeOfUser:TypeOfUser
            }).then((response) => {
                const userId = response.data.user._id; // Adjust this based on your response structure
                enqueueSnackbar('User Created Successfully',  {variant: 'success'})
                window.location.href = `/ProfileSettup?userId=${userId}`;
            }).catch((error) => {
                console.error('Error Creating User', error)
                enqueueSnackbar(`ERROR OCCURED -> ${error}`, {variant: 'error'})
            })

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
                            type="password"
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
                            value="mentee"
                        />
                        <span className="ml-2 mr-5 text-[12px]">Mentee</span>
                    </label>
                        
                    <label className="inline-flex items-center mr-8">
                        <input
                            type="radio"
                            className="form-radio h-4 w-4"
                            name="accountType"
                            onChange={(e) => setUserType(e.target.value)}
                            value="mentor"
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
                        <button to="/SignIn" className="mx-auto block text-black" onClick={handleData}>
                            Sign Up
                        </button>
                    </li>
                </div>

            </div>        
        </div>
    </main>
  );
}

export default SignUp;
