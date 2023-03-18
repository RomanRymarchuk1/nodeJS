const EventEmitter = require("events");
const util = require("util");

class Logger extends EventEmitter {
   log = (msg) => {
      console.log(msg);
      this.emit("some_event", { id: 1, text: "Event test text!" });
   };
} // Прямое наследование класса

// class Logger {
//    log = (msg) => {
//       console.log(msg);
//       this.emit("some_event", { id: 1, text: "Event test text!" });
//    };
// } // Наследование класса с помощью util, плохой подход

// util.inherits(Logger, EventEmitter);

module.exports = { Logger };
