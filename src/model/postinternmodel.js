
const db = require('../../config/dbconfig');
//const  studentdetail  = require('../controllers/studentdetailcontroller');

const postdata = function(fetchData){
    this.p_id = fetchData.p_id
}

postdata.selectData = function(result){

    let sql = 'select * from post_intern';
   
    db.query(sql,(err,res)=>{
        
        if(res.length== 0){
            result(err,null);
        }
        else{
            
            result(null,res);
        }
    })
}

module.exports = postdata;