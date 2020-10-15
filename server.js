const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// mongoose.connect(keys.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true  });

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
  console.log('port running and db connected');
})