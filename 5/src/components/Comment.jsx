import React from 'react';
import { useSelector } from 'react-redux';

const Comment = ({ commentId }) => {
  // BEGIN (write your solution here)
const comment = useSelector((state) =>
    state.commentsReducer.comments.find((comment) => comment.id === commentId)
  );
  const author = useSelector((state) =>
    state.usersReducer.users.find((user) => user.id === comment?.author)
  );
  // END

  if (!author || !comment) {
    return null;
  }

  return (
    <>
      <h5 className="card-title">{ author.name }</h5>
      <p className="card-text">{ comment.text }</p>
    </>
  );
};

export default Comment;
