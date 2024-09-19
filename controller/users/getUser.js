const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  {
    id: 2,
    firstName: "James",
    lastName: "Bond",
  },
];

exports.getUser = (request, response) => {
  const { id } = request.params;

  const user = users.find((user) => user.id === Number(id));

  if (user) {
    response.status(200).json({ user });
  } else {
    response.status(400).send(`User ${id} not exist`);
  }
};
