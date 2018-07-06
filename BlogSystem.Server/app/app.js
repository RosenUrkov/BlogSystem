/* globals __dirname */

const path = require('path');

const express = require('express');
const app = express();

const init = (data) => {
    require('./config')(app, data);

    const api = require('./routes')(data);
    app.use('/api', api);

    // todo
    app.use(express.static(path.join(__dirname, '../../BlogSystem.Client/dist/BlogSystem')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../BlogSystem.Client/dist/BlogSystem/index.html'));
    });

    return Promise.resolve(app);
};

module.exports = init;
