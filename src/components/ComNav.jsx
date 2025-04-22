import { Link } from "react-router-dom";
import "../styles/ComNav.css";

function ComNav({title, path, pathText}){
    return(
        <div className="com-nav">
            <Link to="/" className="nav-child logo">BAZZAR</Link>
            <h2 className="title">{title}</h2>
            <Link to={path} className="add-product-link shop-link">{pathText}</Link>
        </div>
    );
}


export default ComNav; 