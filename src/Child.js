import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HEADER_TRANSFORM = Object.freeze({
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
});

class Child extends Component {
  static propTypes = {
    header: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.node),
    options: PropTypes.shape({
      headerTransform: PropTypes.oneOf(Object.values(HEADER_TRANSFORM)),
    }),
    addChildItem: PropTypes.func,
    resetChildItems: PropTypes.func,
    onMessageClick: PropTypes.func,
    onUnmount: PropTypes.func,
  };

  static defaultProps = {
    header: 'Child Component',
  };

  constructor(props) {
    super(props);
    this.handleMessageClick = this.handleMessageClick.bind(this);
  }

  componentWillMount() {
    if (this.props.addChildItem) {
      this.props.addChildItem('Added String');
    }
  }

  componentWillUnmount() {
    const {
      resetChildItems,
      onUnmount,
    } = this.props;

    resetChildItems && resetChildItems();
    onUnmount && onUnmount();
  }

  handleMessageClick() {
    if (this.props.onMessageClick) {
      this.props.onMessageClick();
    }
  }

  renderHeader() {
    const {
      header = '',
      options: {
        headerTransform,
      } = {},
    } = this.props;

    switch (headerTransform) {
      case HEADER_TRANSFORM.UPPERCASE:
        return header.toUpperCase();
      case HEADER_TRANSFORM.LOWERCASE:
        return header.toLowerCase();
      default:
        return header;
    }
  }

  render() {
    const cnRoot = 'Child';

    const header = this.renderHeader();
    const {
      items,
      options,
    } = this.props;

    return (
      <div className={cnRoot}>
        <h1 className={`${cnRoot}--header`}>{header}</h1>

        <h3>Items:</h3>
        <ul className={`${cnRoot}--items`}>
          {items && items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>

        <h3>Options:</h3>
        <ul className={`${cnRoot}--options`}>
          {options && Object.entries(options).map(([optionKey, optionValue], idx) => (
            <li key={idx}>
              <strong>{optionKey}</strong>: {optionValue}
            </li>
          ))}
        </ul>

        <button
          className={`${cnRoot}--btn-message`}
          onClick={this.handleMessageClick}
        >Hello World</button>
      </div>
    );
  }
}

export default Child;
export {
  HEADER_TRANSFORM,
};