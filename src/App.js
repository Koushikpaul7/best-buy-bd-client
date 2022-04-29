import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
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
     <Route path='/login' element={<Login></Login>}></Route>
     <Route path='/register' element={<Register></Register>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
