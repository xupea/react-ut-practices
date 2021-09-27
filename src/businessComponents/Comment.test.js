/**
 * 业务型组件 – 事件调用
 */
import { render, screen, fireEvent } from "@testing-library/react";
import { Comment } from "./Comment";

describe("<Comments />", () => {
  test("should send id and comment when user click the comment", () => {
    const trackClickEvent = jest.fn();
    const content = {
      id: 1,
      comment: "javascript is best programming language!",
    };

    render(<Comment content={content} trackClickEvent={trackClickEvent} />);

    fireEvent.click(screen.getByTestId("comment"));

    expect(trackClickEvent).toHaveBeenCalledWith(content.id, content.comment);
  });
});
