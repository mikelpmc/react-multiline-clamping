import React from "react";
import PropTypes from "prop-types";
import { useClampContext } from "./clamp";
import orchestrateClickEvents from "./utils/orchestrateClickEvents";
import cloneReactElement from "./utils/cloneReactElement";

const ShowMore = ({ children }) => {
  const { toggle, showMore, isExpanded } = useClampContext();

  return showMore && !isExpanded
    ? cloneReactElement(children, {
        onClick: () => orchestrateClickEvents(children.props.onClick, toggle)
      })
    : null;
};

ShowMore.propTypes = {
  children: PropTypes.element
};

ShowMore.defaultProps = {
  children: <button type="button">More</button>
};

export default ShowMore;
