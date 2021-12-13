const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const portConfig = require('./config/config');
const mongooseConfig = require('./config/configMongoose');
const routes = require('./routes/routes');

// app.use((req, res, next) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     res.setHeader('Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, PATCH, DELETE');

//     res.setHeader('Access-Control-Allow-Headers',

//         '*');

//     next();

// });


app.use(cors());

routes(app);
mongooseConfig(app);


app.listen(portConfig.development.PORT, () => console.log(`Server runing on port: ${portConfig.development.PORT}...`))