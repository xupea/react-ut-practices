/**
 * 业务型组件 – 事件调用
 */
import { render, screen } from "@testing-library/react";
import { Feature1 } from "./Feature1";
import { FeatureToggle } from "./FeatureToggle";

describe("<FeatureToggle />", () => {
  test("should not render children component when remote toggle does not exist", () => {
    render(
      <FeatureToggle features={{}} featureName="Feature1">
        <Feature1 />
      </FeatureToggle>
    );

    const children = screen.queryAllByTestId("feature1");

    expect(children).toHaveLength(0);
  });

  it("should render children component when remote toggle is present and is on", () => {
    const features = {
      Feature1: true,
    };

    render(
      <FeatureToggle features={features} featureName="Feature1">
        <Feature1 />
      </FeatureToggle>
    );

    const children = screen.queryAllByTestId("feature1");

    expect(children).toHaveLength(1);
  });

  it("should not render children component when remote toggle is present but is off", () => {
    const features = {
      Feature1: false,
    };

    render(
      <FeatureToggle features={features} featureName="Feature1">
        <Feature1 />
      </FeatureToggle>
    );

    const children = screen.queryAllByTestId("feature1");

    expect(children).toHaveLength(0);
  });
});
