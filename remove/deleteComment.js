const comments = [
  { postId: 1, id: 1, like: 30, message: "", createdAt: "" },
  { postId: 2, id: 2, like: 30, message: "", createdAt: "" },
  { postId: 3, id: 3, like: 30, message: "", createdAt: "" },
];

exports.deleteComment = (request, response) => {
  const { id } = request.params;
  comments.splice(
    comments.findIndex(({ id }) => id === Number(id)),
    1
  );
  response.status(200).json({ comments });
};
