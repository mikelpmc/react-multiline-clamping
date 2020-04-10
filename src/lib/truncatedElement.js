import React from 'react';
import PropTypes from 'prop-types';

const Tag = 'span';

const TruncatedElement = ({ children, lines, getRef }) => {
  const getStyles = () => {
    return {
      overflow: 'hidden',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: lines
    };
  };

  const getChildrenElement = () => {
    if (children.type) return children;

    return <Tag>{children}</Tag>;
  };

  const handleGetRef = elem => {
    getRef(elem);
  };

  const getClonedChildren = () => {
    const childrenElement = getChildrenElement();

    const clonedElement = React.cloneElement(childrenElement, {
      style: { ...childrenElement.props.style, ...getStyles() },
      ref: handleGetRef
    });

    return clonedElement;
  };

  return getClonedChildren();
};

TruncatedElement.propTypes = {
  children: PropTypes.node.isRequired,
  lines: PropTypes.number,
  getRef: PropTypes.func.isRequired
};

TruncatedElement.defaultProps = {
  lines: 3
};

export default TruncatedElement;
