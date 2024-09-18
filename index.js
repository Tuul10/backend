import express from "express";

const app = express();
app.use(express.json());

const port = 8080;

app.get("/articles", (request, response) => {
  response.send("Hello ooo ooo");
});

app.post("/addArticle", (request, response) => {
  const { title } = request.body;
  response.send(`Product successfully added${title}`);
});

app.listen(port, () => {
  console.log(`server runnimg a http://localhost:${port}/`);
});
