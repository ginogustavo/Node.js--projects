const http = require("http");

const routes = require("./routes");
const server = http.createServer(routes);

server.listen(3000);

/** Dependencies can be developement (e.g. nodemon)
 * or production packages(where we dont need there)
 *
 * install [package] --save (it'd be installed as a production dependency)
 * install [package] --save-dev (used only during development)
 *
 * -g (will install not only for the project but for your machine, so you
 * can use it anywhere)
 *
 * Install: npm install nodemon --save-dev
 * - it creates the node_modules directory
 * - it also creates the package-lock.json
 *      stores exact version I installed(instead of the latest version)
 * - updated package.json file (new devDependency section)
 *    ^ indicates how the package will be updated if you re-run $npm install
 *      without defining an extra package name, bc this command alone will go
 *      through all you packages mentioned in package.json and install them and
 *      automatically pick a later version if avaialble.
 * */

/**
 * if we run in terminal:  $ nodemon app.js (it looks globally)-> you might get error
 * but if added in script and  $npm start  it looks localy.
 */
