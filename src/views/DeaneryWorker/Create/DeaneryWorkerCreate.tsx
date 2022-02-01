import { Formik } from "formik";
import { Container } from "react-bootstrap";
import { url } from "../../../consts/url";
import { Form } from "formik";
import { Col } from "react-bootstrap";
import TextInput from "../../../components/TextInput/TextInput";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const DeaneryWorkerCreate = () => {
    
    const history = useHistory();

    interface DeaneryWorker
    {
        cardId:string,
        firstName:string,
        surname:string,
        phoneNumber:string,
        email:string
    }

    const initialValues:DeaneryWorker = {

        cardId:'99999999',
        firstName:'Imię',
        surname:'Nazwisko',
        phoneNumber:'+48666666666',
        email:'@tu.kielce.pl'

    }

    const handleSubmit = async (values: DeaneryWorker) => {
        try {
            await axios.post<any>(`${url}/api/deaneryWorkers`, values);
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
                        name='cardId'
                        label='Nr. indeksu:'
                        required
                    />
                </Col>
                <Col sm={6} lg={4} className='m-auto mt-3'>
                    <TextInput
                        name='firstName'
                        label='Imię:'
                        required
                    />
                </Col>

                <Col sm={6} lg={4} className='m-auto mt-3'>
                    <TextInput
                        name='surname'
                        label='Nazwisko:'
                        required
                    />
                </Col>

                
                <Col sm={6} lg={4} className='m-auto mt-3'>
                    <TextInput
                        name='phoneNumber'
                        label='Numer tel.:'
                        required
                    />
                </Col>

                <Col sm={6} lg={4} className='m-auto mt-3'>
                    <TextInput
                        name='email'
                        label='Adres Email:'
                        required
                    />
                </Col>
                <Button type="submit" className='d-flex justify-content-center mx-auto mt-3' onClick={() => {history.goBack()}}>Wyślij</Button>
                
            </Form>
        </Formik>
    </Container>
        );
}

export default DeaneryWorkerCreate;