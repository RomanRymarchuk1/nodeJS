const { userName, sayHi } = require("./test");
const os = require("os");

console.log(userName);
console.log(os.platform(), os.release());
