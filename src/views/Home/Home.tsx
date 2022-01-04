import React, {useState} from 'react';
import {Card, Container, Image, Pagination } from "react-bootstrap";
import politechnika from "../../assets/img/politechnika.jpg"

const Home = () => {
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

    return (
        <Container>
            <Image src={politechnika} className='home-image'/>
                <div className='slide-right'>
                    <h2 className='mt-3 mb-5 d-flex justify-content-center home-header'>Witaj w systemie USOS Politechniki Świętokrzyskiej</h2>
                </div>
            <Card className='mt-2 mb-3 w-75 d-flex justify-content-center m-auto border-0 fade-in-image card-style'>
                <Card.Body className='card-body-style'>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>Lorem ipsum</Card.Text>
                    <Card.Text className='d-flex justify-content-end'>Dnia 07.12.2021</Card.Text>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mollis aliquam elit ac congue.
                        In id risus vitae neque laoreet mollis eget non orci. Cras enim est, luctus nec eros id,
                        elementum gravida nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Pellentesque eleifend eleifend ex ac euismod. Nam quis tellus volutpat,
                        lacinia mi vitae, mattis orci. Integer ac pretium leo. Curabitur sed laoreet nunc. Etiam mollis felis
                        nec tristique bibendum. Nunc nec porttitor nisi, quis rhoncus magna. Donec ultrices nisl ac ultrices
                        eleifend. Nullam malesuada lacus eget risus luctus aliquam.
                    </Card.Text>
                    <Pagination className='d-flex justify-content-end'>
                        <Pagination.Prev onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)} />
                        {paginationBasic}
                        <Pagination.Next onClick={() => currentPage < limit ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage)} />
                    </Pagination>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;