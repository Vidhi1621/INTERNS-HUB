const modelcompany = require('../model/companymodel');

exports.companyrender = function(req,res){
    //res.render('student-detail');

    modelcompany.selectData(function(err, result){
        console.log(result[0]);
        if(result.error){
            res.render('company-detail');
        }
        else{
               
            res.render('company-detail',{result});
        }
        
    });
    
}

