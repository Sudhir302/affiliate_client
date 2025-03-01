import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Protected({children}){
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const authHandler = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/admin/login`, {withCredentials: true});
                if(response.data.isAuthenticated){
                    setIsAdmin(true)
                }
            } catch (error) {
                console.error(error);
                alert('error');
            }
            finally{
                setLoading(false);
            }
        };
        authHandler();
    }, [])
    if(loading){
        return <div>loading....</div>
    }
    return isAdmin ? children : <Navigate to="/" />
}
export default Protected;