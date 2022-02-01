import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Pagination} from "react-bootstrap";
import politechnika from "../../assets/img/politechnika.jpg"
import SideMenu from "../../components/SideMenu/SideMenu";
import axios from "axios";
import {SortOrder} from "react-bootstrap-table-next";
import moment from "moment";
import {url} from "../../consts/url";
import useRole from "../../hooks/useRole";
import {useHistory} from "react-router-dom";
import {RolesEnum} from "../../enums/RolesEnum";

interface AdvertModelItem {
    advertId: string;
    title: string;
    note: string;
    date: string;
}

const Home = () => {
    const [data, setData] = useState<AdvertModelItem[]>([]);
    const [total, setTotal] = useState(0);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(2);

    const [sortBy, setSortBy] = useState<string>();
    const [sortDir, setSortDir] = useState<SortOrder>('asc');

    const hasRole = useRole();
    const history = useHistory();

    useEffect(() => {
        const fetchAdverts = async() => {
            try {
                const { data: resData } = await axios.get(
                    `${url}/api/adverts`,
                    {
                        params: {
                            page: currentPage,
                            pageLimit: limit,
                            sortDir,
                            sortBy,
                        },
                    },
                );

                if (resData?.list?.length === 0 && currentPage !== 1) {
                    setCurrentPage(1)
                }
                setData(resData?.list || []);
                setTotal(resData?.totalCount || 0);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchAdverts().catch();
    },[currentPage, limit, sortBy, sortDir])

    const indexOfLastPost = currentPage * limit;
    const indexOfFirstPost = indexOfLastPost - limit;
    const numOfPages = Math.ceil(total / limit);

    let items = [];
    for (let number = 1; number <= numOfPages ; number++) {
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
            <SideMenu/>
            <Image src={politechnika} className='home-image'/>
                <div className='slide-right-home'>
                    <h2 className='mt-3 mb-3 d-flex justify-content-center home-header w-100'>Witaj w systemie USOS Politechniki Świętokrzyskiej</h2>
                </div>
                    {data.map((key) => {
                        data.slice(indexOfFirstPost, indexOfLastPost)
                        return (
                            <Card key={key.advertId}
                                  className='mt-2 mb-3 w-75 d-flex justify-content-center m-auto border-0 fade-in-image card-style'>
                                <Card.Body className='card-body-style'>
                                    <Card.Title>{key.title}</Card.Title>
                                    <Card.Text
                                        className='d-flex justify-content-end'>{moment(key.date).format('lll')}</Card.Text>
                                    <Card.Text>
                                        {key.note}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    )}
                <Pagination className='d-flex justify-content-center'>
                    <Pagination.Prev onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage)} />
                        {paginationBasic}
                    <Pagination.Next onClick={() => currentPage < numOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage)} />
                </Pagination>
            {hasRole(RolesEnum.Rector) || hasRole(RolesEnum.DeaneryWorker) ?
                <Col className='justify-content-center d-flex'>
                    <Button className='rounded-2' variant='danger' onClick={() => history.push('/advertsAdminPanel')}>Panel administracyjny ogłoszeń</Button>
                </Col>
                : null }

        </Container>
    );
};

export default Home;