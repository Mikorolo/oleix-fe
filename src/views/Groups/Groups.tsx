import React from "react";
import {Button, Col, Container} from "react-bootstrap";
import { useEffect, useState } from "react";
import {url} from "../../consts/url";
import axios from "axios";
import TextInput from "../../components/TextInput/TextInput";
import {Form, Formik} from 'formik';
import { useHistory } from "react-router-dom";
import AsyncSelectInput from "../../components/AsyncSelectInput/AsyncSelectInput";


const Groups = () => {

    interface DegreeCoursesModel
    {
        list: DegreeCoursesModelItem[],
        totalCount: number,
    }

    interface DegreeCoursesModelItem
    {
        id:string,
        name:string,
    }


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

    const loadOptions = async (phrase: string, link: string, pageLimit? :number) => {
        try {
            const { data } = await axios.get<DegreeCoursesModel>(`${url}/api/dictionaries/${link}`, {
                params:{
                    phrase,
                    pageLimit,
                },
            });
            return data?.list.map((item) =>
                ({ id:item.id, name:[item.name].filter(Boolean).join(', ') }));
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    return(
        <Container>
            <Col className='mt-5'>
             <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                    <Form noValidate>
                        <Col className='mb-3 m-auto w-50' sm={6} lg={4}>
                            <AsyncSelectInput
                                labelName='degree-courses'
                                valueName="degreeCourseId"
                                label="Kierunek:"
                                loadOptions={(load) => loadOptions(load, 'degree-courses')}
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