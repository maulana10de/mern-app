const { MongoClient, ObjectID } = require('mongodb');
const url = `mongodb+srv://maulana:S3ph4n1249@clusterade.rzrwa.mongodb.net/dbMongo?retryWrites=true&w=majority`;

module.exports = {
  MongoClient,
  ObjectID,
  url,
};
