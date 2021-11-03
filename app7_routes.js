const http = require("http");

const routes = require("./routes"); // you can ommit .js or included
/**
 * Node.js will look for the this file and check what it has for
 * export.exports and see what is register in there and we assign
 * whatever is exported from that file in this  constant (routes)
 * which is a function.
 */

//const server = http.createServer(routes); // no excution just tell
//it which one is the function to run

//if object was imported: then
const server = http.createServer(routes.handler);

console.log(routes.someText);

// The imported object to const routes is now inmutable,
// we cannot edit, e.g.  routes.something = ""
// the files are cached in Node.js

server.listen(3000);
