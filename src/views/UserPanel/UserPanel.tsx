import React from 'react';
import grades from '../../assets/img/oceny.png';
import passes from '../../assets/img/podania.png';
import polls from '../../assets/img/ankiety.png';
import stages from '../../assets/img/zaliczenia_etapow.png';
import {Col, Container, Figure, Row} from "react-bootstrap";
import workers from "../../assets/img/pracownicy.png";
import subjects from "../../assets/img/przedmioty.png";
import studies from "../../assets/img/studia.png";
import {useHistory} from "react-router-dom";


const UserPanel = () => {
    const history = useHistory();
    const handleRoute = (name:string) => {
        history.push('/' + name);
    }
    return (
        <Container>
            <Row className='mt-5 d-flex justify-content-center m-auto'>
                <Row>
                    <Figure>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={grades}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption" onClick={() => handleRoute('grades')}><b>Oceny końcowe</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Row>
                <Row>
                    <Figure>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={passes}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption" onClick={() => handleRoute('passes')}><b>Podania</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Row>
                <Row>
                    <Figure>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={polls}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption" onClick={() => handleRoute('polls')}><b>Ankiety</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Row>
                <Row>
                    <Figure>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={stages}
                        />
                        <Figure.Caption className='d-flex justify-content-center text-dark m-auto'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption" onClick={() => handleRoute('stages')}><b>Zaliczenia etapów</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Row>
            </Row>
        </Container>
    );
};

export default UserPanel;