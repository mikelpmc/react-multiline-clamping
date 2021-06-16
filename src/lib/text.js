import React from "react";
import PropTypes from "prop-types";
import { useClampContext } from "./clamp";
import TruncatedElement from "./truncatedElement";

const TruncatedText = ({ children }) => {
  const { lines, configElement } = useClampContext();

  return (
    <TruncatedElement lines={lines} getRef={configElement}>
      {children}
    </TruncatedElement>
  );
};

TruncatedText.propTypes = {
  children: PropTypes.element.isRequired
};

export default TruncatedText;
