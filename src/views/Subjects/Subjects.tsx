import React from "react"
import {Button, Col, Container, Form, FormLabel, Image, Placeholder, Row} from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";
import {Formik, FormikHelpers} from "formik";
import subjectsBackgorund from '../../assets/img/subjectsBackground.png';

interface SubjectsModel {
    search: string,
    catalogue: string,
    group: string,
}

const Subjects = () => {
    
    return (
        <Container>
            <Image src={subjectsBackgorund} className='subjects-background '/>
            <SideMenu/>
            <h2 className='d-flex justify-content-center mt-3 mb-5 text-white'>Przedmioty:</h2>
            <Row>
                <Formik
                    initialValues={{
                        search: '',
                        catalogue: '',
                        group: ''
                    }}
                    onSubmit={(
                        values: SubjectsModel,
                        { setSubmitting }: FormikHelpers<SubjectsModel>
                    ) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <Col className='mb-3 m-auto' sm={6} lg={4}>
                            <FormLabel htmlFor="search" className='fw-bold text-white'>Wyszukiwarka przedmiotów:</FormLabel>
                            <Row>
                                <Col className='w-100 d-flex '>
                                    <Form.Control
                                        id="search"
                                        name="search"
                                        placeholder="Wprowadź słowo kluczowe"
                                        type="text"
                                        className='login-input'
                                    />
                                </Col>
                                <Row className='d-flex w-25 justify-content-end search-button-position'>
                                    <Button type="submit" variant='secondary' className='mt-3 fw-bold text-white'>Szukaj</Button>
                                </Row>
                                <div className="w-75 mt-3 mx-3 border-1 hints-style text-white" style={{height: "60px"}} ><span className='mt-1 hint-text' style={{color: 'whitesmoke'}}>Powyżej możesz wpisać część kodu lub nazwy szukanego przedmiotu</span></div>
                            </Row>
                        </Col>
                        <Col sm={6} lg={4} className='m-auto mt-3'>
                            <FormLabel htmlFor="catalogue" className='fw-bold text-white'>Katalog:</FormLabel>
                            <Form.Control
                                id="catalogue"
                                name="catalogue"
                                placeholder="Podaj nazwę jednostki organizacyjnej"
                                type="text"
                                className='login-input'
                            />
                        </Col>
                        <Col sm={6} lg={4} className='m-auto mt-3'>
                            <FormLabel htmlFor="group" className='fw-bold text-white'>Plan grupy przedmiotów:</FormLabel>
                            <Form.Control
                                id="group"
                                name="group"
                                placeholder="Podaj nazwę jednostki organizacyjnej"
                                type="text"
                                className='login-input'
                            />
                        </Col>
                    </Form>
                </Formik>
            </Row>
        </Container>
    );
};

export default Subjects;