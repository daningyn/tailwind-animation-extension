const express = require('express');
const cors = require('cors');
const subEnvPath = process.env.NODE_ENV !== 'production' ? `.${process.env.NODE_ENV}` : '';
require('dotenv').config({ path: `.env${subEnvPath}` });
const _ = require('lodash');

const app = express();
app.use(cors())
app.use(
  express.json({
    limit: "50mb",
    extended: true
  })
);
app.use(
  express.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.listen('3001', () => {
  console.log('Server in listening port 3001');
});