const cors = require("cors");
const dotenv = require('dotenv');
const express = require("express");

const errorMiddleware = require('./src/middleware/error.middleware');
const HttpException = require('./src/utils/HttpException.utils');

const mainRouter = require('./src/main.route');

// Init express
const app = express();
// Init environment
dotenv.config();
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());

const port = Number(process.env.PORT || 3331);

app.use(`/api/v1`, mainRouter);

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

// Error middleware
app.use(errorMiddleware);

// starting the server
app.listen(port, () => console.log(`🚀 Server running on port ${port}!`));

module.exports = app;