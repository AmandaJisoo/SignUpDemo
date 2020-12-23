const express = require('express');
const router = express.Router();
const signUpTemplate = require('../models/SignUpModel');
//path, callnack function
router.post('/signup', (request, response) => {
    const signUpUser = new signUpTemplate({
        fullName: request.body.fullName,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
    })

    // it says all the data 
    signUpUser.save()
    .then(data => {
        response.json(data);
    })
    .catch(err => {
        response.json(err);
    })

});

module.exports = router;