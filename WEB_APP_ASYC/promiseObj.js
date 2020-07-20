const myfuc = () => {
    return new Promise((resolve, reject) => {
      let con = true;
      if (con) {
        resolve('Test promise fuction Success!');
      } else {
        reject(new Error("bad request"));
      }
    });
  };
  
/**
 *              fuction no value ()
 */
myfuc()
    .then(re => {
      console.log(re);
    })
    .catch(err => {
      console.error(err);
    });
  
/**
 *              
 */
const re = myfuc()
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      let sid = "B6014681";
      if (sid) {
        resolve({ id: sid, name: "Ittikorn" }, { id: sid, name: "Wasdasdasd" });
      } else {
        reject(new Error("Error 404 Bad Request"));
      }
    }, 1000);
  });
  

  p.then(result => {
    console.log(result);
  }).catch(err => {
    console.error(err);
  });