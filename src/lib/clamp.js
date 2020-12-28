import React, { useState, Fragment, useRef, useEffect } from "react";
import isCssEllipsisApplied from "./utils/isCssEllipsisApplied";
import TruncatedElement from "./truncatedElement";

const Clamp = ({
    children,
    lines = 3,
    maxLines = 11,
    withTooltip = true,
    withToggle = false,
    texts = {
        showMore: "More",
        showLess: "Less",
    }
}) => {
    const element = useRef();
    const [sLines, setLines] = useState(lines);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleToggleShowMore = (show) => {
        const newLines = show ? maxLines : lines;

        setShowMore((showMore) => !showMore);
        setIsExpanded((isExpanded) => !isExpanded);
        setLines(newLines);
    };

    const handleGetRef = (elem) => {
        if (elem) {
            element.current = elem;
        }
    };

    useEffect(() => {
        const handleConfigElement = () => {
            const elem = element.current;

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

        element.current && handleConfigElement();
    }, [isExpanded, showMore, withToggle, withTooltip, children]);

    return (
        <Fragment>
            <TruncatedElement lines={sLines} getRef={handleGetRef}>
                {children}
            </TruncatedElement>

            {showMore && !isExpanded && (
                <button
                    type="button"
                    onClick={() => handleToggleShowMore(true)}
                >
                    {texts.showMore}
                </button>
            )}

            {isExpanded && (
                <button
                    type="button"
                    onClick={() => handleToggleShowMore(false)}
                >
                    {texts.showLess}
                </button>
            )}
        </Fragment>
    );
};

export default Clamp;
