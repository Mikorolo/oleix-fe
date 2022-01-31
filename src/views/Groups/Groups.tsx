import React from "react";
import {Button, Col, Container} from "react-bootstrap";
import { useEffect, useState } from "react";
import {url} from "../../consts/url";
import axios from "axios";
import TextInput from "../../components/TextInput/TextInput";
import {Form, Formik} from 'formik';
import { useHistory } from "react-router-dom";


const Groups = () => {

    interface GroupModelItem 
    {
        degreeCourseId:string,
        name:string,
        term:number,
    }

    const initialValues:GroupModelItem = {
        degreeCourseId: "",
        name: "1ID11A",
        term: 0
    }


    const history = useHistory();
    const [data, setData] = useState();

    const handleSubmit = async (values: GroupModelItem) => {
        try {
            await axios.post<any>(`${url}/api/groups`, values);
            console.log(values)
        }
        catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        const fetchGroupsCourses = async() => {
            try {
                const res = await axios.get(`${url}/api/dictionaries/degree-courses`);
                setData(res.data.list);
            }
            catch (e) {
                console.error(e);
            }
        }
        fetchGroupsCourses().catch();
    },[])

    return(
        <Container>
            <Col className='mt-5'>
             <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                    <Form noValidate>
                        <Col className='mb-3 m-auto' sm={6} lg={4}>
                            <TextInput
                                name='degreeCourseId'
                                label='Kurs'
                                required
                            />
                        </Col>
                        <Col sm={6} lg={4} className='m-auto mt-3'>
                            <TextInput
                                name='name'
                                label='Nazwa grupy'
                                required
                            />
                        </Col>
                        <Col sm={6} lg={4} className='m-auto mt-3'>
                            <TextInput
                                name='term'
                                label='Semestr'
                                required
                            />
                        </Col>
                        <Button type="submit" className='d-flex justify-content-center mx-auto mt-3' onClick={() => {history.goBack()}}>Wyślij</Button>
                    </Form>
            </Formik>

        </Col>
        </Container>
    )
}

export default Groups;