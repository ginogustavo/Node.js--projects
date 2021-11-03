const http = require("http");

const routes = require("./routes");
const server = http.createServer(routes);

server.listen(3000);

/**
 * In the root:  $ npm init
 * It creates "package.json", there we can add scripts commands:
 *
 * "start" is a reserverd keyword, thus we only need "npm start"
 *
 * But if we add another e.g. "start-server" it won't work as "npm start-server"
 * The new ones need to work with "npm run start-server"
 */
