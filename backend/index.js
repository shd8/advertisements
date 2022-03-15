const express = require('express');
const jsonServer = require('json-server');

const app = express();

app.use('/api', jsonServer.router('db.json'));

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
