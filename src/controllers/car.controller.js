const carModel = require('../models/car.model');

/******************************************************************************
 *                              Car Controller
 ******************************************************************************/
class CarController {
    getCars = async(req, res) => {
        if (!Object.keys(req.body).length) {
            let carList = await carModel.find();
            if (!carList.length) {
                res.send([]);
            }

            res.send(carList);
        } else {
            var recordBody = {};
            
            Object.keys(req.body).forEach(element => {
                recordBody[element] = req.body[element]
            });

            const record = await carModel.findOneWithAndInCar(recordBody);

            res.send(record);
        }
    };

    addCar = async(req, res) => {
        var data = {
            'year': req.body.year,
            'make': req.body.make,
            'model': req.body.model,
            'colour': req.body.colour,
            'created_on': new Date().toJSON().slice(0, 10)
        }

        const result = await carModel.create(data);

        if (!result) {
            throw new HttpException(500, 'Something went wrong');
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 201, message: 'Successful!' }));
    };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new CarController;