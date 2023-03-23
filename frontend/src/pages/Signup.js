import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import Video from "../components/Video";
import { AiOutlineWarning } from "react-icons/ai";
import "./Login&Logout.css";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signup, error, isLoading } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, password);
    };

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>

            <label>Email:</label>
            <input className="form-input"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password:</label>
            <input className="form-input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            {error && <div className="error"><AiOutlineWarning />&nbsp;{error}</div>}
            <button className="submit-form" disabled={isLoading} type="submit">Sign Up</button>
            <Video conditions='Rain' />
        </form>
    )
}

export default SignUp;