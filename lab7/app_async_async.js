const checkAuth = (username, password) => {
  
  return new Promise(  (resolve, reject) => {
    
    setTimeout( () => { 
      console.log("----checkAuth----");
      if (username == "Ittikorn" && password == "B6014681") {
        resolve({ authData: username + password });
      } else {
        reject(new Error("Authentication Fail!!"));
      }
    }, 2000);



  });


};

const getStudent = () => {
  return new Promise((resolve, rejcet) => {
    setTimeout(() => {
      console.log("----getStudent----");
      const data = { name: "Ittikorn Chawkamud", permission: "Admin" };
      resolve(data);
    }, 3000);
  });
};

const getTheResult = async () => {
  const auth = await checkAuth("Ittikorn", "B6014681");
  const data = await getStudent(auth);
  console.log(data);
};

console.log("----Start----");
getTheResult();
console.log("----Finish----");


try {
  
} catch (error) {
  
}