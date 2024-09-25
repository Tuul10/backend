import { sql } from "../../database";

export const getOrder = async (request, response) => {
  const orders = await sql`SELECT * FROM orders`;

  response.status(200).json({ data: orders });
};

export const addOrder = async (request, response) => {
  const { productid, customerid, orderdate } = request.body;
  try {
    await sql`INSERT INTO orders (productid, customerid, orderdate )
                  VALUES (${productid}, ${customerid},${orderdate} 2018-09-07)`;
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
