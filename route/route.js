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
        router.get(page.url, (page.limitedAccess ? checkIfNotAuthenticated : checkIfAuthenticated), (request, response) => {
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

    router.post('/signin', (req, res) => {
        passport.authenticate('signin', (err, user)  => {
            if (err) {
                res.send(err);
            } else if (!user) {
                res.send({result: 'denied'});
            } else {
                req.login(user, () => {
                    res.sendStatus(200);
                });
            }
        })(req, res);
    });

    return router;

};

const checkIfNotAuthenticated = (request, response, next) => {
    if(request.isAuthenticated()){
        next();
    } else{
        response.redirect("/signin");
    }
};
const checkIfAuthenticated = (request, response, next) => {
    if(request.isAuthenticated()){
        response.redirect("/");
    } else {
        next();
    }
};

export {route};