import React from 'react';
import {url} from "../../../../consts/url";
import axios from "axios";
import {Button, Col, Container} from "react-bootstrap";
import {Form, Formik} from "formik";
import AsyncSelectInput from "../../../../components/AsyncSelectInput/AsyncSelectInput";

interface ApplicationsDecideModelItem {
    applicationId: string,
    studentId: string,
    recipientId: string,
    title: string,
    note: string,
    isApproved: string
}

interface ApplicationsDecideModel {
    list: ApplicationsDecideModelItem[],
    totalCount: number
}

interface ApplicationValues {
    applicationId: string
}

const DecideApplication = () => {

    const handleApplication = async(values: ApplicationValues) => {
        try {
            await axios.put<any>(`${url}/api/applications/approve`,  null,{
                params: {
                    applicationId: values.applicationId
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
            const { data } = await axios.get<ApplicationsDecideModel>(`${url}/api/${link}`, {

            });
            return data?.list.filter((item) => !item.isApproved).map((item) =>
                ({id:item.applicationId, name:[item.title, !item.isApproved].filter(Boolean).join(', ')}));
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
                        applicationId: ''
                    }}
                    onSubmit={handleApplication}>
                    <Form>
                        <h5 className='d-flex justify-content-center m-auto'>Wybierz ogłoszenie do edycji:</h5>
                        <Col sm={6} lg={4} className='m-auto mt-3 w-50'>
                            <AsyncSelectInput
                                labelName='application'
                                valueName="applicationId"
                                label="Wybierz podanie dla którego chesz zadecydować:"
                                loadOptions={(load) => loadOptions(load, 'applications')}
                                required
                            />
                        </Col>
                        <Col className='justify-content-center d-flex'>
                            <Button type="submit" variant='success' className='mt-3 fw-bold text-white'>Zatwiedź</Button>
                        </Col>
                    </Form>
                </Formik>
            </Container>
        </Container>
    );
};

export default DecideApplication;