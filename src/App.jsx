import Home from './Home';
import CreateProduct from "./admin/CreateProduct";
import Productlist from './admin/Productlist';
import Protected from './utils/Protected';
import PageNotFound from './component/PageNotFound';
import EditProduct from './admin/EditProduct';
import Login from './admin/Login';
import './responsive_media/Media.css';
import './App.css'
import Footer from './component/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


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