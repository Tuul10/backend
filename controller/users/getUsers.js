const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "James", lastName: "Bond" },
];

exports.getUsers = (request, response) => {
  response.status(200).json({
    users: users,
  });
};
