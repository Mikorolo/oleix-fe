import React, {useEffect, useState} from 'react';
import BootstrapTable, {ColumnDescription, TableChangeState, TableChangeType} from "react-bootstrap-table-next";
import {Container, Row} from "react-bootstrap";
import axios from "axios";
import paginationFactory from "react-bootstrap-table2-paginator";
import {ChevronDown, ChevronExpand, ChevronUp} from "react-bootstrap-icons";

interface StudentsModel {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
}

const StudentsList = () => {
    const [data, setData] = useState<StudentsModel[]>([]);
    const [limit, setLimit] = useState<number>(5);
    const [currentPage, setCurrentPage] = useState<number>(1);
    // const [total, setTotal] = useState(0);
    // const [loading, setLoading] = useState(false);
    // const [sort, setSort] = useState('desc');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const {data} = await axios.get('https://fakestoreapi.com/products',
                    {
                        params: {
                            page: currentPage,
                            // sort,
                        }
                    });
                setData(data);
            }
            catch (e) {
                console.error(e);
            }
        }
        // setTotal(data.length);
        fetchStudents().catch();
    }, [limit, currentPage])

    const sortHandler = (order?: string) => {
        if (!order) return <ChevronExpand className='sort-icons-spacing'/>;
        if (order === 'asc') return <ChevronUp className='sort-icons-spacing'/>;
        return <ChevronDown className='sort-icons-spacing'/>;
    }

    const columns: ColumnDescription[] = [
        {
            dataField: "id",
            text: 'Id',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 20}
        },
        {
            dataField: "title",
            text: 'Title',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 150, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}
        },
        {
            dataField: "price",
            text: 'Price',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 30}
        },
        {
            dataField: "category",
            text: 'Category',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 60}
        },
        {
            dataField: "description",
            text: 'Description',
            style: {maxWidth: 280, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}
        },
    ];


    const paginate = paginationFactory({
        sizePerPageList: [
            { text: '5', value: 5 },
            { text: '10', value: 10 },
            { text: '25', value: 25 },
            { text: '50', value: 50 }],
        page: currentPage,
        sizePerPage: limit,
        hidePageListOnlyOnePage: true,
        hideSizePerPage: !data[0],
    })

    // const onTableChange = async (type: TableChangeType, tableChangeState: TableChangeState<object>) => {
    //     setCurrentPage(tableChangeState.page);
    //     setLimit(tableChangeState.sizePerPage);
    //     // setSort(tableChangeState.sortOrder);
    // };

    return (
            <Container className='mt-5'>
                <div>
                    <Row>
                        <BootstrapTable
                            keyField='id'
                            bootstrap4={true}
                            columns={columns}
                            data={data}
                            pagination={paginate}
                            hover
                            bordered={true}
                            striped={true}
                            />
                    </Row>
                </div>
            </Container>
    );
};

export default StudentsList;