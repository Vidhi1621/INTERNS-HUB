const modelstudent = require('../model/studentmodel');


exports.studentrender = function(req,res){

    //res.render('student-detail');

    modelstudent.selectData(function(err, result){
        //console.log(result[0]);
        if(result.error){
            res.render('student-detail');
        }
        else{   
               
            res.render('student-detail',{result});
        }
        
    });
    
}
