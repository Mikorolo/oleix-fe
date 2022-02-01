import React from 'react';
import {Button, Col, Container} from "react-bootstrap";
import {Formik, Form} from "formik";
import {useCurrentUser} from "../../contexts/UserContext";
import axios from "axios";
import {url} from "../../consts/url";
import Axios from "axios";
import TextInput from "../../components/TextInput/TextInput";
import AsyncSelectInput from "../../components/AsyncSelectInput/AsyncSelectInput";

interface ApplicationsModel {
    studentId: string | undefined,
    recipientId: string
    title: string
    note: string
}

interface RecipientsModelItem {
    lecturerId: string,
    firstName: string,
    surname: string,
    email: string
}

interface RecipientsModel {
    list: RecipientsModelItem[],
    totalCount: number
}



const Applications = () => {
    const {currentUser} = useCurrentUser();

    const handleSubmit = async (values: ApplicationsModel) => {
        try {
            await Axios.post<any>(`${url}/api/applications`, values, {
                params: {
                    studentId: currentUser?.userId,
                    recipientId: values.recipientId
                }
            });
            console.log(values)
        }
        catch (e) {
            console.error(e);
        }
    }

    const loadOptions = async (phrase: string, link: string, pageLimit? :number) => {
        try {
            const { data } = await axios.get<RecipientsModel>(`${url}/api/${link}`, {
                params:{
                    phrase,
                    pageLimit,
                },
            });
            return data?.list.map((item) =>
                ({ id:item.lecturerId, name:[item.firstName, item.surname].filter(Boolean).join(', ') }));
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    return (
        <Container className='mt-5'>
            <Formik
                initialValues={{
                    studentId: currentUser?.userId,
                    recipientId: '',
                    title: '',
                    note: '',
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Col className='mb-3 m-auto w-50' sm={6} lg={4}>
                        <AsyncSelectInput
                            labelName='recipient'
                            valueName="recipientId"
                            label="Wybierz odbiorcę:"
                            loadOptions={(load) => loadOptions(load, 'lecturers')}
                            required
                        />
                    </Col>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <TextInput
                            name="title"
                            label="Wprowadź tytuł:"
                            placeholder="Wprowadź tytuł podania"
                            type="text"
                            className='passes-input'
                        />
                    </Col>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <TextInput
                            name="note"
                            label="Wprowadź treść"
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

export default Applications;