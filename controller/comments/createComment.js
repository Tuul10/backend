const comments = [
  { postId: 1, id: 1, like: 30, message: "", createdAt: "" },
  { postId: 2, id: 2, like: 30, message: "", createdAt: "" },
  { postId: 3, id: 3, like: 30, message: "", createdAt: "" },
];

exports.createComment = (request, response) => {
  comments.push({ ...request.body });
  response.status(200).json(comments);
};
