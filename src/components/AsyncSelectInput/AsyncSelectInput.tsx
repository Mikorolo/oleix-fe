import React, { useState } from 'react';
import Select from 'react-select/async';
import { ErrorMessage, useField } from 'formik';
import { Form, Image } from 'react-bootstrap';
import { components } from 'react-select';

interface SelectOption {
    id: string | number;
    name: string;
    [key: string]: any;
}

interface AsyncSelectInputProps {
    valueName: string;
    labelName: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    loadOptions?: ((
        inputValue: string,
        callback: (options: ReadonlyArray<{ id: string; name: string; }>) => void,
    ) => Promise<ReadonlyArray<{ id: string; name: string; }>> | void) | undefined;
    isDisabled?: boolean;
    onChange?: (option: SelectOption | null) => void;
    readonly?: boolean;
}

const AsyncSelectInput: React.FC<AsyncSelectInputProps> = ({
                                                               valueName,
                                                               labelName,
                                                               placeholder,
                                                               loadOptions,
                                                               isDisabled,
                                                               onChange,
                                                           }) => {
    const [field, meta, helpers] = useField(valueName);
    const [labelField, , labelHelpers] = useField(labelName);
    const [inputValue, setInputValue] = useState('');
    const DropdownIndicator = (props: any) => (
        <components.DropdownIndicator {...props}>
            <Image src='' />
        </components.DropdownIndicator>
    );

    const handleChange = (selectedOption: any) => {
        helpers.setValue(selectedOption.id);
        labelHelpers.setValue(selectedOption.name);
        helpers.setTouched(false)
    };
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: meta.touched && meta.error ? '1px solid #dc3545!important' : null,
        }),
        menu: (provided: any) => ({
            ...provided,
            display: inputValue === '' ? 'none' : 'block',
        }),
        dropdownIndicator: (provided: any) => ({
            ...provided,
            display: meta.touched && meta.error ? 'block' : 'none',
        }),
    };

    return (
        <>
                <Form.Group>
                    <Select
                        getOptionLabel={(option) => (option.name)}
                        getOptionValue={(option) => (option.id)}
                        isDisabled={isDisabled}
                        components={{ DropdownIndicator }}
                        value={field.value || labelField.value ? { id: field.value, name: labelField.value } : null}
                        classNamePrefix='rs'
                        name={field.name}
                        placeholder={placeholder}
                        className='rs__value-container'
                        styles={customStyles}
                        loadOptions={loadOptions}
                        onChange={(option) => {
                            handleChange(option);
                            onChange?.(option as SelectOption);
                        }}
                        onInputChange={setInputValue}
                        onBlur={() => {
                            helpers.setTouched(true);
                        }}
                    />
                    <ErrorMessage name={field.name}>{(err) =>
                        <div className='mt-1 text-danger' style={{ fontSize: '14px' }}>
                            {err}
                        </div>}
                    </ErrorMessage>
                </Form.Group>
        </>
    );
};

export default AsyncSelectInput;
