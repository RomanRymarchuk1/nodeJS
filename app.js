const http = require("http"); //Импортируем глобальный обьект http

//Создаем сервер с помощью соответственного метода http
const server = http.createServer((req, res) => {
   console.log("Server request"); //Колбек работает при каждом запросе по адресу сервера
   console.log(req); //Обьект запроса
   console.log(req.url, req.method, req.headers); //Некоторые свойства обьекта запроса

   //    res.setHeader("Content-Type", "text/plain"); //Доп информация об ответе записываеться в header
   //    res.write("Hello World!!"); //Содержитое ответа

   //    res.setHeader("Content-Type", "text/plain"); //Прочитаеться браузером как обычний текст
   //    res.write("<h1>Hello World!!</h1>");

   //    res.setHeader("Content-Type", "text/html"); //Прочитаеться браузером как html
   //    res.write("<h1>Hello World!!</h1>");

   //    res.end(); // Обязательный вызов метода end для оповещения о окончании ответа

   const data = JSON.stringify([
      { name: "aa", age: 12 },
      { name: "aaa", age: 16 },
      { name: "aaaa", age: 20 },
   ]);

   res.setHeader("Content-Type", "application/json"); //Прочитаеться браузером как JSON
   res.end(data); //В случаи отправки данных, например JSON его нужно передать как аргумент в end
});

const PORT = 5000; //Номер порта лучше держать в отдельной константе

//У сервера вызываем метод listen и предоставляем необходимые данные
server.listen(PORT, "localhost", (err) => {
   err ? console.log(err) : console.log(`Runing on port ${PORT}`);
});
