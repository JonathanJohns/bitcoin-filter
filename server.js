const express = require('express');
const session = require('express-session');

const passport = require('passport')
const local = require('./strategies/local')

const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const apiRoute = require('./routes/api');


const app = express();

const store = new session.MemoryStore();

app.use(session({
    secret: 'some secret',
    cookie: {maxAge: 30000},
    saveUninitialized:false,
    store
})) 

app.use(express.json());
app.use(express.urlencoded({
    extended: false, 
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/', homeRoute)
app.use('/auth', authRoute)
app.use('/api', apiRoute)
 





const port = 5000;

app.listen(port, () => `Server running on port ${port}`);