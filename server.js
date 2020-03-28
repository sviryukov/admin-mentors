import express from 'express';
import {MongoClient, ObjectID} from 'mongodb';
import db from './config/db';
import connectMongo from "connect-mongo";
import session from 'express-session';
import passport from 'passport';
import {Strategy} from 'passport-local';
import flash from 'connect-flash';
import {route} from './route';

MongoClient.connect(db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {

    if (err) return console.log(err);

    const app = express();

    const port = 8080;

    const MongoStore = connectMongo(session);

    app.use(session({
        secret: "admin.mentors.phystech-union",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            client: client,
            dbName: 'miptmentors',
            touchAfter: 24 * 60 * 60
        }),

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
                    return done(null, false, request.flash("error", "Неверный логин или пароль"));
                }
            } else {
                return done(null, false, request.flash("error", "Неверный логин или пароль"));
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

    app.use(flash());

    const router = route(passport, client);
    app.use(router);

    app.listen(port, () => {
        console.log("We are live on " + port);
    });

});