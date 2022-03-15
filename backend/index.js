const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { PORT } = process.env || 4040;

app.use(cors);
app.use('/api', jsonServer.router('db.json'));

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
