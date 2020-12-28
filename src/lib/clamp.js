import React, { useState, Fragment, useEffect } from "react";
import isCssEllipsisApplied from "./utils/isCssEllipsisApplied";
import TruncatedElement from "./truncatedElement";

const Clamp = ({
    children,
    lines = 2,
    maxLines = 8,
    withTooltip = true,
    withToggle = false,
    texts = {
        showMore: "More",
        showLess: "Less",
    },
    onShowMore = () => {},
}) => {
    const [sLines, setLines] = useState(lines);
    const [isExpanded, setIsExpanded] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const handleToggleShowMore = (show) => {
        const newLines = show ? maxLines : lines;

        setShowMore((showMore) => !showMore);
        setIsExpanded((isExpanded) => !isExpanded);
        setLines(newLines);

        onShowMore(show);
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
        <Fragment>
            <TruncatedElement lines={sLines} getRef={handleConfigElement}>
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
