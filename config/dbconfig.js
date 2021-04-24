const mysql = require('mysql');
//local mysql db connection

const dbconfig = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database: 'project'
});

dbconfig.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('databse connected');
    }
});

module.exports = dbconfig;