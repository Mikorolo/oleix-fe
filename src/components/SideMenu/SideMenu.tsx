import React, {useState} from 'react';
import {Button, Col, Container, ListGroup, Offcanvas} from "react-bootstrap";
import {List} from "react-bootstrap-icons";
import useRole from '../../hooks/useRole';
import { RolesEnum } from '../../enums/RolesEnum';
import { link } from 'fs';
import { useHistory } from 'react-router-dom';


const SideMenu = () => {
    const [show, setShow] = useState(false);

    const history = useHistory();
    const hasRole = useRole();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleRoute = (name:string) => {
        history.push('/' + name);
    }
    return (
        <div>
            <Button variant="primary" className='side-menu' onClick={handleShow}>
                <List className='d-inline-flex mb-1'/> Menu
            </Button>
            <Col>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu użytkownika:</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='side-menu-list'>
                        <ListGroup.Item onClick={() => handleRoute('catalogue')}>Katalog</ListGroup.Item>
                        {hasRole(RolesEnum.Student)||hasRole(RolesEnum.Lecturer)?<ListGroup.Item onClick={() => handleRoute('grades')}>Oceny</ListGroup.Item>:null}
                        {hasRole(RolesEnum.Student)?<ListGroup.Item onClick={() => handleRoute('polls')}>Ankiety</ListGroup.Item>:null}
                        <ListGroup.Item onClick={() => handleRoute('applications')}>Podania</ListGroup.Item>
                        {hasRole(RolesEnum.Student)?<ListGroup.Item onClick={() => handleRoute('Stages')}>Zaliczenia</ListGroup.Item>:null}
                        {hasRole(RolesEnum.DeaneryWorker)?<ListGroup.Item onClick={() => handleRoute('Groups')}>Dodaj grupę</ListGroup.Item>:null}
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
        </div>
    );
};

export default SideMenu;