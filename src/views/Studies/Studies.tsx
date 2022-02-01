import * as React from 'react';
import {useEffect, useState} from 'react';
import {Formik,} from 'formik';
import {Col, Container, Form, ListGroup} from 'react-bootstrap';
import SideMenu from "../../components/SideMenu/SideMenu";
import axios from "axios";
import {url} from "../../consts/url";

interface MyFormValues {
    course: string;
    department: string;
}

interface CoursesModelItem {
    id: string;
    name: string;
}

interface DepartmentsModelItem {
    id: string;
    name: string;
}

const Studies: React.FC = () => {
    const initialValues: MyFormValues = { course: '', department: '' };
    const [coursesPhrase, setCoursesPhrase] = useState('');
    const [departmentPhrase, setDepartmentPhrase] = useState('');
    const [courses, setCourses] = useState<CoursesModelItem[]>([]);
    const [departments, setDepartments] = useState<DepartmentsModelItem[]>([]);
    const [active, setActive] = useState<string>();

    useEffect(() => {
        const fetchStudies = async() => {
            try {
                const res = await axios.get(`${url}/api/dictionaries/degree-courses`, {
                    params: {
                        phrase: coursesPhrase
                    }
                })
                setCourses(res.data.list);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchStudies().catch();
    }, [coursesPhrase])

    useEffect(() => {
        const fetchStudies = async() => {
            try {
                const res = await axios.get(`${url}/api/dictionaries/departments`, {
                    params: {
                        phrase: departmentPhrase
                    }
                })
                setDepartments(res.data.list);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchStudies().catch();
    }, [departmentPhrase])

    return (
        <Container>
            <SideMenu/>
            <h2 className='mt-5'>Kierunki i programy studiów:</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, {setSubmitting}) => {
                    setCoursesPhrase(values.course);
                    setDepartmentPhrase(values.department);
                    setSubmitting(false);
                }}
            >
                <Col className='mt-4 w-50'>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="keyword">
                            <Form.Label>Wydziały:</Form.Label>
                            <Form.Control
                                onChange={(e) => { setDepartmentPhrase(e.target.value);}}
                                type="text"
                                name='department'
                                placeholder="Tutaj możesz podać nazwę wydziału"
                                onFocus={() => { setActive('departments')}}
                            />
                            <Form.Text className="text-muted">
                                Przykłady zapytań: Wydział Elektroniki Automatyki i Informatyki <br/>
                                Uwaga: musisz podać co najmniej 1 znak
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="keyword">
                            <Form.Label>Kierunki i programy studiów:</Form.Label>
                            <Form.Control
                                onChange={(e) => { setCoursesPhrase(e.target.value); }}
                                type="text"
                                name='course'
                                placeholder="Wpisz kod lub nazwę szukanego kierunku"
                                onFocus={() => { setActive('courses')}}
                            />
                            <Form.Text className="text-muted">
                                Przykłady zapytań: informatyka dzienne albo biologia zaoczne magisterskie <br/>
                                Uwaga: musisz podać co najmniej 3 znaki
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    {departmentPhrase.length || coursesPhrase.length > 2 ? active === 'courses' ? courses.map((item) => (
                            <ListGroup>
                                <ListGroup.Item action>
                                    {item.name}
                                </ListGroup.Item>
                            </ListGroup>
                        )) :
                        departments.map((item) => (
                                <ListGroup>
                                    <ListGroup.Item action>
                                        {item.name}
                                    </ListGroup.Item>
                                </ListGroup>
                        )) : null}
                </Col>
            </Formik>
        </Container>
    );
};

export default Studies;