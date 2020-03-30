import React, {useState} from 'react';
import axios from 'axios';
import {FormHeader} from "./FormHeader";
import {SendButton} from "./SendButton";
import {FormResultAlert} from "./FormResultAlert";

const Form = props => {
    const initialData = {};
    props.formData.map(Input => {
        initialData[Input.name] = {
            value: typeof (Input.initialValue) === 'undefined' ? '' : Input.initialValue,
            error: false
        };
    });
    const [data, setData] = useState(initialData);
    const [result, setResult] = useState({
        completed: false
    });
    const createHandleChange = inputName => value => setData(prevData => ({
        ...prevData,
        [inputName]: {
            value: value,
            error: false
        }
    }));
    const handleSend = () => {
        let correct = true;
        props.formData.map(Input => {
            if (!Input.check(data[Input.name].value)) {
                setData(prevData => ({
                    ...prevData,
                    [Input.name]: {
                        value: prevData[Input.name].value,
                        error: true
                    }
                }));
                correct = false;
            }
        });
        if (correct) {
            const application = {};
            Object.entries(data).map(([inputName, inputData]) => {
                application[inputName] = inputData.value;
            });
            axios.post(props.url, application)
                .then(res => {
                    if (res.data.result === 'failure') {
                        if (props.denied) {
                            props.denied();
                        } else {
                            setResult({
                                completed: true,
                                severity: 'error',
                                message: res.data.message || props.alert.denied || 'Введены неверные данные'
                            });
                        }
                    } else {
                        if (props.success) {
                            props.success();
                        } else {
                            setData(initialData);
                            setResult({
                                completed: true,
                                severity: 'success',
                                message: res.data.message || props.alert.success || 'Успешно'
                            });
                        }
                    }
                })
                .catch(() => {
                    if (props.error) {
                        props.error();
                    } else {
                        setResult({
                            completed: true,
                            severity: 'error',
                            message: props.alert.error || 'Произошла ошибка'
                        });
                    }
                });
        }
    };
    return (
        <React.Fragment>
            {props.headerProps && (<FormHeader {...props.headerProps}/>)}
            {props.formData.map(Input => (
                <Input.Component key={Input.name}
                                 value={data[Input.name].value}
                                 error={data[Input.name].error}
                                 handleChange={createHandleChange(Input.name)}
                                 {...Input.props}/>
            ))}
            <SendButton text={props.buttonText || 'Отправить'} handleClick={handleSend}/>
            <FormResultAlert open={result.completed}
                             text={result.message}
                             severity={result.severity}
                             handleClose={(event, reason) => {
                                 if (reason === 'clickaway') return;
                                 setResult(prevResult => ({
                                     ...prevResult,
                                     completed: false
                                 }));
                             }}/>
        </React.Fragment>
    );
};

export {Form};