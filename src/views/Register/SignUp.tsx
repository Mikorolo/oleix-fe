import { Form, Formik } from 'formik';
import React from 'react';
import Axios from 'axios';
import { Button, Col, ColProps, Container, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import {url} from "../../consts/url";
import TextInput from "../../components/TextInput/TextInput";
import {useQuery} from "../../hooks/useQuery";

interface FormikSignUpInitialValues {
    newPassword: string
    newPasswordConfirm: string
}

const formikValues: FormikSignUpInitialValues = {
    newPassword: '',
    newPasswordConfirm: '',
};

const colProps: ColProps = {
    xs: 12,
    md: 6,
    lg: 4,
    className: 'mt-5',
};

const SignUp = () => {
    const query = useQuery();
    const userId = query.get('userId');
    const token = query.get('token');
    const history = useHistory();

    const handleSignUp = async (values: FormikSignUpInitialValues) => {
        try {
            await Axios.patch(`${url}/api/auth/${userId}/password`, values, {
                params: {
                    userId,
                    token,
                },
            });
            history.push('/');
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <>
            <Container>
                <Formik
                    initialValues={formikValues}
                    onSubmit={handleSignUp}
                >
                    <Form noValidate style={{ marginTop: '15vh' }}>
                        <Row className='justify-content-center'>
                            <Col {...colProps}>
                                <TextInput
                                    name='newPassword'
                                    label='Nowe hasło'
                                    required
                                    type='password'
                                />
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col {...colProps}>
                                <TextInput
                                    name='newPasswordConfirm'
                                    label='Potwierdź hasło'
                                    required
                                    type='password'
                                />
                            </Col>
                        </Row>
                        <Row className='justify-content-center'>
                            <Col {...colProps}>
                                <Button
                                    type="submit"
                                    className='float-end'
                                >
                                    Zaloguj się
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </Container>
        </>
    );
};

export default SignUp;