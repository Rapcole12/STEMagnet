import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className="text-[#000000] py-4 bg-white w-full">
        <ul className = "flex justify-between">
            <div>

            </div>
            <div className = "flex">
                <div className="pr-4">
                    <li className="border border-black rounded-lg pb-1 pt-1 pr-4 pl-4">
                        <Link to="/SignIn">Log In</Link>
                    </li>
                </div>
                <div className="pr-4">
                    <li className="border border-black bg-black  rounded-lg text-white rounded pb-1 pt-1 pr-3 pl-3">
                        <Link to="/SignUp">Sign Up</Link>
                    </li>
                </div>
    
            </div>
        </ul>
    </div>
  )
}

export default Nav
