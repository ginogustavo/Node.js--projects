//Async code because it does not execute or finish immediately
setTimeout(() => {
  /// callback function
  console.log("timer is done 2000!");
}, 2000);

setTimeout(() => {
  console.log("timer is done 1!");
}, 1); // even if it's 1 millisecond

console.log("Hi 1"); // these lines are syncrhonous (happen right one after another)
console.log("hi 2");

//Because Node.js & JS in general, does not block your code execution
// until that is done.
// It recognizes the "callback" function and should execute it in the future
// It should call back later once it's done(timer finishes)
// and would immediatly move to the next line.
