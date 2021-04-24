
exports.renderadminloginPage = (req, res) => {
    req.session.viewcount +=1;
    res.render("adminlogin");
} 

exports.getLogin = ( req, res) => {
    

        if(req.body.username=="admin" && req.body.password=="admin123"){
           
           req.session.user=req.body.username;
           console.log(req.session.user);
           if(req.session.user==req.body.username){
               console.log(req.session.user);
                res.redirect('ADMIN');
           } 
           else{
               res.redirect('/');
           }  
        }
        else{
            res.redirect('/')
        }
    }

/*exports.renderADMINPage = (req, res) => {
    res.render("ADMIN")
} */