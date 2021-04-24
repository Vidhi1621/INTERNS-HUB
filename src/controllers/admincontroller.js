const studentfetch = require('../model/studentmodel');
const companyfetch = require('../model/companymodel');
const postinternfetch = require('../model/postinternmodel');
var totalstud;
exports.renderADMINPage = function(req,res){
    if(req.session.user!=null){
        console.log(req.session.user);
        studentfetch.selectData(function(err,result){
            companyfetch.selectData(function(err, resultCompany){
                postinternfetch.selectData(function(err,resultintern){
                    const total = resultCompany.length + result.length + resultintern.length;
                    res.render('ADMIN',{total:total, student:result.length, company:resultCompany.length, postintern:resultintern.length});
                })
             
            });       
        });   
    }
    else{
        res.redirect('/');
    }
    //var totalstud;
        //student
   
}