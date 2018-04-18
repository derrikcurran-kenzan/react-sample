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
      childMessageVisible: false,
    };

    this.handleToggleChildClick = this.handleToggleChildClick.bind(this);
    this.handleChildMessageClick = this.handleChildMessageClick.bind(this);
  }

  handleToggleChildClick() {
    this.setState({
      childVisible: !this.state.childVisible,
    });
  }

  handleChildMessageClick() {
    this.setState({
      childMessageVisible: !this.state.childMessageVisible,
    });
  }

  render() {
    const {
      childVisible,
      childMessageVisible,
    } = this.state;

    return (
      <div>
        <h1>Parent Component</h1>

        <button onClick={this.handleToggleChildClick}>Toggle Child</button>

        {childMessageVisible && 'Hello World'}

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
          onMessageClick={this.handleChildMessageClick}
        />}
      </div>
    );
  }
}

export default Parent;