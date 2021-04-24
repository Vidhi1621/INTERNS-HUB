const db = require('../../config/dbconfig');
//const  studentdetail  = require('../controllers/studentdetailcontroller');

const data = function(fetchData){
    this.stud_id = fetchData.stud_id;
    this.stud_name = fetchData.stud_name;
    this.emailid = fetchData.emailid;
    this.username = fetchData.username;
    this.password = fetchData.password;
    this.clg_name = fetchData.clg_name;
    this.semester = fetchData.semester;
    this.branch = fetchData.branch;
    this.cgpa = fetchData.cgpa;
    this.yop = fetchData.yop;
    this.resume = fetchData.resume;
}

data.selectData = function(result){

    let sql = 'select * from student';

    db.query(sql,(err,res)=>{
       
        if(res.length== 0){
            result(err,null);
        }
        else{
            
            result(null,res);
        }
    })
}

module.exports = data;