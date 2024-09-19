const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  {
    id: 2,
    firstName: "James",
    lastName: "Bond",
  },
];

exports.deleteUser = (request, response) => {
  const { id } = request.params;
  users.splice(
    users.findIndex(({ id }) => id === Number(id)),
    1
  );
  response.status(200).json({ users });
};
