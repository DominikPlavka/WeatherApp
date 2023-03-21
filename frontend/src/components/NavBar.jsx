import "./NavBar.css";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

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
                    <li><a href='https://github.com/'>Home</a></li>
                    <li><a href='https://github.com/'>Home2</a></li>
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