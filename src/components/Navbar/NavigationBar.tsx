import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png"

const NavigationBar = () => {
    return (
        <div>
            <Navbar expand="lg" variant='dark' className='navbar-style'>
                <Container>
                    <Navbar.Brand as={Link} to='/' ><img src={logo} className='navbar-logo'/>USOS</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/catalogue'><b>Katalog</b></Nav.Link>
                            <Nav.Link as={Link} to='/login'><b>Logowanie</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;