import express from "express";

import { sql } from "../database/index";

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
  const { firstName, customerID } = request.body;
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
  try {
    await sql`DELETE customers 
              WHERE customerId = ${id}`;

    response.status(200).json({ customer: request.body });
  } catch {
    response.status(400).json({ message: "no" });
  }
});

module.exports = customersRouter;
