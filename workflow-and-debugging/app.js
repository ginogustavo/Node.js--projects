const http = require("http");

const routes = require("./routes");
const server = http.createServer(routes);

server.listen(3000);
/**
 * To check Logical Error, use Debugger:
 *
 * -Kill current process
 * -in VSC, menu Run, Start Debugging, Select Node.js
 *   (you will see the new toolbar(step in, out etc), the orange bar below and the new Debug console)
 * - you can use also use left hand tool set ( watch, breakpoints)
 * - you can use the DEBUG CONSOLE to command the variable, e.g. parsedBody.split('=')
 */
