import React from 'react';
import {hydrate} from 'react-dom';
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import {SignIn} from "../components/SignIn";

function Main() {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <SignIn/>
        </ThemeProvider>
    );
}

hydrate(<Main/>, document.getElementById('root'));