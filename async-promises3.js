const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    // Promise take a callback which takes 2 argument that
    // are functions. 1st completes promise successfully
    //2nd one rejecte it.(throw error)
    // Then move the async code and move inside

    setTimeout(() => {
      resolve("fetch Data done!");
    }, 1500);
  });

  return promise; // after defining the promise we have to return it
  // this part would be sync code, so it returned immediatly (before the
  // code in the promise gets run - will happen later)
};

setTimeout(() => {
  console.log("Time is done! calling fetch Data ...");
  // then() is a callable on a promise
  fetchData()
    .then((text) => {
      //It allows to define the called funciont which will execute once the
      // promise gets resolved()
      console.log(text);
      return fetchData(); // In the first I return another promise
      //or even if I don't return a promise, just return, convert it in a promise
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("Hello!");
console.log("Hi!");
