import { useEffect, useState, } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './EditProduct.css';

function EditProduct(){
    const {id} = useParams();
    const navigate = useNavigate();
    const[productValue, setProductValue] = useState({productName: "", productLink: "", productImage: "", productDescription: ""});
    const [productCategory, setProductCategory] = useState("");

    const handleChange = (e)=>{
        setProductValue({ ...productValue, [e.target.name]: e.target.value});
        console.log(productValue);
    }

    const categoryHandler = (e)=>{
        setProductCategory(e.target.value)
    }

    const updateHandler = async (e)=>{
        e.preventDefault()
        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URI}/admin/productlist/${id}/update`, {...productValue,productCategory}, {withCredentials:true});
            navigate('/admin/product/list');
            alert(response.data.message)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteHandler = async()=>{
        try {
            const response = await axios.delete(`${import.meta.env.VITE_BACKEND_URI}/admin/productlist/${id}/delete`, {withCredentials: true});
            alert(response.data.message);
            navigate("/admin/product/list");
        } catch (error) {
            console.error(error)
        }
    }


    useEffect(()=>{
        const editHandler = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/admin/productlist/${id}/edit`, {withCredentials: true});
                const product = response.data.product
                console.log(product);
                setProductValue({
                    productName: product.productName,
                    productLink: product.productLink,
                    productImage: product.productImage,
                    productDescription: product.productDescription,
                })
                setProductCategory(product.productCategory)
            } catch (error) {
                console.error(error);
            }
        }
        editHandler();
    },[])
    return(
        <div className="edit-container">
            <div className="edit-navbar admin-navbar">
                <h1 className="logo edit-logo">BAZZAR</h1>
                <h2 className="edit-title">Update Or Delete Product</h2>
                <Link to="/admin/product/create" className="add-product-link">Add Product</Link>
            </div>

            <div className="edit-form-container">
                <form className="edit-form" onSubmit={updateHandler}>
                    <h2 className="form-heading">Update Product Details</h2>
                    
                    <div className="form-group">
                        <input 
                            type="text" 
                            name="productName" 
                            id="productName" 
                            placeholder="Title of the Product"
                            value={productValue.productName} 
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            name="productLink"
                            id="link"
                            placeholder="Upload Product Link"
                            value={productValue.productLink}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <select 
                            name="category" 
                            id="category"
                            value={productCategory}
                            onChange={categoryHandler}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="groceries">Groceries</option>
                            <option value="electronics">Electronics</option>
                            <option value="dairy">Dairy</option>
                            <option value="cosmetics">Beauty Product</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text"
                            name="productImage"
                            id="image"
                            placeholder="Upload image link"
                            value={productValue.productImage}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            name="productDescription"
                            id="description"
                            placeholder="Write description"
                            value={productValue.productDescription}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="button-group">
                        <button type="submit" className="update-btn">Update</button>
                        <button type="button" className="delete-btn" onClick={deleteHandler}>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;