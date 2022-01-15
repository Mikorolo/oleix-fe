import React, {useState} from 'react';
import {Button, Col, Container, ListGroup, Offcanvas} from "react-bootstrap";
import {List} from "react-bootstrap-icons";

const SideMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                        <ListGroup.Item>Na skróty</ListGroup.Item>
                        <ListGroup.Item>Plany zajęć</ListGroup.Item>
                        <ListGroup.Item>Grupy zajęciowe</ListGroup.Item>
                        <ListGroup.Item>Oświadczenia</ListGroup.Item>
                        <ListGroup.Item>Preferencje użytkownika</ListGroup.Item>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col>
        </div>
    );
};

export default SideMenu;