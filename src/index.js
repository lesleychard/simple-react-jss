import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'react-jss';
import App from './App';
import theme from './theme';

const Root = (
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

ReactDOM.render(Root, document.getElementById('root'));
