import React, {useState} from 'react';
import axios from 'axios';
import {CssBaseline, Button, TextField} from "@material-ui/core";

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleClick = () => {
        axios.post('/signin', {username: username, password: password})
            .then(() => {
                window.location.replace('/');
            })
            .catch(() => {
                alert('Неверный логин или пароль');
            });
    };
    return (
        <React.Fragment>
            <CssBaseline/>
            <TextField value={username} onChange={e => setUsername(e.target.value)}/>
            <br/>
            <TextField value={password} onChange={e => setPassword(e.target.value)}/>
            <br/>
            <Button onClick={handleClick}>
                Войти
            </Button>
        </React.Fragment>
    );
};

export {SignIn};