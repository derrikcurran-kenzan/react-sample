import React, { Component } from 'react';
import PropTypes from 'prop-types';

const LABEL_TRANSFORM = Object.freeze({
  UPPERCASE: 'uppercase',
  LOWERCASE: 'lowercase',
});

class Child extends Component {
  static propTypes = {
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.node),
    options: PropTypes.shape({
      labelTransform: PropTypes.oneOf(Object.values(LABEL_TRANSFORM)),
    }),
  };

  static defaultProps = {
    label: 'Child Component',
  };

  renderLabel() {
    const {
      label = '',
      options: {
        labelTransform,
      } = {},
    } = this.props;

    switch (labelTransform) {
      case LABEL_TRANSFORM.UPPERCASE:
        return label.toUpperCase();
      case LABEL_TRANSFORM.LOWERCASE:
        return label.toLowerCase();
      default:
        return label;
    }
  }

  render() {
    const cnRoot = 'Child';

    const label = this.renderLabel();
    const {
      items,
      options,
    } = this.props;

    return (
      <div className={cnRoot}>
        <h1 className={`${cnRoot}-label`}>{label}</h1>

        <h3>Items:</h3>
        <ul className={`${cnRoot}-items`}>
          {items && items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>

        <h3>Options:</h3>
        <ul className={`${cnRoot}-options`}>
          {options && Object.entries(options).map(([optionKey, optionValue]) => (
            <li>
              <strong>{optionKey}</strong>: {optionValue}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Child;
export {
  LABEL_TRANSFORM,
};