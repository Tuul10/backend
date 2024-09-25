const express = require("express");
const customersRouter = require("./router/customer.srouter");

// const Router = require("./router/users");

const app = express();

app.use(express.json());

// app.use(UserRouter);
// app.use(Router);
app.use("/customers", customersRouter);

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
