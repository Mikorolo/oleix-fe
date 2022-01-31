import { Formik, Form} from 'formik';
import React from 'react';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import loginPageLogo from '../../assets/img/loginPageLogo.png';
import {useHistory} from "react-router-dom";
import Axios from "axios";
import TextInput from "../../components/TextInput/TextInput";
import {useCurrentUser} from "../../contexts/UserContext";
import { url } from "../../consts/url";

interface LoginModel {
    email: string;
    password: string;
}

const Login = () => {
    const history = useHistory();
    const { setIsPending, fetchUserData } = useCurrentUser();

    const handleLogin = async (values: LoginModel) => {
        try {
            const data = await Axios.post<any>(`${url}/api/auth/login`, values, {withCredentials: true});
            console.log(values)
            if (data.status === 200) {
                setIsPending(true);
                history.push('/');
                await fetchUserData()
            }
        }
        catch (e) {
            console.error(e);
        }
    }

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
                        onSubmit={handleLogin}
                    >
                        <Form>
                            <Col className='mb-3 m-auto' sm={6} lg={4}>
                                <TextInput
                                    name='email'
                                    label='E-mail:'
                                    required
                                />
                            </Col>
                            <Col sm={6} lg={4} className='m-auto mt-3'>
                                <TextInput
                                    name='password'
                                    label='Hasło:'
                                    required
                                    type="password"
                                />
                            </Col>
                            <Col className='justify-content-center d-flex'>
                                <Button type="submit" variant='warning' className='mt-3 fw-bold text-black'>Zaloguj</Button>
                            </Col>
                            <Col className='justify-content-center d-flex'>
                                <Button variant='link' className='forgot-password-text' onClick={() => history.push('/set-password')}>Zarejestruj</Button>
                            </Col>
                        </Form>
                    </Formik>
                </Row>
            </Container>
        </div>
    );
};

export default Login;