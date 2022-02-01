import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import DeleteAdvert from "./DeleteAdvert";
import AddAdvert from "./AddAdvert";
import EditAdvert from "./EditAdvert";

const ManageAdverts = () => {

    return (
        <Container>
            <Row className='mt-4 d-flex justify-content-center m-auto'>
                <h3 className='d-flex justify-content-center m-auto'>Panel zarządzania ogłoszeniami:</h3>
                <h5 className='mt-3 d-flex justify-content-center m-auto mb-3'>Z pomocą poniższego panelu możesz dodawać, usuwać lub modyfikować ogłoszenia</h5>
                <h5 className='mt-3 d-flex justify-content-center m-auto mb-3'>Wybierz co chcesz zrobić:</h5>
            </Row>

            <Accordion className='mt-4'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Dodać ogłoszenie</Accordion.Header>
                    <Accordion.Body>
                        <AddAdvert/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Usunąć ogłoszenie</Accordion.Header>
                    <Accordion.Body>
                        <DeleteAdvert/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Edytować ogłoszenie</Accordion.Header>
                    <Accordion.Body>
                        <EditAdvert/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default ManageAdverts;