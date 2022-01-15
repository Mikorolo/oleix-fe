import React from 'react';
import {Accordion, Card, Container, Row, Table} from "react-bootstrap";

const Grades = () => {
    return (
        <Container>
            <h2 className='mt-4'>Oceny końcowe z przedmiotów:</h2>
            <Card className='mt-4 grades-info-card'>
                <Card.Body>
                    <span>
                        W tabeli wyświetlone są wszystkie przedmioty, które zaliczałeś w danych <br/>
                        cyklach dydaktycznych, niezależnie od ich podpięcia pod Twoje programy <br/>
                        studiów. <br/>
                        - Jeśli szukasz informacji o tym, które przedmioty podpiąłeś pod aktualny <br/>
                        etap studiów, to zajrzyj do działu zaliczenia etapów. <br/>
                        - Jeśli chcesz przyporządkować oceny konkretnym etapom studiów, to <br/>
                        zajrzyj do działu podpięcia. <br/>
                        W nawiasach podane są "stare" oceny, które poprawiłeś, zaliczając <br/>
                        przedmiot w kolejnym terminie.
                    </span>
                </Card.Body>
            </Card>
            <Row className='mt-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Semestr zimowy 2021/22</Accordion.Header>
                        <Accordion.Body>
                            <div className='mt-1'>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Nazwa:</th>
                                        <th>ECTS</th>
                                        <th>Kod przedmiotu:</th>
                                        <th>Oceny:</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className='subject-name'>Aplikacje mobilne</td>
                                        <td>
                                            <b>
                                                4.00
                                            </b>
                                        </td>
                                        <td>E-INF-ST1 (E-INF-SI-SV)</td>
                                        <td>
                                            <b>
                                                WYK: (brak ocen) <br/>
                                                LAB: (brak ocen) <br/>
                                                PRO: (brak ocen)
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='subject-name'>Grafika komputerowa</td>
                                        <td>
                                            <b>
                                                5.00
                                            </b>
                                        </td>
                                        <td>E-INF-ST1 (E-INF-SI-SV)</td>
                                        <td>
                                            <b>
                                                WYK: (brak ocen) <br/>
                                                LAB: (brak ocen) <br/>
                                                PRO: (brak ocen)
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='subject-name'>Język obcy (angielski) 3</td>
                                        <td>
                                            <b>
                                                1.00
                                            </b>
                                        </td>
                                        <td>E-INF-ST1 (E-INF-SI-SV)</td>
                                        <td>
                                            <b>
                                                CW: (brak ocen)
                                            </b>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Semestr zimowy 2021/22</Accordion.Header>
                        <Accordion.Body>
                            <div className='mt-1'>
                                <Table striped bordered hover>
                                    <thead>
                                    <tr>
                                        <th>Nazwa:</th>
                                        <th>ECTS</th>
                                        <th>Kod przedmiotu:</th>
                                        <th>Oceny:</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className='subject-name'>Aplikacje mobilne</td>
                                        <td>
                                            <b>
                                                4.00
                                            </b>
                                        </td>
                                        <td>E-INF-ST1 (E-INF-SI-SV)</td>
                                        <td>
                                            <b>
                                                WYK: (brak ocen) <br/>
                                                LAB: (brak ocen) <br/>
                                                PRO: (brak ocen)
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='subject-name'>Grafika komputerowa</td>
                                        <td>
                                            <b>
                                                5.00
                                            </b>
                                        </td>
                                        <td>E-INF-ST1 (E-INF-SI-SV)</td>
                                        <td>
                                            <b>
                                                WYK: (brak ocen) <br/>
                                                LAB: (brak ocen) <br/>
                                                PRO: (brak ocen)
                                            </b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='subject-name'>Język obcy (angielski) 3</td>
                                        <td>
                                            <b>
                                                1.00
                                            </b>
                                        </td>
                                        <td>E-INF-ST1 (E-INF-SI-SV)</td>
                                        <td>
                                            <b>
                                                CW: (brak ocen)
                                            </b>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>

        </Container>
    );
};

export default Grades;