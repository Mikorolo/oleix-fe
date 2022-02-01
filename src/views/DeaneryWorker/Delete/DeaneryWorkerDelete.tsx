import { Formik } from "formik";
import { Container } from "react-bootstrap";
import { url } from "../../../consts/url";
import { Form } from "formik";
import { Col } from "react-bootstrap";
import TextInput from "../../../components/TextInput/TextInput";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";


const DeaneryWorkerPut = () => {
    
    const history = useHistory();
    const workerId = useState();

    interface DeaneryWorker
    {
        deaneryWorkerId: string
    }

    const initialValues:DeaneryWorker = {

        deaneryWorkerId: ''

    }

    const handleSubmit = async(values: DeaneryWorker) => {
        try {
            await axios.delete<any>(`${url}/api/deaneryWorkers`, {
                params: {
                    deaneryWorkerId: values.deaneryWorkerId
                }
            });
            console.log(values)
        }
        catch (e) {
            console.error(e);
        }
    }


    return(
    <Container>
        <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        >
            <Form noValidate>

                <Col sm={6} lg={4} className='m-auto mt-3'>
                    <TextInput
                        name='deaneryWorkerId'
                        label='Identyfikator pracownika:'
                        required
                    />
                </Col>

                <Button type="submit" className='d-flex justify-content-center mx-auto mt-3' onClick={() => {}}>Wyślij</Button>
                
            </Form>
        </Formik>
    </Container>
        );
}

export default DeaneryWorkerPut;