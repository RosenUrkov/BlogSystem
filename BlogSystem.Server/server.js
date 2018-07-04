/* globals __dirname */
const port = 1234;

const path = require('path');

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '../BlogSystem.Client/dist/BlogSystem')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../BlogSystem.Client/dist/BlogSystem/index.html')));

app.listen(port, () => console.log(`Server running on port ${port}..`));
