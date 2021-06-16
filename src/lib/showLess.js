import React from "react";
import PropTypes from "prop-types";
import { useClampContext } from "./clamp";
import cloneReactElement from "./utils/cloneReactElement";
import orchestrateClickEvents from "./utils/orchestrateClickEvents";

const ShowLess = ({ children }) => {
  const { toggle, isExpanded } = useClampContext();

  return isExpanded
    ? cloneReactElement(children, {
        onClick: () => orchestrateClickEvents(children.props.onClick, toggle)
      })
    : null;
};

ShowLess.propTypes = {
  children: PropTypes.element
};

ShowLess.defaultProps = {
  children: <button type="button">Less</button>
};

export default ShowLess;
