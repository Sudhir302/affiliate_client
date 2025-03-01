import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Productlist(){
    let [products, setProduct] = useState([]);

    useEffect(()=>{
        const handleProductList = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/admin/productlist`, {withCredentials: true});
                console.log(response.data.products);
                setProduct(response.data.products)

            } catch (error) {
                console.error(error);
                return error;
            }
        }
        handleProductList();
    },[])

    return(
        <div>
            <div className="navbar">
                <h1 className="logo nav-child">BAZZAR</h1>
                <h2 className="nav-child ">List Of All Product</h2>
                <Link to= '/admin/product/create' className="internal-link logo nav-child" >Add Product</Link>
            </div>
            <div className='parent-card'>
            {products.map((product)=>(
                <div className="child-card cur-pointer " key={product._id}>
                    <Link to= {`/admin/product/${product._id}/edit`} className="product-link">
                        <img src={product.productImage} alt="image" className='product-image' />
                        <strong className='product-name'>{product.productName}</strong>
                    </Link>
                </div>
                ))}
        </div>
    </div>
    )
}

export default Productlist;