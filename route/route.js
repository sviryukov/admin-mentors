import express from 'express';

const route = (passport, client) => {

    const router = express.Router();

    router.get('/*', (req, res) => {
        res.send('Hello');
    });

    return router;

};

export {route};