import React from 'react';
import {Button, Col, Container, Form, FormLabel} from "react-bootstrap";
import {Formik, FormikHelpers} from "formik";

interface PassesModel {
    recipient: string
    title: string
    content: string
}

const Passes = () => {
    return (
        <Container className='mt-5'>
            <Formik
                initialValues={{
                    recipient: '',
                    title: '',
                    content: '',
                }}
                onSubmit={(
                    values: PassesModel,
                    { setSubmitting }: FormikHelpers<PassesModel>
                ) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form>
                    <Col className='mb-3 m-auto w-50' sm={6} lg={4}>
                        <FormLabel htmlFor="recipient" className='fw-bold'>Do kogo:</FormLabel>
                        <Form.Control
                            id="recipient"
                            name="recipient"
                            placeholder="Wprowadź odbiorcę"
                            type="text"
                            className='passes-input'
                        />
                    </Col>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <FormLabel htmlFor="title" className='fw-bold'>Tytuł podania:</FormLabel>
                        <Form.Control
                            id="title"
                            name="title"
                            placeholder="Wprowadź tytuł podania"
                            type="text"
                            className='passes-input'
                        />
                    </Col>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <FormLabel htmlFor="password" className='fw-bold'>Treść podania:</FormLabel>
                        <Form.Control
                            id="content"
                            name="content"
                            placeholder="Wprowadź treść podania"
                            type="text"
                            as="textarea"
                            rows={5}
                            className='passes-input'
                        />
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <Button type="submit" variant='warning' className='mt-3 fw-bold text-black'>Wyślij</Button>
                    </Col>
                </Form>
            </Formik>
        </Container>
    );
};

export default Passes;