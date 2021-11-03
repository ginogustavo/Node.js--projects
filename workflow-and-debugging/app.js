const http = require("http");

const routes = require("./routes");
const server = http.createServer(routes);

server.listen(3000);
/**
 * To Restart the Debugger automatically After editing the App
 *
 * In VSC, Menu Debug, Add Configuration, and you can add:
 *          "restart": true,
            "runtimeExecutable": "nodemon",
            "console": "integratedTerminal"
 * 
 * You could add the starting point which should be: app.js

 */
