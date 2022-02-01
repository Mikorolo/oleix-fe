import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../assets/img/logo.png"
import {useCurrentUser} from "../../contexts/UserContext";
import {RolesEnum} from "../../enums/RolesEnum";


const NavigationBar = () => {

    const handleRole = (roleId: string | undefined) => {
        switch (roleId) {
            case RolesEnum.Student: return 'Student';

            case RolesEnum.Lecturer: return 'Wykładowca';

            case RolesEnum.DeaneryWorker: return 'Pracownik dziekanatu';

            case RolesEnum.Rector: return 'Rektor';
        }
    }
    const { currentUser, onLogOut } = useCurrentUser();
    return (
        <div>
            <Navbar expand="lg" variant='dark' className='navbar-style'>
                <Container>
                    <Navbar.Brand as={Link} to='/' ><img src={logo} className='navbar-logo'/>USOS</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to='/userPanel'><b>Panel użytkownika</b></Nav.Link>
                            <Nav.Link as={Link} to='/catalogue'><b>Katalog</b></Nav.Link>
                            <Nav.Link as={Link} to='/'><b>Strona domowa</b></Nav.Link>
                            <Nav.Link onClick={onLogOut}><b>Wyloguj</b></Nav.Link>
                            <Nav.Link><b>Witaj, {handleRole(currentUser?.roleId)}</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;