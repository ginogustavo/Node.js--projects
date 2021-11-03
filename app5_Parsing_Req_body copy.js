const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");

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
    // Register an Event Listener in the request

    //listen to certain events. e.g. Data Event
    //it will be fired whenever a new chunk is ready to be read
    //2nd argument, function will be executed for every data event

    req.on("data", (chunk) => {
      console.log(chunk); //prints <Buffer 6d 73 67 3d 31 31 31 26 6d 73 67 32 3d 32 32 32 32 32>
      body.push(chunk); //btw we are editing the data not the value itself
    });
    // end listener will be fired once it's done parsing the incoming request data
    req.on("end", () => {
      //we can rely on all the chunks being read in (stored in body)
      //we now ned to buffer them
      const parsedBody = Buffer.concat(body).toString(); //is available globally by Node.js
      //This will create a new buffer and add all the chunks from body to it.
      //Then from the buffer, I can convert it to String (in this case I know beforehand)
      //if it were a file we'd need something different
      console.log(parsedBody); //prints msg=111 and if were 2 inptus msg=111&msg2=22222
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message); // it gets it encoded
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from Node.js server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
