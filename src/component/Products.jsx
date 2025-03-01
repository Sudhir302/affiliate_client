import axios from 'axios';
import '../component/Products.css'
import { useEffect, useState } from 'react';

function Products(){
    let [products, setProducts] = useState([]);

    useEffect(()=>{
        const productHandler = async ()=>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/products`, {withCredentials: true});
                setProducts(response.data);
            } catch (error) {
                console.log(error);
                return error;
            }
        }
        productHandler();
    },[])

    return(
        <div className='parent-card'>
            {products.map((product)=>(
                <div className="child-card" key={product._id}>
                    <a href={product.productLink} target='_blank' rel="noopener noreferrer" className='product-link'>
                        <img src={product.productImage} alt="image" className='product-image' />
                        <strong className='product-name'>{product.productName}</strong>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Products;