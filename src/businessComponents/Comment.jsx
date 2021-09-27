export const Comment = ({ content, trackClickEvent }) => (
  <div
    data-testid="comment"
    onClick={() => trackClickEvent(content.id, content.comment)}
  >
    {content.comment}
  </div>
);
