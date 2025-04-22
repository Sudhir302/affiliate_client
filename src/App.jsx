import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Home";
import CreateProduct from "./pages/CreateProduct";
import Productlist from "./pages/Productlist";
import Protected from "./utils/Protected";
import EditProduct from "./pages/EditProduct";
import Login from "./pages/Login";
import "./App.css";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound"
import "./styles/Media.css"


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path = '/admin' element= {<Login />} />
        <Route path='/admin/product/create' element= {<Protected><CreateProduct /></Protected>}/>
        <Route path='/admin/product/list' element={<Protected><Productlist></Productlist></Protected>} />
        <Route path='/admin/product/:id/edit' element= {<Protected><EditProduct /></Protected>} />
        <Route path='*' element= {<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
