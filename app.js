const fs = require("fs");

fs.readFile("./test.txt", "utf8", (err, data) => {
   fs.writeFile("./test2.txt", `${data} hahahahaah`, () => {}); //make new files
   fs.mkdir("./files", () => {
      fs.writeFile("./files/test2.txt", `${data} hahahahaah`, () => {});
   }); //make new directory
});

fs.readFile("./test.txt", "utf8", (err, data) => {
   fs.writeFileSync("./test2.txt", `${data} hahahahaah`, () => {}); //make new files
   fs.mkdirSync("./files", () => {});
   fs.writeFileSync("./files/test2.txt", `${data} hahahahaah`, () => {}); //make new directory
});

setTimeout(() => {
   if (fs.existsSync("./files/test2.txt")) {
      // check exists by road
      fs.unlink("./files/test2.txt", () => {});
   }
}, 4000);

setTimeout(() => {
   if (fs.existsSync("./files")) {
      // check exists by road
      fs.rmdir("./files", () => {});
   }
}, 5000);
