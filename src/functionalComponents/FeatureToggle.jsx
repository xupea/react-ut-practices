import { connect } from "react-redux";

export const FeatureToggle = ({ features, featureName, children }) => {
  if (!features[featureName]) {
    return null;
  }

  return children;
};

export default connect((store) => ({ features: store.global.features }))(
  FeatureToggle
);
