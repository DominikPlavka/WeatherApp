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
        <div>
            {!user && (
                <div className="nav-container">
                    <div>
                        <ul>
                            <li><a className="linkedin" href="https://www.linkedin.com/in/dominik-plavka-0411549a/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin />&nbsp;MyProfile</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/signup">SignUp</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>PLEASE LOGIN</p>
                    </div>
                </div>
            )}
            {user && (
                <div className="nav-container">
                    <div>
                        <ul>
                            <li>
                                <a className="linkedin" href="https://www.linkedin.com/in/dominik-plavka-0411549a/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin />&nbsp;MyProfile</a>
                            </li>
                        </ul>
                    </div>
                    <div className="user-logout-container">
                        <p>{user.email}</p>
                        <button className="logout" onClick={handleClick}>Logout</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;