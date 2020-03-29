import {LongTextField} from "../common/forms/LongTextField";
import {PasswordField} from "../common/forms/PasswordField";

const signInFormData = [
    {
        name: 'username',
        type: 'string',
        check: value => value !== '',
        Component: LongTextField,
        props: {
            variant: 'outlined',
            label: 'Логин'
        }
    },
    {
        name: 'password',
        type: 'string',
        check: value => value !== '',
        Component: PasswordField,
        props: {
            variant: 'outlined',
            label: 'Пароль'
        }
    }
];

export {signInFormData};