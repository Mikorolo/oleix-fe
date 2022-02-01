import React from 'react';
import {Button, Col, Container} from "react-bootstrap";
import {Form, Formik} from "formik";
import TextInput from "../../../components/TextInput/TextInput";
import {useCurrentUser} from "../../../contexts/UserContext";
import Axios from "axios";
import axios from "axios";
import {url} from "../../../consts/url";
import AsyncSelectInput from "../../../components/AsyncSelectInput/AsyncSelectInput";
import {AdvertsModel} from "./DeleteAdvert";

interface AdvertsEditModel {
    advertId: string,
    deaneryWorkerId: string | undefined,
    title: string,
    note: string,
    date: string
}

const EditAdvert = () => {
    const { currentUser } = useCurrentUser();

    const handleAdvert = async(values: AdvertsEditModel) => {
        try {
            await Axios.put<any>(`${url}/api/adverts`, values, {
                params: {
                    advertId: values.advertId
                }
            });
            console.log(values)
        }
        catch (e) {
            console.error(e);
        }
    }

    const loadOptions = async (phrase: string, link: string) => {
        try {
            const { data } = await axios.get<AdvertsModel>(`${url}/api/${link}`, {
            });
            return data?.list.map((item) =>
                ({ id:item.advertId, name:[item.title, item.date].filter(Boolean).join(', ') }));
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    return (
        <Container>
            <Container>
                <Formik
                    initialValues={{
                        advertId: '',
                        deaneryWorkerId: currentUser?.userId,
                        title: '',
                        note: '',
                        date: ''
                    }}
                    onSubmit={handleAdvert}>

                    <Form>
                        <h5 className='d-flex justify-content-center m-auto'>Wybierz ogłoszenie do edycji:</h5>
                        <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                            <AsyncSelectInput
                                labelName='advert'
                                valueName="advertId"
                                label="Wybierz ogłoszenie do usunięcia:"
                                loadOptions={(load) => loadOptions(load, 'adverts')}
                                required
                            />
                        </Col>
                        <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                            <TextInput
                                name="title"
                                label="Tytuł:"
                                placeholder="Wprowadź tytuł ogłoszenia:"
                                type="text"
                                className='passes-input'
                            />
                        </Col>
                        <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                            <TextInput
                                name="note"
                                label="Treść:"
                                placeholder="Wprowadź treść ogłoszenia:"
                                type="text"
                                as="textarea"
                                className='passes-input'
                            />
                        </Col>
                        <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                            <TextInput
                                name="date"
                                label="Data:"
                                placeholder="Wybierz datę ogłoszenia:"
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
        </Container>
    );
};

export default EditAdvert;