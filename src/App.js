import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AddProducts from './Components/AddProducts/AddProducts';
import MyProducts from './Components/AddProducts/MyProducts';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import NotFound from './Components/NotFound/NotFound';
import ProductEdit from './Components/ProductEdit/ProductEdit';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/inventory' element={<RequireAuth>
      <Inventory></Inventory>
     </RequireAuth>}></Route>
     <Route path='/inventory/:inventoryId' element={<RequireAuth>
      <ProductEdit></ProductEdit>
     </RequireAuth>}></Route>
     <Route path='/addproduct' element={<RequireAuth>
      <AddProducts></AddProducts>
     </RequireAuth>}></Route>
     <Route path='/manage' element={<RequireAuth>
      <ManageProducts></ManageProducts>
     </RequireAuth>}></Route>
     <Route path='/myproducts' element={<RequireAuth>
      <MyProducts></MyProducts>
     </RequireAuth>}></Route>
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
     <Route path='/blogs' element={<Blogs></Blogs>}></Route>
     <Route path='/about' element={<About></About>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
