import express from 'express';
import {MongoClient, ObjectID} from 'mongodb';
import db from './config/db';
import connectMongo from "connect-mongo";
import session from 'express-session';
import crypto from 'crypto';
import passport from 'passport';
import {Strategy} from 'passport-local';
import {route} from './route';
import bodyParser from 'body-parser';

MongoClient.connect(db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {

    if (err) return console.log(err);

    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    const port = 8080;

    const MongoStore = connectMongo(session);

    app.use(session({
        secret: crypto.randomBytes(64).toString('hex'),
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({
            client: client,
            dbName: 'miptmentors',
            touchAfter: 24 * 60 * 60
        })
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use("signin", new Strategy({
        passReqToCallback: true
    }, (request, username, password, done) => {
        client.db("miptmentors").collection("admins").findOne({username: username}, (err, user) => {
            if (user) {
                if (user.password === password) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } else {
                return done(null, false);
            }
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
        client.db("miptmentors").collection("admins").findOne(ObjectID(id), (err, user) => {
            done(err, user);
        });
    });

    const router = route(passport, client);
    app.use(router);

    app.use(express.static("assets"));

    app.listen(port, () => {
        console.log("We are live on " + port);
    });

});