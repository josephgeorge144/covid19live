import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import{ Routes,Route,Link} from 'react-router-dom'
import India from './India';

import State from './State';
import World from './World';




class Header extends Component {
    constructor(prpos){
        super();
      this.state={}


}
    render() {
        return (
            <div>
            


    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
                <Link className='nav-link' to='/'>India</Link>
                <Link to='/World' className='nav-link'>World</Link>
            
          </Nav>
          <Nav>
            <Link to='/State' className='nav-link'>State</Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



<Routes>
        <Route path='/' element={<India/>}/>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/World' element={<World/>}/>
        <Route path='/State' element={<State/>}/>
        </Routes>



            </div>
        );
    }
}

export default Header;