var expressFunction = require("express");
var expressApp = expressFunction();

const students = [
  { stdid: "B5111299", name: "Nuntawut Kaoungku" },
  { stdid: "B5222299", name: "Jaidee Deejai" },
];

expressApp.use(function (req, res, next) {
  console.log("Logged");
  next();
});

expressApp.use(function (req, res, next) {
  console.log("Authentication");
  next();
});

expressApp.get("/", function (req, res) {
  res.status(200).send("Hellp World");
});

expressApp.get("/api/resource/students/:stdid", function (req, res) {
  const stdid = req.params.stdid;
  if (stdid == "B5111299") {
    res.status(200).send(students[0]);
  } else if (stdid == "B5222299") {
    res.status(200).send(students[1]);
  } else {
    res.status(404).send("Error 404 not found");
  }
});

expressApp.listen(3000, function () {
  console.log("Listen on port 3000");
});
