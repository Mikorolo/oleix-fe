import React from 'react';
import Axios from "axios";
import axios from "axios";
import {url} from "../../../consts/url";
import {Button, Col, Container} from "react-bootstrap";
import {Form, Formik} from "formik";
import AsyncSelectInput from "../../../components/AsyncSelectInput/AsyncSelectInput";

interface AdvertsDeleteModel {
    advertId: string
}

interface AdvertsModelItem {
    advertId: string,
    title: string,
    note: string,
    date: string
}

export interface AdvertsModel {
    list: AdvertsModelItem[],
    totalCount: number
}

const DeleteAdvert = () => {

    const handleAdvert = async(values: AdvertsDeleteModel) => {
        try {
            await Axios.delete(`${url}/api/adverts`, {
                params: {
                    advertId: values.advertId
                }});
            console.log(values)
        }
        catch (e) {
            console.error(e);
        }
    }

    const loadOptions = async (phrase: string, link: string, pageLimit? :number) => {
        try {
            const { data } = await axios.get<AdvertsModel>(`${url}/api/${link}`);
            return data?.list.map((item) =>
                ({ id:item.advertId, name:[item.title, item.date].filter(Boolean).join(', ') }));
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    return (
        <Container>
            <h5 className='d-flex justify-content-center m-auto'>
                Wpisz które ogłoszenie chcesz usunąć i wybierz je z listy:
            </h5>
            <Formik
                initialValues={{
                    advertId: ''
                }}
                onSubmit={handleAdvert}>
                <Form>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <AsyncSelectInput
                            labelName='advert'
                            valueName="advertId"
                            label="Wybierz ogłoszenie do usunięcia:"
                            loadOptions={(load) => loadOptions(load, 'adverts')}
                            required
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

export default DeleteAdvert;