const Complier = require("./lib/Compiler");
const options = require("./mini-webpack.config");
new Complier(options).run();
