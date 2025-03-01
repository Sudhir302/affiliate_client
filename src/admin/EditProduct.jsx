import { useEffect, useState, } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

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
        <div className="container">
            <div className="navbar">
                <h1 className="logo nav-child">BAZZAR</h1>
                <h2 className="nav-child ">Update Or Delete</h2>
                <Link to= '/admin/product/create' className="internal-link logo nav-child" >Add Product</Link>
            </div>
            <form className='productForm' onSubmit={updateHandler}>
                <h2 className='heading'>Update details of the product </h2>
                <input type="text" name="productName" id="productName" placeholder='Title of the Product' className='productForm-child' value={productValue.productName} onChange={handleChange} required/>

                <input type="text" id='link' name='productLink' placeholder='Upload Product Link' className='productForm-child' value={productValue.productLink} onChange={handleChange} required/>

                <select name="category" id="category" className=' productForm-child' value={productCategory}  onChange={categoryHandler} required>
                    <option value="">Select Category</option>
                    <option value="groceries">Groceries</option>
                    <option value="electronics">Electronics</option>
                    <option value="dairy">Dairy</option>
                    <option value="cosmetics">Beauty Product</option>
                </select>

                <input type="text" name="productImage" id="image" placeholder='Upload image link' className='productForm-child ' value={productValue.productImage} onChange={handleChange} required />

                <textarea name="productDescription" id="description" placeholder='Write description' className='productForm-child' value={productValue.productDescription} onChange={handleChange} required />

                <div>
                <button type="submit" className='btn submit-btn'>Update</button>
                <button type="button" className="btn delete-btn" onClick={deleteHandler}>DELETE</button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;