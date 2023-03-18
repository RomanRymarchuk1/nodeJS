const fs = require("fs");
const zlib = require("zlib");

const readStream = fs.createReadStream("./docs/tet.txt");
const writeStream = fs.createWriteStream("./docs/new-text.txt");
const compressStream = zlib.createGzip();

// readStream.on("data", (chunk) => { // читающий поток (READABLE)
//    writeStream.write("\n---CHUNK START---\n"); // пишущий поток (WRITABLE)
//    writeStream.write(chunk);
//    writeStream.write("\n---CHUNK END---\n");
// });

const handleError = () => {
   // для обработки ошибок при передаче данных
   console.log("Error");
   readStream.destroy();
   writeStream.end("Finished with error...");
};

readStream
   .on("error", handleError)
   .pipe(compressStream) //трансофрмирующий поток(TRANSFORM)
   .pipe(writeStream) //смешаный поток(DUPLEX)
   .on("error", handleError);
