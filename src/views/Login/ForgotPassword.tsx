import { Formik, FormikHelpers} from 'formik';
import React, {useState} from 'react';
import {Button, Col, Container, Form, FormLabel, Image, Row, Toast} from 'react-bootstrap';
import loginPageLogo from '../../assets/img/loginPageLogo.png';
import {useHistory} from "react-router-dom";

interface ForgotPasswordModel {
    email: string;
    pesel: string;
}

const ForgotPassword = () => {
    const history = useHistory();
    const [show, setShow] = useState(false);
    return (
        <div>
            <Image src={loginPageLogo} className='d-flex mx-auto' />
            <Container>
                <Row>
                    <Formik
                        initialValues={{
                            email: '',
                            pesel: '',
                        }}
                        onSubmit={(
                            values: ForgotPasswordModel,
                            { setSubmitting }: FormikHelpers<ForgotPasswordModel>
                        ) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 500);
                        }}
                    >
                        <Form>
                            <Col className='mb-3 m-auto' sm={6} lg={4}>
                                <FormLabel htmlFor="email" className='fw-bold'>Email:</FormLabel>
                                <Form.Control
                                    id="email"
                                    name="email"
                                    placeholder="Wprowadź adres e-mail"
                                    type="email"
                                    className='login-input'
                                />
                            </Col>
                            <Col sm={6} lg={4} className='m-auto mt-3'>
                                <FormLabel htmlFor="pesel" className='fw-bold'>PESEL:</FormLabel>
                                <Form.Control
                                    id="pesel"
                                    name="pesel"
                                    placeholder="Podaj pesel"
                                    type="text"
                                    className='login-input'
                                />
                            </Col>
                            <Col className='justify-content-center d-flex'>
                                <Button type="button" variant='warning' className='mt-3 fw-bold text-black' onClick={() => {setShow(true);}}>Zresetuj hasło</Button>
                            </Col>
                        </Form>
                    </Formik>
                </Row>
                <Toast onClose={() => {setShow(false); history.push('/login')}} show={show} delay={3000} autohide className='login-toast'>
                    <Toast.Header>
                        <img
                            src=""
                            className="rounded"
                            alt=""
                        />
                        <strong className="me-auto">Reset hasła</strong>
                    </Toast.Header>
                    <Toast.Body>Hasło zostało zresetowane pomyślnie</Toast.Body>
                </Toast>
            </Container>
        </div>
    );
};

export default ForgotPassword;