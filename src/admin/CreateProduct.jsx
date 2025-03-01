import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateProduct.css'

function Admin(){
    const navigate = useNavigate();
    let [productValue, setProductValue] = useState({productName: "", productLink: "", productImage: "", productDescription: ""});
    let [productCategory, setProductCategory] = useState("");

    const productHandler = (event)=>{
        setProductValue({...productValue, [event.target.name]: event.target.value});
        console.log(productValue)
    }

    const categoryHandler = (event)=>{
        setProductCategory(event.target.value);
        console.log(productCategory);
    }

    const defaultHandler = async (event)=>{
        event.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/admin/create`, {productValue, productCategory}, {withCredentials: true});
            alert(response.data.message)
            navigate('/admin/product/list')
            
        } catch (error) {
            console.log(error);
        }
        setProductValue({
            productName: "", 
            productLink: "", 
            productImage: "",
            productDescription: "",
        });
        setProductCategory("");
    }
    return(
        <div className="container">
            <div className="navbar">
                <h1 className="logo nav-child">BAZZAR</h1>
                <h2 className="nav-child ">Upload Product here</h2>
                <Link to='/admin/product/list' className="internal-link logo nav-child">Show Products</Link>
            </div>
            <form className='productForm' onSubmit={defaultHandler}>
            <h2 className='heading'>Enter the details of the product </h2>
            <input type="text" name="productName" id="productName" placeholder='Title of the Product' className='productForm-child' onChange={productHandler} value={productValue.productName} required/>

            <input type="text" id='link' name='productLink' placeholder='Upload Product Link' className='productForm-child' onChange={productHandler} value={productValue.productLink} required/>

            <select name="category" id="category" className=' productForm-child' value={productCategory} onChange={categoryHandler} required>
                <option value="">Select Category</option>
                <option value="groceries">Groceries</option>
                <option value="electronics">Electronics</option>
                <option value="dairy">Dairy</option>
                <option value="cosmetics">Beauty Product</option>
            </select>

            <input type="text" name="productImage" id="image" placeholder='Upload image link' className='productForm-child' onChange={productHandler} value={productValue.productImage} required />

            <textarea name="productDescription" id="description" placeholder='Write description' className='productForm-child' onChange={productHandler} value={productValue.productDescription} required />

            <button type="submit" className='btn submit-btn'>Upload</button>
        </form>
        </div>
    )
}

export default Admin;