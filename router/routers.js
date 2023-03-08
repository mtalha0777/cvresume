const express = require("express")
const router=express.Router();
 const { resume,coverletter,resumewriting,faq,about,contact} = require
("../controller/controller");


router.get("/Resume",(req, res) =>resume(req,res));

router.get("/CoverLetter",(req, res) =>coverletter(req,res));
router.get("/ResumeWriting",(req, res) =>resumewriting(req,res));
router.get("/FAQ",(req, res) =>faq(req,res));
router.get("/About",(req, res) =>about(req,res));
router.get("/Contact",(req, res) =>contact(req,res));

 module.exports = router