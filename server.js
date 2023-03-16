require('dotenv').config()

const express = require('express')


const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./docs/swagger.json');
const cors = require("cors");

const spamRoute = require('./router');

const app = express()
app.use(express.json());


const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/', spamRoute);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(3000, () => console.log(`Server started on port 3000`))
