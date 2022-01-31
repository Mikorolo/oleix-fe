import {Form, Formik} from 'formik';
import React from 'react';
import {Button, Col, Container} from "react-bootstrap";
import {useHistory, useParams} from "react-router-dom";
import Axios from "axios";
import TextInput from "../../../components/TextInput/TextInput";
import {url} from "../../../consts/url";
import {useCurrentUser} from "../../../contexts/UserContext";

interface PollModelItem {
    studentId: string | undefined,
    lecturerId: string,
    note: string,
    rating: number,
}

const FillPoll = () => {
    const history = useHistory();
    const { lecturerId } : { lecturerId: string } = useParams();
    const {currentUser} = useCurrentUser();

        const handleSubmit = async (values: PollModelItem) => {
            try {
                await Axios.post<any>(`${url}/api/questionnaries`, values);
            }
            catch (e) {
                console.error(e);
            }
        }

        const initialValues : PollModelItem = {
            studentId: currentUser?.userId,
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
                            <Button type="submit" className='d-flex justify-content-center mx-auto mt-3' >Wyślij</Button>
                        </Form>
                </Formik>

            </Col>
        </Container>
    );
};

export default FillPoll;