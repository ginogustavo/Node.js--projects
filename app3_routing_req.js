const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='msg'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end(); // return the response is not mandatory, but it's to avoid continuing the code below
    // also because after res.end() we must not call other writes commands
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first page</title></head>");
  res.write("<body><h1>Hello from Node.js server</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
