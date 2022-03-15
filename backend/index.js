const express = require('express');
const jsonServer = require('json-server');
require('dotenv').config();

const app = express();
const { PORT } = process.env || 4040;
const middlewares = jsonServer.defaults({ noCors: true });

app.use(middlewares);
app.use('/api', jsonServer.router('db.json'));

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
