const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();

app.use(cors(
    {
        oringin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
    }
));

app.listen(3000);
