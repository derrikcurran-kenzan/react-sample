import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Child, { LABEL_TRANSFORM } from './Child';

class Parent extends Component {
  static propTypes = {

  };

  static defaultProps = {

  };

  constructor(props) {
    super(props);

    this.state = {
      childVisible: false,
    };

    this.handleToggleChild = this.handleToggleChild.bind(this);
  }

  handleToggleChild() {
    this.setState({
      childVisible: !this.state.childVisible,
    });
  }

  render() {
    const {
      childVisible,
    } = this.state;

    return (
      <div>
        <h1>Parent Component</h1>
        <button onClick={this.handleToggleChild}>Toggle Child</button>
        {childVisible && <Child
          label="Child Comp."
          items={[
            'Item 1 (string)',
            <span>Item 2 (span)</span>,
            <strong>Item 3 (strong)</strong>,
          ]}
          options={{
            labelTransform: LABEL_TRANSFORM.UPPERCASE,
          }}
        />}
      </div>
    );
  }
}

export default Parent;