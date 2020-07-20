const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("The first route to my home");
    resolve({id:"B6014681",name:"Ittikorn"});
  }, 2000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("The second route to my home");
    resolve({id:"6534654",name:"Ink"});
  }, 4000);
});

Promise.all([p1, p2])
  .then((result) => {
    console.log(result);
});
