import { GoogleLogin } from '@react-oauth/google'
import {useNavigate} from 'react-router-dom'
import axios from 'axios';

function Googlelogin(){
    const navigate = useNavigate();
    const handleLogin = async(res)=>{
        try {
            const token = res.credential;
            const splitedToken = token.split('.');
            const userDetails = JSON.parse(atob(splitedToken[1]))
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/google/user`, {userDetails}, {withCredentials: true});
            console.log(response)
            return navigate('/');
        } catch (err) {
            console.error(err)
        }
    }
    const faliure = (err)=>{
        console.error(err)
    }
    return(
        <div className='login'>
            <GoogleLogin onSuccess={handleLogin} onError={faliure} />
        </div>
    )
}

export default Googlelogin;