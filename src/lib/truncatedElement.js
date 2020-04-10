import React, { cloneElement } from 'react';

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

        const clonedElement = cloneElement(childrenElement, {
            style: { ...childrenElement.props.style, ...getStyles() },
            ref: handleGetRef
        });

        return clonedElement;
    };

    return getClonedChildren();
};

export default TruncatedElement;
