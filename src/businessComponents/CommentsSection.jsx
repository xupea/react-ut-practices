import { Comment } from "./Comment";

export const CommentsSection = ({ comments }) => (
  <div>
    {comments.length > 0 && <h2 data-testid="header">Comments</h2>}

    {comments.map((comment) => (
      <Comment content={comment} key={comment.id}></Comment>
    ))}
  </div>
);
