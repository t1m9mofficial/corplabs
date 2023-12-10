const express = require('express');
const router = express.Router();
const awaitHandlerFactory = require('./middleware/awaitHandlerFactory.middleware');

const carController = require('./controllers/car.controller');
const userController = require('./controllers/user.controller');

// router.post('/cars', awaitHandlerFactory(carController.addCar));
router.get('/cars', awaitHandlerFactory(carController.getCars));

router.post('/users', awaitHandlerFactory(userController.addUser));
// router.get('/users', awaitHandlerFactory(userController.getUsers));

router.post('/user/car', awaitHandlerFactory(userController.addPurchase));


module.exports = router;