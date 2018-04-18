import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Child, { LABEL_TRANSFORM } from './Child';

class Parent extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child
          label="Child Comp."
          items={[
            'Item 1 (string)',
            <span>Item 2 (span)</span>,
            <strong>Item 3 (strong)</strong>,
          ]}
          options={{
            labelTransform: LABEL_TRANSFORM.UPPERCASE,
          }}
        />
      </div>
    );
  }
}

export default Parent;