const express = require('express');
const router = express.Router();
const mysqlConnection = require('../sql/database');

router.get('/users',(req,res)=>{
    mysqlConnection.query('select * from user',(err,rows,fields)=>{
        if (!err) {
            res.set('Access-Control-Allow-Origin', '*');
             res.json(rows);
            
        } else {
            console.log(err);
        }
    });
    
});

router.post('/newUser',(req,res)=> {
    console.log(req.body);
    var user = JSON.parse(request.body);
    const name = user.name;
    const lastName = user.lastName;
    const password = user.password;
    const email = user.email;
    const phoneNumber = user.phoneNumber;
    const birthDate = user.birthDate;
    const termsConditions = user.termsAndConditions;
    const sql = "INSERT INTO user (Name, LastName,Password,Email,PhoneNumber,BirthDate,TermsConditions) VALUES ?";
    const values = [[name, lastName,password,email,phoneNumber,birthDate,termsConditions]];
    mysqlConnection.query(sql,[values],(err,rows,fields)=>{
        if (!err) {
            console.log(true);
            res.set('Access-Control-Allow-Origin', '*');
             res.json(true);
        } else {
            console.log(false);
            res.set('Access-Control-Allow-Origin', '*');
            res.json(false);
        }
    });
    
});
module.exports = router;