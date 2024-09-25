import { sql } from "../../database";

export const getJoin = async (request, response) => {
  // const { customerid, productid, orderdate } = request.body;
  try {
    const order =
      await sql`SELECT orders.orderid, customers.lastname, orders.orderdate
              FROM orders
              INNER JOIN customers ON orders.customerid=customers.customerid
              INNER JOIN products ON orders.productid = products.productid
              `;
    response.status(200).json({ order });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
