const fs = require("fs");
const { request } = require("http");
//function requestHandler(req,res){} or ES6 function:
const requestHandler = (req, res) => {
  //res.setHeader("Content-Type", "text/html");
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];

      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from Node.js server</h1></body>");
  res.write("</html>");
  res.end();
};

//1st way of exporting:
//module.exports = requestHandler;

/**
 * We can assign to this property a value like our requestHandler
 * function so the constant which hold that function is now stored
 *  in module.export. When doing a require(), node will look is something
 * was registerd in this property of this object globally exposed
 *
 * You can register, object, etc: module.exports = {}
 */

//2nd way exporting: As object, for exporting many things
// module.exports = {
//   handler: requestHandler,
//   someText: "some other hard coded text",
// };

//3rd equivalent but diff
// module.exports.handler = requestHandler;
// module.exports.someText = "another hard coded text";

//4th shortcuts by Node.js - ommit module.
exports.handler = requestHandler;
exports.someText = "yet another hard coded text";
