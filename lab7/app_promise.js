const p = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let sid = "B6014681";
    if (sid) {
      resolve({ id: sid, name: "Ittikorn" });
    } else {
      reject(new Error("Error 404 Bad Request"));
    }
  }, 1000);
});

p.then((re) => {
  console.log(re);
}).catch(function (err) {
  console.log(err);
});
