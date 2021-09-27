/**
 * 测试的是不同的分支渲染逻辑：没有评论时，则不渲染 Comments header。
 */
import { render, screen } from "@testing-library/react";
import { CommentsSection } from "./CommentsSection";

describe("<CommentsSection />", () => {
  it("should not render a header and any comment sections when there is no comments", () => {
    render(<CommentsSection comments={[]} />);

    const header = screen.queryAllByTestId("header");
    expect(header).toHaveLength(0);
  });

  it("should render a comments section and a header when there are comments", () => {
    const contents = [
      { id: 1, comment: "javascript is best programming language!" },
      { id: 2, comment: "nobody beside you!" },
    ];
    render(<CommentsSection comments={contents} />);

    const header = screen.queryAllByTestId("header");
    expect(header).toHaveLength(1);
    expect(header[0].innerHTML).toBe("Comments");

    const comments = screen.queryAllByTestId("comment");
    expect(comments).toHaveLength(2);
  });
});
