const myAsync = (callback) => {
  // อยู่ใน callstack
  console.log("----Start----");
  // work pull ทำงานเสร็จเก็บไว้ใน callback คิว
  setTimeout(() => {
    const res = callback("First");
    console.log(res);
  }, 2000);

  setTimeout(() => {
    const res = callback("Second");
    console.log(res);
  }, 1000);
  setTimeout(() => {
    const res = callback("Third");
    console.log(res);
  }, 1000);

  console.log("----Finish----");
};

const myCallback = (messge) => {
  return messge + " done !!!";
};

myAsync(myCallback);
