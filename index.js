const express = require("express");
const UserRouter = require("./router/users");

const app = express();

app.use(express.json());

app.use(UserRouter);

const port = 8080;

app.listen(port, () => {
  console.log(`server runnimg a http://localhost:${port}/`);
});

// app.get("/articles", (request, response) => {
//   response.send("Hello ooo ooo");
// });

// app.post("/addArticle", (request, response) => {
//   const { title } = request.body;
//   response.send(`Product successfully added${title}`);
// });
