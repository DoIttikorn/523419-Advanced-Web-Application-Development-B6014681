const expressFunction = require("express");
const expressApp = expressFunction();

const student = [
  { stdid: "B5111299", name: "Nuntawut Kaoungku" },
  { stdid: "B5222299", name: "Jaidee Deejai" },
  { stdid: "B6014681", name: "Ittikorn Chawkamud"}
];

expressApp.get("/api/resource/students/", function (req, res) {
  const stdid = req.params.stdid;
 
  if (stdid == "B6014681") {
    res.status(200).send(student[2]);
  } else if (stdid == "B5222299") {
    res.status(200).send(student[1]);
  }else if(stdid == "B5111299"){
    res.status(200).send(student[0]);
  } else {
    res.status(404).send("Error 404 not found");
  }
});

expressApp.listen(3000, function () {
  console.log("Listen on port 3000");
});
