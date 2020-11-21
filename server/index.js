const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const { biodataRouter } = require('./routers');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const { MongoClient, ObjectID, url } = require('./database');

// koneksi ke database mongo
MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log(err);
    res.status(500).send(err);
  }

  console.log('MongoDb Connection Successfully');
  client.close();
});

app.use('/user/', biodataRouter);

app.get('/', (req, res) => {
  res.status(200).send('API with MongoDB');
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
