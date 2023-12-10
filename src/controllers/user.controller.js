const carModel = require('../models/car.model');
const userModel = require('../models/user.model');

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class UserController {
    getUsers = async(req, res) => {
        let userList = await userModel.find();
        if (!userList.length) {
            res.send([]);
        }

        res.send(userList);
    };

    addUser = async(req, res) => {
        const user = await userModel.findOne({ email: req.body.email });

        if (!user) {
            var data = {
                'name': req.body.name,
                'email': req.body.email,
                'phone_number': req.body.phone_number,
                'created_on': new Date().toJSON().slice(0, 10)
            }
            
            const result = await userModel.create(data);

            if (!result) {
                throw new HttpException(500, 'Something went wrong');
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 201, message: 'Created! User successfully created.' }));
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 409, message: 'Conflict! User already exists with the same email address.' }));
        }
    };

    addPurchase = async(req, res) => {
        const car = await carModel.findOne({car_id: req.body.car_id});
        const user = await userModel.findOne({user_id: req.body.user_id});
        
        if (car && user) {
            const record = await carModel.findOneWithAnd({ car_id: req.body.car_id, user_id: req.body.user_id });

            if (!record) {
                var data = {
                    'car_id': req.body.car_id,
                    'user_id': req.body.user_id,
                    'created_on': new Date().toJSON().slice(0, 10)
                }
                
                const result = await userModel.purchase(data);
    
                if (!result) {
                    throw new HttpException(500, 'Something went wrong');
                }
    
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ status: 200, message: 'Ok! Purchase complete.' }));
            } else {                
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ status: 403, message: 'User already have this make, model with the same colour from the same year.' }));
            }
        } else if (car && !user) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 404, message: 'User not found.' }));
        } else if (!car && user) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 404, message: 'Car not found.' }));
        } else {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ status: 404, message: 'Car and User both not found.' }));
        }
    };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new UserController;