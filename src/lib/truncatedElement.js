import React, { cloneElement, useMemo } from "react";

const Tag = "span";

const TruncatedElement = ({ children, lines, getRef }) => {
    const getStyles = useMemo(() => {
        return {
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: lines,
        };
    }, [lines]);

    const getChildrenElement = () => {
        if (children.type) return children;

        return <Tag>{children}</Tag>;
    };

    const getClonedChildren = () => {
        const childrenElement = getChildrenElement();

        const clonedElement = cloneElement(childrenElement, {
            style: { ...childrenElement.props.style, ...getStyles },
            ref: getRef,
        });

        return clonedElement;
    };

    return getClonedChildren();
};

export default TruncatedElement;
