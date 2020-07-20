const express = require("express"); // เรียกใช้งาน express  mudule
const router = express.Router(); // กำหนด router instance ให้กับ express.Router class
const bcr = require("bcryptjs");

const makeHash = async Text => {
  const res = await bcr.hash(Text, 10);
  return res;
};
const users = [];
// เราใช้คำสั่ง use() เพื่อเรียกใช้งาน middleware function
// middleware ที่กำงานใน router instance ก่อนเข้าไปทำงานใน route function
router.use(function timeLog(req, res, next) {
  console.log("LOGIN PAGE");
  console.log("Time: ", Date.now());
  next();
});

// กำหนด route หลัก หรือ root route
router.get("/", function(req, res) {
  res.send("Login home page");
});
// กำหนด route เพิ่มเติม
router.get("/singnin", function(req, res) {
  console.log("------Start Singnin---------");
  res.send("Process singnin");
  console.log("------End Singnin---------");
});

router.route("/singnup").post((req, res) => {
  console.log("------Start Singnup---------");
  // นำ password ไปเข้า fuction Hash ไปผลลัพธ์ค่อยบันทึก
  makeHash(req.body.password)
    .then(textHash => {
      const user = {
        id: users.length + 1,
        name: req.body.name,
        password: textHash
      };
      users.push(user);
      res.status(200).json(users);
    })
    .catch(err => {
      console.log(err);
    });
  // const body = {
  //   name: req.body.name,
  //   password: req.body.password
  // };

  // const a = makeHash(req.body.password);

  // res.status(200).json(a);
  console.log("------End Singnup---------");
});

module.exports = router;
module.exports.users = users;
