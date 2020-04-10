import React, { useState, Fragment } from 'react';
import isCssEllipsisApplied from './utils/isCssEllipsisApplied';
import TruncatedElement from './truncatedElement';

const Clamp = ({
    children,
    lines = 3,
    maxLines = 11,
    withTooltip = true,
    withToggle = false,
    texts = {
        showMore: 'More',
        showLess: 'Less'
    }
}) => {
    const [sLines, setLines] = useState(lines);
    const [showMore, setShowMore] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const shouldApplyTooltip = elem => {
        return Boolean(isCssEllipsisApplied(elem) && withTooltip);
    };

    const handleShowToggle = () => {
        if (withToggle) {
            if (!showMore && !isExpanded) {
                setShowMore(true);
            }
        }
    };

    const handleInitElement = elem => {
        if (shouldApplyTooltip(elem)) {
            const title = elem.textContent;
            elem.setAttribute('title', title);
        }

        handleShowToggle();
    };

    const handleToggleShowMore = show => {
        const newLines = show ? maxLines : lines;

        setShowMore(showMore => !showMore);
        setIsExpanded(isExpanded => !isExpanded);
        setLines(newLines);
    };

    const handleGetRef = elem => {
        if (elem) handleInitElement(elem);
    };

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
