import React from 'react';
import BootstrapTable, {ColumnDescription} from "react-bootstrap-table-next";
import {Container, Row} from "react-bootstrap";
import useTableProps, {sortHandler} from "../../hooks/useTableProps";
import {url} from "../../consts/url";

interface StudentsModel {
    studentId: string,
    groupId: string,
    firstName: string,
    surname: string,
    email: string,
    indexNumber: number,
}

interface StudentsListItem {
    list: StudentsModel[],
    totalCount: number
}

const StudentsList = () => {
    const { data, tableProps } = useTableProps<StudentsListItem>(`${url}/api/students`);

    const columns: ColumnDescription[] = [
        {
            dataField: "groupName",
            text: 'Group',
            style: {maxWidth: 100, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}
        },
        {
            dataField: "firstName",
            text: 'First Name',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 30}
        },
        {
            dataField: "surname",
            text: 'Surname',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 60}
        },
        {
            dataField: "email",
            text: 'Email',
            sort: true,
            sortCaret: sortHandler,
            style: {maxWidth: 150, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}
        },
        {
            dataField: "indexNumber",
            text: 'Index number',
            style: {maxWidth: 150, textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap"}
        },
    ];

    return (
            <Container className='mt-5'>
                <div>
                    <Row>
                        <BootstrapTable
                            {...tableProps}
                            data={data}
                            keyField='studentId'
                            columns={columns}
                            />
                    </Row>
                </div>
            </Container>
    );
};

export default StudentsList;