import express from 'express';
import React from "react";
import ReactDOMServer from 'react-dom/server';
import {ServerStyleSheets, ThemeProvider} from "@material-ui/styles";
import template from '../src/template';
import theme from '../src/theme';
import pages from '../src/pages';

const route = (passport, client) => {

    const router = express.Router();

    pages.map(page => {
        const PageComponent = require('../src/components/' + page.component_name)[page.component_name];
        router.get(page.url, (request, response) => {
            const sheets = new ServerStyleSheets();
            const html = ReactDOMServer.renderToString(
                sheets.collect(
                    <ThemeProvider theme={theme}>
                        <PageComponent/>
                    </ThemeProvider>
                )
            );
            const css = sheets.toString();
            response.send(template(page.title, html, page.script, css));
        });
    });

    return router;

};

export {route};