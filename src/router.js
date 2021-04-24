const express = require("express");
const router = express.Router();
const controller = require("./controllers/controller");
const admincontroller = require('./controllers/admincontroller');
const studentcontroller = require('./controllers/studentdetailcontroller');
const companycontroller = require('./controllers/companydetailcontroller');
const profile = require('./controllers/profile');
const logout = require('./controllers/logout');
//loginpage
router.get("/", controller.renderadminloginPage);

router.post("/", controller.getLogin);
//Admin home page
router.get("/ADMIN", admincontroller.renderADMINPage);

//router.post("/ADMIN",)

//student-detail
router.get('/student-detail',studentcontroller.studentrender);
//router.post('student-detail', studentcontroller.studentdetail);

//company-detail
router.get('/company-detail',companycontroller.companyrender);
//router.post('company-detail');

//profile
router.get('/profile',profile.profile);
//router.post('profile');

//logout
router.get('/logout',logout.logout);
module.exports = router;


