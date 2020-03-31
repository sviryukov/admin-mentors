import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#074575',
            light: '#4580af'
        },
        secondary: {
            main: '#00A8E8',
            contrastText: '#fff'
        },
        text: {
            light: '#fff'
        },
        background: {
            default: '#f7f7f7',
            paper: '#fff'
        }
    },
    typography: {
        h1: {
            fontSize: '30px',
            fontWeight: '100'
        }
    }
});

export default theme;