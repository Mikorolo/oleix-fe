import React, {useEffect, useState} from "react"
import {
    Button,
    Col,
    Container,
    Form,
    FormLabel,
    Image,
    ListGroup,
    ListGroupItem,
    Row
} from "react-bootstrap";
import SideMenu from "../../components/SideMenu/SideMenu";
import {Formik} from "formik";
import subjectsBackgorund from '../../assets/img/subjectsBackground.png';
import axios from "axios";
import {url} from "../../consts/url";

interface SubjectsInterface {
    id: string;
    name: string;
}

const Subjects = () => {
    const [data, setData] = useState<SubjectsInterface[]>([]);
    const [subjectPhrase, setSubjectPhrase] = useState('');
    
    useEffect(() => {
        const fetchSubjects = async() => {
            try {
                const res = await axios.get(`${url}/api/dictionaries/subjects`, {
                    params: {
                        phrase: subjectPhrase
                    }
                });
                setData(res.data.list);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchSubjects().catch();
    },[subjectPhrase])
    
    return (
        <Container>
            <Image src={subjectsBackgorund} className='subjects-background '/>
            <SideMenu/>
            <h2 className='d-flex justify-content-center mt-3 mb-5 text-white'>Przedmioty:</h2>
            <Row>
                <Formik
                    initialValues={{
                        subjectPhrase: '',
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        setSubjectPhrase(values.subjectPhrase);
                        setSubmitting(false);
                    }}
                >
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Col className='mb-3 m-auto' sm={6} lg={4}>
                            <FormLabel htmlFor="search" className='fw-bold text-white'>Wyszukiwarka przedmiotów:</FormLabel>
                            <Row>
                                <Col className='w-100 d-flex '>
                                    <Form.Control
                                        id="subjectPhrase"
                                        name="subjectPhrase"
                                        placeholder="Wprowadź słowo kluczowe"
                                        type="text"
                                        className='login-input'
                                        onChange={(e) => { setSubjectPhrase(e.target.value);}}
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
                <Col className='mt-4 justify-content-center d-flex'>
                    {subjectPhrase.length > 1 ? data.map((item) => (
                        <ListGroup>
                            <ListGroupItem action className='mx-1'>
                                {item.name}
                            </ListGroupItem>
                        </ListGroup>
                    )) : null}
                </Col>
            </Row>
        </Container>
    );
};

export default Subjects;