import { handleRegister } from "../utils/resource";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();


const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim() && email.trim()) {
        handleRegister(email, username, password, navigate);
        setPassword("");
        setUsername("");
        setEmail("");
    }
};

export default Signup