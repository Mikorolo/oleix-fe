import React from 'react';
import {Button, Container, Row, Table} from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";

const Stages = () => {
    return (
        <Container>
            <SideMenu/>
            <h2 className='mt-4'>Zaliczenia etapów:</h2>
            <Row className='mt-5'>
                <h4>E-INF-ST1 - Informatyka - studia stacjonarne pierwszego stopnia</h4>
                <Row className='mt-4'>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Semestr</th>
                            <th>Cykl</th>
                            <th>Data zakończenia</th>
                            <th>Status zaliczenia</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Pierwszy semestr Informatyki E-INF-SI</td>
                            <td>2019/20-1</td>
                            <td>2020-02-23</td>
                            <td>S - zaliczenie warunku</td>
                            <td><Button>Szczegóły</Button></td>
                        </tr>
                        <tr>
                            <td>Drugi semestr Informatyki E-INF-SII</td>
                            <td>2019/20-2</td>
                            <td>2020-09-30</td>
                            <td>A - zaliczony automatycznie	</td>
                            <td><Button>Szczegóły</Button></td>
                        </tr>
                        <tr>
                            <td>Trzeci semestr Informatyki E-INF-SIII</td>
                            <td>2020/21-1</td>
                            <td>2021-02-23</td>
                            <td>A - zaliczony automatycznie</td>
                            <td><Button>Szczegóły</Button></td>
                        </tr>
                        </tbody>
                    </Table>
                </Row>
            </Row>
        </Container>
    );
};

export default Stages;