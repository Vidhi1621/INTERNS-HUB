const db = require('../../config/dbconfig');
//const  studentdetail  = require('../controllers/studentdetailcontroller');

const compdata = function(fetchData){
    this.cmp_id = fetchData.cmp_id;
    this.cmp_name = fetchData.cmp_name;
    this.emailid = fetchData.emailid;
    this.username = fetchData.username;
    this.password = fetchData.password;
    this.url = fetchData.url;
    this.city = fetchData.city;
    this.state = fetchData.state;
    this.aboutus = fetchData.aboutus;
}

compdata.selectData = function(result){

    let sql = 'select * from company';
   
    db.query(sql,(err,res)=>{
        
        if(res.length== 0){
            result(err,null);
        }
        else{
            
            result(null,res);
        }
    })
}

module.exports = compdata;