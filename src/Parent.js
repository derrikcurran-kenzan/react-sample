import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Child from './Child';

class Parent extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Child />
      </div>
    );
  }
}

export default Parent;