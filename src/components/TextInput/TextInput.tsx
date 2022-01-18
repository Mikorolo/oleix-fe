import React, { FC } from 'react';
import { ErrorMessage, useField } from 'formik';
import { Form, FormControlProps } from 'react-bootstrap';

interface TextInputProps extends FormControlProps {
    name: string;
    label?: string;
    required?: boolean;
    rows?: number;
    maxLength?: number;
    onChange?: (e: any) => void;
    readOnly?: boolean;
    disabled?: boolean;
}

const TextInput: FC<TextInputProps> = ({ label, disabled, required, onChange, readOnly, ...props }) => {
    const [field, meta] = useField(props);

    const handleChange = (e: any) => {
        onChange?.(e);
        field.onChange(e);
    };

    const changeColorWhenDisabled = disabled ? 'border-secondary-light text-secondary-light' : null;

    return (
        <>
                <Form.Group controlId={field.name}>
                    <Form.Label>
                        {label}
                    </Form.Label>
                    <Form.Control
                        {...field}
                        {...props}
                        disabled={disabled}
                        className={`bg-white ${changeColorWhenDisabled}`}
                        onChange={handleChange}
                        isInvalid={!!(meta.touched && meta.error)}
                        autoComplete='off'
                    />

                    <ErrorMessage name={field.name}>
                        {(errorMessage) =>
                            <Form.Control.Feedback type='invalid'>
                                {errorMessage}
                            </Form.Control.Feedback>}
                    </ErrorMessage>
                </Form.Group>
        </>
    );
};

export default TextInput;
