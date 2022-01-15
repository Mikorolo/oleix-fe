import {Formik, FormikHelpers} from 'formik';
import React from 'react';
import {Button, Col, Container, Form, FormLabel, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

interface Values {
    note: string;
    rating: number;
}

const FillPoll = () => {
    const history = useHistory();
    return (
        <Container>
            <Row className='mt-5'>
                <Formik
                    initialValues={{
                        note: '',
                        rating: 0,
                    }}
                    onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                        <Form>
                            <Col className='mb-3 m-auto' sm={6} lg={4}>
                                <FormLabel htmlFor="search" className='fw-bold'>Uwagi:</FormLabel>
                                <Row>
                                    <Col className='w-100 d-flex'>
                                        <Form.Control
                                            id="note"
                                            name="note"
                                            placeholder="Tutaj wprowadź swoje uwagi i spostrzeżenia odnośnie prowadzącego"
                                            as="textarea"
                                            rows={3}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6} lg={4} className='m-auto mt-3'>
                                <FormLabel htmlFor="rating" className='fw-bold'>Ocena:</FormLabel>
                                <Form.Control
                                    id="rating"
                                    name="rating"
                                    type="number"
                                    min='0'
                                    max='100'
                                    placeholder='0'
                                />
                            </Col>
                            <Button type='submit' className='d-flex justify-content-center mx-auto mt-3' onClick={() => history.push('/polls')}>Wyślij</Button>
                        </Form>

                </Formik>
            </Row>
        </Container>
    );
};

export default FillPoll;