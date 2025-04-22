import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Products.css"

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productHandler = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URI}/products`, { withCredentials: true });
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to load products. Please try again later.");
        setIsLoading(false);
        return error;
      }
    };
    productHandler();
  }, []);

  // Skeleton loader for products
  const ProductSkeleton = () => {
    return Array(8).fill().map((_, index) => (
      <div className="product-card skeleton" key={index}>
        <div className="product-image-skeleton"></div>
        <div className="product-info-skeleton">
          <div className="product-name-skeleton"></div>
          <div className="product-price-skeleton"></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="products-container">
      <h2 className="products-heading">Featured Products</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="products-grid">
        {isLoading ? (
          <ProductSkeleton />
        ) : products.length > 0 ? (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <a href={product.productLink} target='_blank' rel="noopener noreferrer" className="product-link">
                <div className="product-image-container">
                  <img src={product.productImage} alt={product.productName} className="product-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.productName}</h3>
                  {product.price && (
                    <span className="product-price">${product.price}</span>
                  )}
                </div>
                <div className="product-overlay">
                  <span className="view-product">View Product</span>
                </div>
              </a>
            </div>
          ))
        ) : (
          <div className="no-products-message">
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;