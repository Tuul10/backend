import express from "express";

import { sql } from "../database/index";

const productsRouter = express.Router();

productsRouter.get("/", async (_request, response) => {
  const products = await sql`SELECT * FROM products`;

  response.status(200).json({
    data: products,
  });
});
productsRouter.post("/", async (request, response) => {
  const { productName, price } = request.body;

  try {
    await sql`INSERT INTO products ( productname, price)
              VALUES ( ${productName}, ${price} )`;

    response.status(200).json({ products: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
});
