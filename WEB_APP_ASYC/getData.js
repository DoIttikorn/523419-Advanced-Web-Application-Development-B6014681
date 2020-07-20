var express = require("express"); // เรียกใช้งาน express  mudule
var router = express.Router(); // กำหนด router instance ให้กับ express.Router class
const login = require("./login");
const usersystem = login.users;
// เราใช้คำสั่ง use() เพื่อเรียกใช้งาน middleware function
// middleware ที่กำงานใน router instance ก่อนเข้าไปทำงานใน route function
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
// กำหนด route หลัก หรือ root route
router.get("/", function(req, res) {
  console.log(usersystem);
  // res.status(200).json(usersystem);
});
// กำหนด route เพิ่มเติม
router.get("/all", function(req, res) {
  res.send("test singnin");
});

router.get("/:id", function(req, res) {
  res.send("test singnin");
});


module.exports = router;
