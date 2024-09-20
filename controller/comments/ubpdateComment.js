const comments = [
  { postId: 1, id: 1, like: 30, message: "", createdAt: "" },
  { postId: 2, id: 2, like: 30, message: "", createdAt: "" },
  { postId: 3, id: 3, like: 30, message: "", createdAt: "" },
];

exports.updateComment = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const filteredcomments = comments.filter(
    (comment) => comment.id === Number(id)
  );

  filteredcomments.map(
    (comment) => ((comment.like = body.like), (comment.message = body.message))
  );
  console.log(filteredcomments);
  response.status(200).json(filteredcomments);
};
