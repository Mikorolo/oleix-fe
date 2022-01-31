import React from 'react';
import grades from '../../assets/img/oceny.png';
import passes from '../../assets/img/podania.png';
import polls from '../../assets/img/ankiety.png';
import userPanelBg from '../../assets/img/userPanelBg.jpg';
import stages from '../../assets/img/zaliczenia_etapow.png';
import {Col, Container, Figure, Image, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import SideMenu from "../../components/SideMenu/SideMenu";
import useRole from '../../hooks/useRole';
import { RolesEnum } from '../../enums/RolesEnum';


const UserPanel = () => {
    const history = useHistory();
    const hasRole = useRole();
    const handleRoute = (name:string) => {
        history.push('/' + name);
    }
    return (
        <Container className='user-panel-menu d-flex justify-content-center'>
            <Image src={userPanelBg} className='user-panel-bg'/>
            <SideMenu/>
            
            <Row className='mt-5'>
                {hasRole(RolesEnum.Student)||hasRole(RolesEnum.Lecturer)?
                <Col className='mx-5'>
                    <Figure className='slide-up'>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={grades}
                            onClick={() => handleRoute('grades')}
                            className='catalogue-figure user-panel-figures'
                        />
                        <Figure.Caption className='d-flex justify-content-center text-white m-auto slide-right'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption ms-3" onClick={() => handleRoute('grades')}><b>Oceny</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
                :null}
                
                <Col className='mx-5'>
                    <Figure className='slide-up'>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={passes}
                            onClick={() => handleRoute('passes')}
                            className='catalogue-figure user-panel-figures'
                        />
                        <Figure.Caption className='d-flex justify-content-center text-white m-auto slide-right'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption ms-3" onClick={() => handleRoute('applications')}><b>Podania</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>

                {hasRole(RolesEnum.Student)?
                <Col className='mx-5'>
                    <Figure className='slide-up'>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={polls}
                            onClick={() => handleRoute('polls')}
                            className='catalogue-figure user-panel-figures'
                        />
                        <Figure.Caption className='d-flex justify-content-center text-white m-auto slide-left'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption ms-3" onClick={() => handleRoute('polls')}><b>Ankiety</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
                :null}

                {hasRole(RolesEnum.Student)?
                <Col className='mx-5'>
                    <Figure className='slide-up'>
                        <Figure.Image
                            width={100}
                            height={130}
                            src={stages}
                            onClick={() => handleRoute('stages')}
                            className='catalogue-figure user-panel-figures'
                        />
                        <Figure.Caption className='d-flex justify-content-center text-white m-auto slide-left'>
                            <Col>
                                <Row>
                                    <h4 className = "catalogue-caption ms-3" onClick={() => handleRoute('stages')}><b>Zaliczenia etapów</b></h4>
                                </Row>
                            </Col>
                        </Figure.Caption>
                    </Figure>
                </Col>
                :null}
            </Row>
        </Container>
    );
};

export default UserPanel;