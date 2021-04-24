const path = require("path")
const express = require("express")
const app = express()
const router = require("./src/router");
const session = require('express-session');
const cookieparser = require('cookie-parser');

app.use(cookieparser());
//session
app.use(session({
    secret:'user_id',
    resave:false,
    saveUninitialized: false,
    cookie:{
        expires: 6000*1000
    }
}));

app.use((req,res,next)=>{
    if(req.cookies.user_id && !req.session.user){
        res.clearCookie('user_id');
    }
    next();
})

app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(express.static("public"))
app.set("views","views")
app.set("view engine","ejs")

//app.use("/", router)

app.use("/", router)
app.listen(3000 , () => {
    console.log("The server is now running on port 3000")
})

