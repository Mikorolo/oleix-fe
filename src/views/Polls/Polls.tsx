import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Figure, Image, Row, Stack, Table} from "react-bootstrap";
import profilePicture from "../../assets/img/profilePicture.jpeg";
import axios from "axios";
import {useHistory} from "react-router-dom";

interface PollsModelItem {
    lecturerName: string;
    note: string;
    rating: number;
}

interface PollsModel {
    list: PollsModelItem[];
    totalCount: number;
}

const Polls = () => {
    const [data, setData] = useState<PollsModelItem[]>([]);
    const history = useHistory();

    useEffect(() => {
        const fetchPolls = async() => {
            try {
                const res = await axios.get('https://localhost:44362/api/questionnaries');
                setData(res.data.list);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchPolls().catch();
    })
    return (
        <Container>
            <h2 className='mt-4 mb-3'>Ankiety do wypełnienia:</h2>
            <Row className='mt-5'>
                <Stack direction="horizontal" gap={5}>
                    <Figure>
                        <Figure.Image
                            width={125}
                            height={140}
                            src={profilePicture}
                        />
                    </Figure>
                    <Col>
                        <Row className='mt-auto mb-auto'>
                            <h5>Język obcy (angielski) 3 (Ćwiczenia)</h5>
                            <h6>mgr Dorota Pliżga</h6>
                        </Row>
                    </Col>
                    <Button className='me-auto ms-auto'>Wypełnij ankietę</Button>

                </Stack>
            </Row>
            <h4>
                Pozostałe aniekty:
            </h4>
            <Row className='mt-3'>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th style={{width: "10%"}}>#</th>
                        <th>Prowadzący i przedmiot</th>
                        <th style={{width: "15%"}}>Wypełnij ankietę</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr>
                            <td><Image className='profile-picture' src={profilePicture}/></td>
                            <td>Projektowanie aplikacji internetowych 1 (Laboratorium) <br/> {item.lecturerName}</td>
                            <td><Button variant='success' className='d-flex m-auto' onClick={() => history.push("/polls/fillPoll")}>Wypełnij ankietę</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default Polls;