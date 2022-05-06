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
  <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
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
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;