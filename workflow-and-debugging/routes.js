const requestHandlder = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head></head><body>");
    res.write("<h1>Welcome!</h1>");
    res.write("<form action='/create-user' method='POST'>");
    res.write("Username: ");
    res.write("<input type='text' name='usertxt' placeholder='username'>");
    res.write("<button type='submit'>Send</button>");
    res.write("</form></body></html>");
    return res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><head></head><body>");
    res.write("<ul>");
    res.write("<li>admin</li>");
    res.write("<li>dev1</li>");
    res.write("<li>proxy1</li>");
    res.write("<li>operator3</li>");
    res.write("<li>dba2</li>");
    res.write("<li>dba3</li>");
    res.write("</ul>");
    res.write("</body></html>");
    return res.end();
  } else if (url === "/create-user" && method === "POST") {
    const bodyData = [];
    req.on("data", (chunk) => {
      bodyData.push(chunk);
    });
    req.on("end", () => {
      //   console.log(bodyData);
      const parsedBody = Buffer.concat(bodyData).toString();
      console.log(parsedBody.split("=")[1]);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};
module.exports = requestHandlder;
