const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  {
    id: 2,
    firstName: "James",
    lastName: "Bond",
  },
];

exports.createUser = (request, response) => {
  users.push({ ...request.body });
  response.status(200).json({ message: "successful ", users });
};
