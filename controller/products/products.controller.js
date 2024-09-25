import { sql } from "../../database/index";

export const getProducts = async (_request, response) => {
  const products = await sql`SELECT * FROM products`;

  response.status(200).json({
    data: products,
  });
};

export const addProducts = async (request, response) => {
  const { productname, price } = request.body;
  try {
    await sql`INSERT INTO products (productname, price)
              VALUES (${productname}, ${price})`;

    response.status(200).json({ customer: request.body });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
