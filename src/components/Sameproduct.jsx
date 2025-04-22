function Sameproduct({categoryProduct}){
    return(
        <div className='parent-card'>
            {categoryProduct.map((product)=>(
                <div className="child-card" key={product._id}>
                    <a href={product.productLink} target='_blank' rel="noopener noreferrer" className='product-link'>
                        <img src={product.productImage} alt="image" className='product-image' />
                        <strong className='product-name'>{product.productName}</strong>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Sameproduct;