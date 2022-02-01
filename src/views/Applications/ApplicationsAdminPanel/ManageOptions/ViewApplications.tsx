import React, {useEffect, useState} from 'react';
import axios from "axios";
import {url} from "../../../../consts/url";
import {Container, Row, Table} from "react-bootstrap";

interface ApplicationsModelItem {
    applicationId: string,
    studentId: string,
    recipientId: string,
    title: string,
    note: string,
    isApproved: boolean
}

const ViewApplications = () => {
    const [data, setData] = useState<ApplicationsModelItem[]>([]);
    useEffect(() => {
        const fetchPolls = async() => {
            try {
                const res = await axios.get(`${url}/api/applications`);
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
            <Row className='mt-3'>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th style={{width: "10%"}}>Tytuł</th>
                        <th>Treść</th>
                        <th style={{width: "15%"}}>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.note}</td>
                            <td>{item.isApproved ? 'Zatwierdzone' : 'Niezatwierdzone'}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
};

export default ViewApplications;