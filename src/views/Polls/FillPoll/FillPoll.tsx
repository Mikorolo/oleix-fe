import {Form, Formik} from 'formik';
import React from 'react';
import {Button, Col, Container} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import Axios from "axios";
import TextInput from "../../../components/TextInput/TextInput";

interface PollModelItem {
    studentId: string,
    lecturerId: string,
    note: string,
    rating: number,
}

const FillPoll = () => {
    const history = useHistory();
    const { lecturerId } : { lecturerId: string } = useParams();

        const handleSubmit = async (values: PollModelItem) => {
            try {
                await Axios.post<any>("https://localhost:44362/api/questionnaries", values);
                console.log(values)
            }
            catch (e) {
                console.error(e);
            }
        }

        const initialValues : PollModelItem = {
            studentId: '85664330-8b99-49d4-91e4-ea3d63287bb9',
            lecturerId: lecturerId,
            note: '',
            rating: 0,
        }

    return (
        <Container>
            <Col className='mt-5'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                        <Form noValidate>
                            <Col className='mb-3 m-auto' sm={6} lg={4}>
                                <TextInput
                                    as = 'textarea'
                                    name='note'
                                    label='Uwagi:'
                                    required
                                />
                            </Col>
                            <Col sm={6} lg={4} className='m-auto mt-3'>
                                <TextInput
                                    name='rating'
                                    type='number'
                                    label='Ocena'
                                    required
                                />
                            </Col>
                            <Button type="submit" className='d-flex justify-content-center mx-auto mt-3' onClick={() => history.goBack()}>Wyślij</Button>
                        </Form>
                </Formik>

            </Col>
        </Container>
    );
};

export default FillPoll;