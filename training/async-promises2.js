const fetchData = (callback) => {
  setTimeout(() => {
    callback("fetch Data done! " + getTime());
  }, 1500);
};

setTimeout(() => {
  console.log("Time is done! calling fetch Data ..." + getTime());
  fetchData((text) => {
    console.log(text);
  });
  console.log("First function is done! " + getTime());
}, 2000);

const getTime = () => {
  const now = new Date();
  return now.getSeconds() + " " + now.getMilliseconds();
};

console.log("Hello!");
console.log("Hi!");
console.log(getTime());
