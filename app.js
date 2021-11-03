const http = require("http");
/*
require() is a global available function in node js

- You could also import your own files
i.e. writing the path with ./ (relative) or / (absolute) paths

-It automatically add .js at the end, but you can added(no needed)

-If only name, it looks for a global module.
*/

// function rqListener(req, res) {}
// http.createServer(rqListener);

/**
 * Input param: Request Listener, a function that will execute for
 * every incomming request.
 * Whenever a request reaches our server
 */

//using anonymous functions
//http.createServer(function (req, res) {});

//using arrow function
const server = http.createServer((req, res) => {
  console.log(req);
  //process.exit(); // quit the process
});
/**
 * This is the create server callback function and return
 * a server obj and store in a constant
 *  */

server.listen(3000);
/**
 * listen() will start a process where Node.js will exit this script and
 * instead keep this running to listen for incomming request.
 * It takes optinal arguments: PORT (in prod you won't fill this out and
 * take the default port 80.), HOSTNAME (name of machine this is running)
 */

/**
 * The Event Loop starts: it keeps running as long as there are event
 * listeners registered.
 * InCommingRequestListener is the one we registered(and never unregistered)
 * we passed that function with createServer() -> this make the ongoing event listener
 *
 */

/**
 *  Our core Node.js Application is managed by this event loop
 *  Node.js uses such an event driven approach for all kind of stuff.
 *  This pattern executes single threaded javascript
 */
