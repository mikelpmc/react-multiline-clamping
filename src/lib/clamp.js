import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isCssEllipsisApplied from './utils/isCssEllipsisApplied';
import TruncatedElement from './truncatedElement';

class Clamp extends Component {
  static propTypes = {
    children: TruncatedElement.propTypes.children,
    lines: TruncatedElement.propTypes.lines,
    maxLines: PropTypes.number,
    withTooltip: PropTypes.bool,
    withToggle: PropTypes.bool
  };

  static defaultProps = {
    children: TruncatedElement.defaultProps.children,
    lines: TruncatedElement.defaultProps.lines,
    maxLines: 11,
    withTooltip: true,
    withToggle: false
  };

  constructor(props) {
    super(props);

    this.state = {
      lines: this.props.lines,
      showMore: false,
      isExpanded: false
    };
  }

  shouldApplyTooltip = elem => {
    const { withTooltip } = this.props;

    return Boolean(isCssEllipsisApplied(elem) && withTooltip);
  };

  handleSetTitle = elem => {
    if (this.shouldApplyTooltip(elem)) {
      const title = elem.textContent;
      elem.setAttribute('title', title);

      this.handleShowToggle();
    }
  };

  handleShowToggle = () => {
    const { withToggle } = this.props;

    if (withToggle) {
      const { showMore, isExpanded } = this.state;

      if (!showMore && !isExpanded) {
        this.setState({
          showMore: true
        });
      }
    }
  };

  handleToggleShowMore = show => {
    const { lines, maxLines } = this.props;

    const newLines = show ? maxLines : lines;

    this.setState(prevState => ({
      showMore: !prevState.showMore,
      isExpanded: !prevState.isExpanded,
      lines: newLines
    }));
  };

  handleGetRef = elem => {
    if (elem) this.handleSetTitle(elem);
  };

  render() {
    const { lines, showMore, isExpanded } = this.state;
    const { children } = this.props;

    return (
      <Fragment>
        <TruncatedElement lines={lines} getRef={this.handleGetRef}>
          {children}
        </TruncatedElement>

        {showMore && !isExpanded && (
          <button type="button" onClick={() => this.handleToggleShowMore(true)}>
            More
          </button>
        )}

        {isExpanded && (
          <button type="button" onClick={() => this.handleToggleShowMore(false)}>
            Less
          </button>
        )}
      </Fragment>
    );
  }
}

export default Clamp;
