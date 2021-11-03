const http = require("http");

const routes = require("./routes");
const server = http.createServer(routes);

server.listen(3000);

/**
 * if we run in terminal:  $ nodemon app.js (it looks globally)-> you might get error
 * but if added in script and  $npm start  it looks localy.
 *
 * if we want it locally we can run: $npm install -g nodemon.
 * So, it'd be added to a global package and you can run anywhere on the machine
 */
