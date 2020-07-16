const express = require('express');

const router = express.Router();
const mysqlConnection = require('../sql/database');


router.get('/users',(req,res)=>{
    let result;
    mysqlConnection.query('select * from user',(err,rows,fields)=>{
        if (!err) {
            res.set('Access-Control-Allow-Origin', '*');
            result = res.json(rows);
        } else {
            console.log(err);
        }
    });
    return result;
});

router.post('/newUser',(req,res)=> {

  
    var user = req.body;
    const name = user.name;
    const lastName = user.lastName;
    const password = user.password;
    const email = user.email;
    const phoneNumber = user.phoneNumber;
    const birthDate = user.birthDate;
    const termsConditions = user.termsAndConditions;
    const sql = "call spInsertUser (?,?,?,?,?,?,?)";
  
    mysqlConnection.query(sql,[name, lastName,password,email,phoneNumber,birthDate,termsConditions],(err,rows,fields)=>{
        if (!err) {
            console.log(true);
            res.set('Access-Control-Allow-Origin', '*');
             res.json(true);
        } else {
            console.log(err);
            res.set('Access-Control-Allow-Origin', '*');
            res.json(false);
        }
    });
    
});
module.exports = router;