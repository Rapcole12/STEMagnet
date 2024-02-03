import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className="text-[#000000] py-1 bg-white rounded w-full">
        <ul className = "flex justify-between">
            <div>
                
            </div>
            <div className = "flex justify-right">
                <li>
                    <Link to="/SignIn">Log In</Link>
                </li>
                <li>
                    <Link to="/SignUp">Sign Up</Link>
                </li>
            </div>
        </ul>
    </div>
  )
}

export default Nav
