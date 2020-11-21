const route = require('express').Router();
const { biodataController } = require('../controllers');

route.post('/add', biodataController.addData);
route.get('/get-data', biodataController.getAllData);
route.patch('/update', biodataController.update);

module.exports = route;
