import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { AiFillLinkedin } from "react-icons/ai";
import "./NavBar.css";

const Navbar = () => {

    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <div className="nav-container">
            <div>
                <ul>
                    <li><a href='https://www.linkedin.com/in/dominik-plavka-0411549a/'><AiFillLinkedin />MyLinkedInProfile</a></li>
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/signup'>SignUp</a></li>
                </ul>
            </div>
            {user && (
                <div>
                    <span>{user.email}</span>
                    <button className="logout" onClick={handleClick}>Logout</button>
                </div>
            )}
            {!user && (
                <span>FOCK YOU</span>
            )}
            
        </div>
    )
}

export default Navbar;