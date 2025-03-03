import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';

function Login(){
    const navigate = useNavigate();
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    const handleUsername = (e)=>{
        setUsername(e.target.value);
    }

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }
    const defaultHandler = async (e)=>{
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/admin/login`, {username, password}, {withCredentials: true})
            alert(response.data.message)
            navigate('/admin/product/list')
        } catch (error) {
            console.error(error)
            if(error.status === 403){
                alert("you are not admin");
                navigate('/');
            }
        }
    }
    return(
        <div className="admin-container">
            <div className="admin-navbar">
                <Link to="/" className="admin-logo">BAZZAR</Link>
                <h2 className="admin-title">Admin Dashboard</h2>
                <Link to='/' className="shop-link">Back to Shop</Link>
            </div>
            
            <div className="login-wrapper">
                <div className="login-box">
                    <h2 className="login-header">Admin Login</h2>
                    <form onSubmit={defaultHandler} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                value={username} 
                                onChange={handleUsername}
                                placeholder="Enter username"
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                value={password} 
                                onChange={handlePassword}
                                placeholder="Enter password"
                                required 
                            />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;