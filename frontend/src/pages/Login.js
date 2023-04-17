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
        <div className="main-container">
            <Heading heading="1" text="Welcome to Search Weather App" />
            <form className="login" onSubmit={handleSubmit}>
                <Heading heading="2" text="Login" />
                <label>Email:</label>
                <input className="form-input"
                    type="text"
                    placeholder="test@test.sk"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label>Password:</label>
                <input className="form-input"
                    placeholder="Test123!"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                {error &&
                    <div className="error"><AiOutlineWarning />&nbsp;{error}</div>}
                <p className="info">Don't have an accout? Create <a href="/signup"><u>one for free</u></a>!</p>
                <p className="dummy">&#40;Or you can use following login: test@test.sk and password: Test123!&#41;</p>
                <button className="submit-form" disabled={isLoading} type="submit">Login</button>
                <Video conditions='Rain' />
            </form>
        </div>

    )
}

export default Login;