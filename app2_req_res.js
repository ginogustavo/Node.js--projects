const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server started.");
  console.log(req.url, req.method, req.headers);
  // url is everything after the domain host name(http://localhost:80), in this case /
  //res, to fill the data we want to return

  // this will attacha the header to our response
  res.setHeader("Content-Type", "text/html");

  // write data to the response
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from Node.js server</h1></body>");
  res.write("</html>");
  res.end(); // indidcate once we are done when createing the response
  //if later we write res.write() is throw error in running
});

server.listen(3000);
