import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth'
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
    const[user]=useAuthState(auth);

    const handleSignout=()=>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/"> <img style={{height:'50px',width:'70px'}} src="https://yt3.ggpht.com/ytc/AKedOLT28LRkz_sX-D_nQJyC4mZDhyULLzkMASpuF0k1ag=s900-c-k-c0x00ffffff-no-rj" alt="" /> Best Buy Bd</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
      {
          user?
          <button onClick={handleSignout} className='btn btn-danger'>Signout</button>:
          <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      
    </Nav>
    <Nav>
    {
                user&&<>
               <Nav.Link as={Link} to="/manage">Manage inventory</Nav.Link> 
                </>
            }
     {
                user&&<>
               <Nav.Link as={Link} to="/addproduct">Add new product</Nav.Link> 
                </>
            }
            {
                user&&<>
               <Nav.Link as={Link} to="/myproducts">My Products</Nav.Link> 
                </>
            }
            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;