const { MongoClient, ObjectID, url } = require('../database');

module.exports = {
  addData: (req, res) => {
    MongoClient.connect(url, (err, client) => {
      const db = client.db('dbMongo');

      db.collection('tbusers').insertMany([req.body], (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).send(err);
        }
        // console.log(results);
        res.status(200).send(results);
      });
    });
  },
  getAllData: (req, res) => {
    MongoClient.connect(url, (err, client) => {
      const db = client.db('dbMongo');
      let property = '';
      let value;

      // console.log(req.query);

      for (let prop in req.query) {
        property = prop;
        console.log(req.query[prop]);
        value = isNaN(req.query[prop])
          ? req.query[prop]
          : parseInt(req.query[prop]);
      }

      db.collection('tbusers')
        .find(!req.query ? {} : { [property]: value })
        .toArray((err, results) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          }
          // console.log(results);
          res.status(200).send(results);
        });
    });
  },
  update: (req, res) => {
    MongoClient.connect(url, (err, client) => {
      const db = client.db('dbMongo');
      db.collection('tbusers').updateOne(
        { username: req.body.username },
        { $set: { usia: req.body.usia } },
        (err, results) => {
          if (err) {
            console.log(err);
            res.status(500).send(err);
          }
          console.log(results);
          res.status(200).send(results);
        }
      );
    });
  },
};
