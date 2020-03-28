import React from 'react';
import {hydrate} from 'react-dom';
import {ThemeProvider} from "@material-ui/styles";
import theme from "../theme";
import {Home} from "../components/Home/Home";

function Main() {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    );
}

hydrate(<Main/>, document.getElementById('root'));