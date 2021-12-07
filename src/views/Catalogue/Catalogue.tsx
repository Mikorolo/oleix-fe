import React from 'react';
import {Col, Container, Figure, Row} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import workers from "../../assets/img/pracownicy.png";
import subjects from "../../assets/img/przedmioty.png";
import studies from "../../assets/img/studia.png";

const Catalogue = () => {
    const history = useHistory();
    const handleRoute = (name:string) => {
        history.push('/' + name);
    }

    return (
        <Container>
            <Row className='mt-5 d-flex justify-content-center m-auto'>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            src={workers}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto'>
                            <Col>
                                <Row>
                                    <h4 onClick={() => handleRoute('workers')}><b>Pracownicy</b></h4>
                                </Row>
                                <Row>
                                    <h6>Informacje o pracownikach</h6>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            src={subjects}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto'>
                            <Col>
                                <Row>
                                    <h4 onClick={() => handleRoute('subjects')}><b>Przedmioty</b></h4>
                                </Row>
                                <Row>
                                    <h6>Informacje o przedmiotach</h6>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col>
                    <Figure>
                        <Figure.Image
                            width={171}
                            height={180}
                            src={studies}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto'>
                            <Col>
                                <Row>
                                    <h4 onClick={() => handleRoute('studies')}><b>Studia</b></h4>
                                </Row>
                                <Row>
                                    <h6>Informacje o kierunkach studiów</h6>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
        </Container>
    );
};

export default Catalogue;