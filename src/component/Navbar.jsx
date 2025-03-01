import '../component/Navbar.css';
import Sameproduct from './Sameproduct';
import Googlelogin from './Googlelogin';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
             <ul className={`nav-child slidebar ${isActive? "inactive": "active"} `}>
                    <i className="fa-solid fa-xmark" onClick={toogle}></i>
                    <li data-value="electronics" onClick={handleCategory} className='category' >Electronics</li>
                    <li data-value="cosmetics" onClick={handleCategory} className='category' >Beauty Product</li>
                    <li data-value="groceries" onClick={handleCategory} className='category'>Groceries</li>
                    <li data-value="dairy" onClick={handleCategory} className='category'>Dairy</li>
                    <div  className="nav-child category"><Googlelogin /></div>
            </ul>
            <div className='navbar'>
                <div className="nav-child logo" onClick={()=> window.location.reload()}>BAZZAR</div>
                <form className="nav-child search" onSubmit={defaultHandler}>
                    <input type="search" name="search" id="search" placeholder='search...' value={search} onChange={searchHandler} />
                    <button type='submit' className='btn search-btn'><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                
                <Link to='/admin' className="login internal-link logo nav-child">Admin</Link>  
                <i className="fa-solid fa-bars nav-child" onClick={toogle}></i>
            </div>
            <Sameproduct categoryProduct = {categorisedProduct}/>
        </>
    )
}

export default Navbar;