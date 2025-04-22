import "../styles/Navbar.css";
import Sameproduct from "./Sameproduct";
import Googlelogin from "./Googlelogin";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Navbar(){
    let [search, setSearch] = useState('')
    let [isActive, setIsActive] = useState(false);

    const toogle = ()=>{
        if(isActive){
            setIsActive(false);
        }
        else{
            setIsActive(true)
        }
    }

    let [category,setCategory] = useState('');
    let [categorisedProduct, setCategorisedProduct] = useState([]);

    let handleCategory = async (e)=>{
        const value = e.target.dataset.value;
        setCategory(value);
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/product/category`, {category: value}, {withCredentials: true});
            setCategorisedProduct(response.data);
            
        } catch (error) {
            console.log(error)
        }
    }

    let searchHandler = (event)=>{
        setSearch(event.target.value)
    }

    const defaultHandler = async (event)=>{
        event.preventDefault();
        if(!search.trim()) return;
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/product/search?q=${search}`, {withCredentials: true});
            setCategorisedProduct(response.data)
        } catch (error) {
            console.log(error)
        }
        setSearch('');
    }
    return(
        <>
             <nav className={`slidebar ${isActive ? "active" : "inactive"}`}>

                    <i className="fa-solid fa-xmark" onClick={toogle}/>

                <ul className="category-list">
                    <li>
                        <button 
                            className="category-btn"
                            data-value="electronics" 
                            onClick={handleCategory}
                        >
                            Electronics
                        </button>
                    </li>
                    <li>
                        <button 
                            className="category-btn"
                            data-value="cosmetics" 
                            onClick={handleCategory}
                        >
                            Beauty Products
                        </button>
                    </li>
                    <li>
                        <button 
                            className="category-btn"
                            data-value="groceries" 
                            onClick={handleCategory}
                        >
                            Groceries
                        </button>
                    </li>
                    <li>
                        <button 
                            className="category-btn"
                            data-value="dairy" 
                            onClick={handleCategory}
                        >
                            Dairy
                        </button>
                    </li>
                </ul>
                <div className="login-container">
                    <Googlelogin />
                </div>
            </nav> 
            <div className='navbar'>
                <Link to="/" className="nav-child logo" onClick={()=> window.location.reload()}>BAZZAR</Link>
                <form className="nav-child search" onSubmit={defaultHandler}>
                    <input type="search" name="search" id="search" placeholder='search...' value={search} onChange={searchHandler} />
                    <button type='submit' className='btn search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                
                <Link to='/admin' className="nav-child login" style={{textDecoration: 'none', color: '#1a1a1a', fontWeight: 500}}> Login as Admin</Link>
                <i className="fa-solid fa-bars nav-child" onClick={toogle}></i>
            </div>
            <Sameproduct categoryProduct = {categorisedProduct}/>
        </>
    )
}

export default Navbar;