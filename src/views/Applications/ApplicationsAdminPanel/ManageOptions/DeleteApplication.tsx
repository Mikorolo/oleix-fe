import React from 'react';
import Axios from "axios";
import {url} from "../../../../consts/url";
import axios from "axios";
import {Button, Col, Container} from "react-bootstrap";
import {Form, Formik} from "formik";
import AsyncSelectInput from "../../../../components/AsyncSelectInput/AsyncSelectInput";

interface ApplicationsDeleteModel {
    applicationId: string
}

interface ApplicationsModelItem {
    applicationId: string,
    studentId: string,
    recipientId: string,
    title: string,
    note: string,
    isApproved: boolean
}

interface ApplicationsModel {
    list: ApplicationsModelItem[],
}

    const DeleteApplication = () => {
    const handleApplication = async(values: ApplicationsDeleteModel) => {
        try {
            await Axios.delete(`${url}/api/applications`, {
                params: {applicationId: values.applicationId}
            });
            console.log(values)
        }
        catch (e) {
            console.error(e);
        }
    }

    const loadOptions = async (phrase: string, link: string) => {
        try {
            const { data } = await axios.get<ApplicationsModel>(`${url}/api/${link}`);
            return data?.list.map((item) =>
                ({ id:item.applicationId, name:[item.title, item.isApproved ? 'Zatwierdzone' : 'Odrzucone'].filter(Boolean).join(', ') }));
        } catch (e) {
            console.error(e);
            return [];
        }
    };

    return (
        <Container>
            <h5 className='d-flex justify-content-center m-auto'>
                Wpisz które podanie chcesz usunąć i wybierz je z listy:
            </h5>
            <Formik
                initialValues={{
                    applicationId: ''
                }}
                onSubmit={handleApplication}>
                <Form>
                    <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                        <AsyncSelectInput
                            labelName='application'
                            valueName="applicationId"
                            label="Wybierz podanie do usunięcia:"
                            loadOptions={(load) => loadOptions(load, 'applications')}
                            required
                        />
                    </Col>
                    <Col className='justify-content-center d-flex'>
                        <Button type="submit" variant='success' className='mt-3 fw-bold text-white'>Usuń</Button>
                    </Col>
                </Form>
            </Formik>
        </Container>
    );
};

export default DeleteApplication;