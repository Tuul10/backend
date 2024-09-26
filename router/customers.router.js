import express from "express";

import { sql } from "../database/index";
import { getProducts } from "../controller/products/products.controller";
import { addProducts } from "../controller/products/products.controller";
import { getOrder } from "../controller/orders/orders.controller";
import { addJoin, getJoin } from "../controller/join/getJoin";

const customersRouter = express.Router();

customersRouter.get("/", async (_request, response) => {
  const customers = await sql`SELECT * FROM customers`;

  response.status(200).json({
    data: customers,
  });
});
customersRouter.post("/", async (request, response) => {
  const { firstName, lastName, email, address } = request.body;

  try {
    await sql`INSERT INTO customers (firstName, lastName, email, address)
              VALUES (${firstName}, ${lastName}, ${email}, ${address})`;

    response.status(200).json({ customer: request.body });
  } catch (error) {
    response.status(400).json({ message: "aldaa garlaa" });
  }
});

customersRouter.put("/:id", async (request, response) => {
  const { firstName } = request.body;
  const { id } = request.params;
  try {
    await sql`UPDATE customers
            SET firstName = ${firstName}
            WHERE customerID = ${id}`;

    response.status(200).json({ customer: request.body });
  } catch {
    response.status(400).json({ message: "no" });
  }
});
customersRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;
  console.log(id);
  try {
    await sql`DELETE customers 
              WHERE customerID = ${id}`;

    response.status(200).json({ customer: request.body });
  } catch {
    response.status(400).json({ message: "no" });
  }
});
customersRouter.get("/products", getProducts);
customersRouter.post("/products", addProducts);
customersRouter.get("/orders", getOrder);
customersRouter.post("/orders", getOrder);
customersRouter.get("/join", getJoin);
customersRouter.post("/join", addJoin);

module.exports = customersRouter;
