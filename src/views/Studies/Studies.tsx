import * as React from 'react';
import {
    Formik,
    FormikHelpers,
    FormikProps,
    Field,
    FieldProps,
} from 'formik';
import {Col, Container, Form} from 'react-bootstrap';
import SideMenu from "../../components/SideMenu/SideMenu";

interface MyFormValues {
    keyword: string;
}

const Studies: React.FC<{}> = () => {
    const initialValues: MyFormValues = { keyword: '' };
    return (
        <Container>
            <SideMenu/>
            <h2 className='mt-5'>Kierunki i programy studiów:</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                <Col className='mt-4 w-50'>
                    <Form>
                        <Form.Group className="mb-3" controlId="keyword">
                            <Form.Label>Kierunki i programy studiów:</Form.Label>
                            <Form.Control type="text" placeholder="Wpisz kod lub nazwę szukanego kierunku" />
                            <Form.Text className="text-muted">
                                Przykłady zapytań: informatyka dzienne albo biologia zaoczne magisterskie
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
            </Formik>
        </Container>
    );
};

export default Studies;