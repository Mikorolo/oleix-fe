import React from "react"
import {Container, Row} from "react-bootstrap";
import useTableProps, {sortHandler} from "../../hooks/useTableProps";
import BootstrapTable, {ColumnDescription} from "react-bootstrap-table-next";

interface WorkersModelItem{
    name: string;
    id: number;
    phone: string;
    email: string;
}

interface WorkersModel {
    list: WorkersModelItem[];
    totalCount: number;
}

const Workers = () => {
    const { data, tableProps } = useTableProps<WorkersModel>('https://localhost:44362/api/lecturers');

    const columns: ColumnDescription[] = [
        {
            dataField: "firstName",
            text: 'First Name',
            sortCaret: sortHandler,
            sort: true,
            style: {maxWidth: 150, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}
        },
        {
            dataField: "surname",
            text: 'Surname',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 150, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}
        },
        {
            dataField: "email",
            text: 'E-mail',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 150}
        },
    ];

        return (
        <Container>
            <Row className='mt-5'>
                <BootstrapTable
                    {...tableProps}
                    keyField='id'
                    data={data}
                    columns={columns}
                />
            </Row>
        </Container>
        )
  };

export default Workers;