import React, { useState, useEffect, useContext, createContext } from "react";
import PropTypes from "prop-types";
import isCssEllipsisApplied from "./utils/isCssEllipsisApplied";
import TruncatedText from "./text";
import ShowMore from "./showMore";
import ShowLess from "./showLess";

const ClampContext = createContext();

export const useClampContext = () => {
  const context = useContext(ClampContext);

  if (!context) {
    throw new Error(
      `Clamp show more/less components cannot be rendered outside the Clamp component`
    );
  }

  return context;
};

const Clamp = ({
  children,
  lines,
  maxLines,
  withTooltip,
  withToggle,
  onShowMore
}) => {
  const [sLines, setLines] = useState(lines);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    const newLines = showMore ? maxLines : lines;

    setShowMore(!showMore);
    setIsExpanded(!isExpanded);
    setLines(newLines);

    onShowMore(showMore);
  };

  const handleConfigElement = (elem) => {
    if (!elem) return;

    if (isCssEllipsisApplied(elem)) {
      if (withTooltip) {
        const title = elem.textContent;
        elem.setAttribute("title", title);
      }

      if (withToggle && !showMore && !isExpanded) {
        setShowMore(true);
      }
    } else {
      elem.removeAttribute("title");
      setShowMore(false);
    }
  };

  useEffect(() => {
    if (lines) {
      setLines(lines);
    }
  }, [lines]);

  return (
    <ClampContext.Provider
      value={{
        toggle: handleToggleShowMore,
        showMore,
        isExpanded,
        lines: sLines,
        configElement: handleConfigElement
      }}
    >
      {children}
    </ClampContext.Provider>
  );
};

Clamp.propTypes = {
  children: PropTypes.element.isRequired,
  lines: PropTypes.number,
  maxLines: PropTypes.number,
  withTooltip: PropTypes.bool,
  withToggle: PropTypes.bool,
  onShowMore: PropTypes.func
};

Clamp.defaultProps = {
  lines: 2,
  maxLines: 8,
  withTooltip: true,
  withToggle: false,
  onShowMore: () => {}
};

Clamp.Text = TruncatedText;
Clamp.ShowMore = ShowMore;
Clamp.ShowLess = ShowLess;

export default Clamp;
