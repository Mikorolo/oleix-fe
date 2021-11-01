import { Formik, FormikHelpers} from 'formik';
import React from 'react';
import {Button, Col, Container, Form, FormLabel, Image, Row} from 'react-bootstrap';
import loginPageLogo from '../../assets/img/loginPageLogo.png';

interface LoginModel {
    email: string;
    password: string;
}

const Login = () => {
    return (
        <div>
            <Image src={loginPageLogo} className='d-flex mx-auto' />
            <Container>
                <Row>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={(
                            values: LoginModel,
                            { setSubmitting }: FormikHelpers<LoginModel>
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
                                <FormLabel htmlFor="password" className='fw-bold'>Hasło:</FormLabel>
                                <Form.Control
                                    id="password"
                                    name="password"
                                    placeholder="Podaj hasło"
                                    type="password"
                                    className='login-input'
                                />
                            </Col>
                            <Col className='justify-content-center d-flex'>
                                <Button type="submit" variant='warning' className='mt-3 fw-bold text-black'>Zaloguj</Button>
                            </Col>
                            <Col className='justify-content-center d-flex'>
                                <Button variant='link' className='forgot-password-text'>Nie pamiętam hasła</Button>
                            </Col>
                        </Form>
                    </Formik>
                </Row>
            </Container>
        </div>
    );
};

export default Login;