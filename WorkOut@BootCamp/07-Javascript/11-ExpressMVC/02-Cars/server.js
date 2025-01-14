const express = require('express');
const app = express();
const routes = require('./routes');
const session = require('express-session');
const config = require('./config');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.use(
    session({
        secret: 'sikrit1234',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
    })
);

// Routes
app.use('/', routes);

// Server
const PORT = config.server;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
