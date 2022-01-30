import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Figure, Image, Row, Stack, Table} from "react-bootstrap";
import profilePicture from "../../assets/img/profilePicture.jpeg";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {url} from "../../consts/url";

interface PollsModelItem {
    lecturerId: string;
    firstName: string;
    surname: string;
    email: number;
}

const Polls = () => {
    const [data, setData] = useState<PollsModelItem[]>([]);
    const history = useHistory();

    useEffect(() => {
        const fetchPolls = async() => {
            try {
                const res = await axios.get(`${url}/api/lecturers`);
                setData(res.data.list);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchPolls().catch();
    },[])
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
                            <td>{item.firstName} <br/> {item.email}</td>
                            <td><Button variant='success' className='d-flex m-auto' onClick={() => history.push(`/polls/fillPoll/${item.lecturerId}`)}>Wypełnij ankietę</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default Polls;