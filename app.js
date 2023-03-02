const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const DatasRoute = require('./routes/datas');

const app = express();
require('dotenv/config');

app.use(bodyParser.json());
app.use('/datas',DatasRoute);



// DB CONNECTION
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to DB..!');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });




app.listen(3000);