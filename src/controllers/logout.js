exports.logout = function(req,res){
    console.log('successfully logout');
        req.session.destroy(function(err){
       
            res.redirect('/');     
        });
        
 }
    
   