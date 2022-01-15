import React from 'react';
import {Col, Container, Figure, Image, Row} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import workers from "../../assets/img/pracownicy.png";
import subjects from "../../assets/img/przedmioty.png";
import studies from "../../assets/img/studia.png";
import Gradient from "../../components/Gradient/Gradient";
import SideMenu from "../../components/SideMenu/SideMenu";
import userPanelBg from "../../assets/img/userPanelBg.jpg";

const Catalogue = () => {
    const history = useHistory();
    const handleRoute = (name:string) => {
        history.push('/' + name);
    }

    return (
        <Container className='catalogue-menu d-flex justify-content-center'>
            <Image src={userPanelBg} className='user-panel-bg'/>
            <SideMenu/>
            <Row className='mt-5'>
                <Col className='mx-5'>
                    <Figure className='slide-up'>
                        <Figure.Image
                            width={171}
                            height={180}
                            src={workers}
                            className='catalogue-figure'
                            onClick={() => handleRoute('workers')}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto slide-right'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption text-white ms-3" onClick={() => handleRoute('workers')}><b>Pracownicy</b></h4>
                                </Row>
                                <Row>
                                    <h6 className='text-white catalogue-caption'>Informacje o pracownikach</h6>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col className='mx-5'>
                    <Figure className='slide-up'>
                        <Figure.Image
                            width={171}
                            height={180}
                            src={subjects}
                            className='catalogue-figure'
                            onClick={() => handleRoute('subjects')}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto slide-right'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption text-white ms-3" onClick={() => handleRoute('subjects')}><b>Przedmioty</b></h4>
                                </Row>
                                <Row>
                                    <h6 className='text-white catalogue-caption'>Informacje o przedmiotach</h6>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col className='mx-5'>
                    <Figure className='slide-up'>
                        <Figure.Image
                            width={171}
                            height={180}
                            src={studies}
                            className='catalogue-figure'
                            onClick={() => handleRoute('studies')}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-white m-auto slide-right'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption ms-5" onClick={() => handleRoute('studies')}><b>Studia</b></h4>
                                </Row>
                                <Row>
                                    <h6 className='text-white catalogue-caption'>Informacje o kierunkach studiów</h6>
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