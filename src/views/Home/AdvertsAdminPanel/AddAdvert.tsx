import React from 'react';
import {Button, Col, Container} from "react-bootstrap";
import {Form, Formik} from "formik";
import TextInput from "../../../components/TextInput/TextInput";
import {useCurrentUser} from "../../../contexts/UserContext";
import Axios from "axios";
import {url} from "../../../consts/url";

interface AdvertsModel {
    deaneryWorkerId: string | undefined,
    title: string,
    note: string,
    date: string
}

const AddAdvert = () => {
    const { currentUser } = useCurrentUser();

    const handleAdvert = async(values: AdvertsModel) => {
        try {
            await Axios.post<any>(`${url}/api/adverts`, values, {

            });
            console.log(values)
        }
        catch (e) {
            console.error(e);
        }
    }
    return (
        <Container>
            <Formik
                initialValues={{
                    deaneryWorkerId: currentUser?.userId,
                    title: '',
                    note: '',
                    date: ''
                }}
                onSubmit={handleAdvert}>
                <Form>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <TextInput
                            name="title"
                            label="Wprowadź tytuł:"
                            placeholder="Wprowadź tytuł ogłoszenia"
                            type="text"
                        />
                    </Col>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <TextInput
                            name="note"
                            label="Treść:"
                            placeholder="Wprowadź treść ogłoszenia"
                            type="text"
                            as="textarea"
                            className='passes-input'
                        />
                    </Col>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <TextInput
                            name="date"
                            label="Data:"
                            placeholder="Wybierz datę:"
                            type="date"
                            className='passes-input'
                        />
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <Button type="submit" variant='success' className='mt-3 fw-bold text-white'>Utwórz</Button>
                    </Col>
                </Form>
            </Formik>
        </Container>
    );
};

export default AddAdvert;