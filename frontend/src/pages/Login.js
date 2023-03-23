import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import Heading from "../components/Heading";
import Video from "../components/Video";
import { AiOutlineWarning } from "react-icons/ai";
import "./Login&Logout.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <Heading heading="2" text="Login" />
            <label>Email:</label>
            <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
            />
            <label>Password:</label>
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            {error && <div className="error"><AiOutlineWarning/>&nbsp;{error}</div>}
            <button className="submit-form" disabled={isLoading} type="submit">Login</button>
            <Video conditions='Rain' />
        </form>

    )
}

export default Login;