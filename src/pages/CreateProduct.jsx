// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './CreateProduct.css'
// import ComNav from './ComNav';

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/CreateProduct.css";
import ComNav from "../components/ComNav";

function CreateProduct() {
    const navigate = useNavigate();
    const [productValue, setProductValue] = useState({
        productName: "",
        productLink: "",
        productImage: "",
        productDescription: ""
    });
    const [productCategory, setProductCategory] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductValue(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleCategoryChange = (event) => {
        setProductCategory(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URI}/admin/create`,
                { productValue, productCategory },
                { withCredentials: true }
            );
            alert(response.data.message);
            navigate('/admin/product/list');
        } catch (error) {
            console.error('Error creating product:', error);
        }

        // Reset form
        setProductValue({
            productName: "",
            productLink: "",
            productImage: "",
            productDescription: "",
        });
        setProductCategory("");
    }

    return (
        <div className="container">
            <ComNav text = "" path= "/admin/product/list" pathText= "Product List" />
            <div className="form-container">
                <form className='product-form' onSubmit={handleSubmit}>
                    <h2 className='form-heading'>Create New Product</h2>
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="productName"
                            id="productName"
                            placeholder='Product Title'
                            className='form-input'
                            onChange={handleInputChange}
                            value={productValue.productName}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            id='link'
                            name='productLink'
                            placeholder='Product URL'
                            className='form-input'
                            onChange={handleInputChange}
                            value={productValue.productLink}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <select 
                            name="category"
                            id="category"
                            className='form-select'
                            value={productCategory}
                            onChange={handleCategoryChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="groceries">Groceries</option>
                            <option value="electronics">Electronics</option>
                            <option value="dairy">Dairy</option>
                            <option value="cosmetics">Beauty Products</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            name="productImage"
                            id="image"
                            placeholder='Image URL'
                            className='form-input'
                            onChange={handleInputChange}
                            value={productValue.productImage}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea 
                            name="productDescription"
                            id="description"
                            placeholder='Product Description'
                            className='form-textarea'
                            onChange={handleInputChange}
                            value={productValue.productDescription}
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className='submit-button'
                    >
                        Create Product
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CreateProduct;