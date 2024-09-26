import { sql } from "../../database";

export const getJoin = async (request, response) => {
  try {
    const order =
      await sql`SELECT orders.orderid, customers.lastname, orders.orderdate
              FROM orders
              INNER JOIN customers ON orders.customerid= customers.customerid
              INNER JOIN products ON orders.productid = product.productid
              `;
    response.status(200).json({ order });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
export const addJoin = async (request, response) => {
  const { customerid, productid, orderdate } = request.body;

  try {
    await sql`SELECT orders.orderid, customers.lastname, ${orderdate}
              FROM orders
              INNER JOIN customers ON orders.customerid= ${customerid}
              INNER JOIN products ON orders.productid = ${productid}
              `;

    response.status(200).json({ join: request.body });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
