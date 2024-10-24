"use strict";

const { log } = require('console');
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;


app.get('/user/:id', (req, res) => {
    const { id } = req.params;  

    if(isNaN(id)) {
        
       throw new Error('Id must be a number', {
            cause: 'Id is not a number'})
    }else {

    res.send({
        error:false,
        message:'User found',
        id
    })
}
});



const errorHandler = (error, req, res, next) => {
const statusCode =res?.errorStatusCode ??500;

    res.status(statusCode).send({
        error: true,
        message: error.message,
        cause: error.cause
    })
}
app.use(errorHandler);













app.listen(PORT, () => {
    console.log(`Listening on port 127.0.0.1:${PORT}`);

})  