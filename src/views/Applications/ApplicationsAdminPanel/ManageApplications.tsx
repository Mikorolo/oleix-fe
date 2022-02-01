import React from 'react';
import {Accordion, Container, Row} from "react-bootstrap";
import ViewApplications from "./ManageOptions/ViewApplications";
import DeleteApplication from "./ManageOptions/DeleteApplication";
import DecideApplication from "./ManageOptions/DecideApplication";

const ManageApplications = () => {
    return (
        <Container>
            <Row className='mt-4 d-flex justify-content-center m-auto'>
                <h3 className='d-flex justify-content-center m-auto'>Panel zarządzania podaniami:</h3>
                <h5 className='mt-3 d-flex justify-content-center m-auto mb-3'>Z pomocą poniższego panelu możesz przeglądać, usuwać lub decydować o podaniach</h5>
                <h5 className='mt-3 d-flex justify-content-center m-auto mb-3'>Wybierz co chcesz zrobić:</h5>
            </Row>

            <Accordion className='mt-4'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Zobacz podanie:</Accordion.Header>
                    <Accordion.Body>
                        <ViewApplications/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Usuń podanie:</Accordion.Header>
                    <Accordion.Body>
                        <DeleteApplication/>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Podejmij decyzję:</Accordion.Header>
                    <Accordion.Body>
                        <DecideApplication/>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default ManageApplications;