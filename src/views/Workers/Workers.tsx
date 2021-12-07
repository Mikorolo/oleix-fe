import React, { useEffect, useState } from "react"
import { Container, Table, Button, Toast, Pagination } from "react-bootstrap";
import axios from "axios";


interface WorkersModel{
    name: string;
    id: number;
    phone: string;
    email: string;
}


const Workers = () => {
    const [data, setData] = useState<WorkersModel[]>();
    const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1)
    const [limit, setLimit] = useState(5);
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item className='pagination-buttons' onClick={() => setCurrentPage(number)} key={number} active={number === currentPage}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    );

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const res = await axios.get<WorkersModel[]>("https://jsonplaceholder.typicode.com/users", 
                    {
                        params: {

                        }
                    });
                    setData(res.data);
                }
                catch(e) {
                    setShow(!show);
                    <Toast onClose={() => setShow(false)} delay={3000} show={show} autohide>
                        <Toast.Header>
                            Nie można załadować danych
                        </Toast.Header>
                    </Toast>
                }
            };
            fetchData();   
        },[])
        
        return (
        <Container>
            <Table className='mt-5' striped borderless responsive hover>
                <thead>
                    <tr>
                        <th>Imie i Nazwisko</th>
                        <th>Numer indeksu</th>
                        <th>Numer telefonu</th>
                        <th>Email</th>
                    </tr>
                </thead>
                    {data?.map((item) => 
                    <tbody>
                        <tr>
                          <td>{item.name}</td>
                          <td>{item.id}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                          <td><Button>Szczegóły</Button></td>
                        </tr>
                    </tbody>
                    )}
            </Table>
            <Pagination className="d-flex justify-content-center">
                <Pagination.Prev onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)} />
                    {paginationBasic}
                <Pagination.Next onClick={() => currentPage < limit ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage)} />
            </Pagination>
        </Container>
        )
  };

export default Workers;