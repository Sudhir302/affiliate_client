import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="container">
            <div className="navbar">
                <h1 className="logo nav-child">BAZZAR</h1>
                <h2 className="nav-child ">Admin Page</h2>
                <Link to= '/' className="internal-link logo nav-child" >Shop</Link>
            </div>
            <form onSubmit={defaultHandler} className="form">
                <input type="text" name="username" id="username" value={username} onChange={handleUsername} className="productForm-child" required />
                <input type="password" name="password" id="password" value={password} onChange={handlePassword} className="productForm-child"  required />
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Login;