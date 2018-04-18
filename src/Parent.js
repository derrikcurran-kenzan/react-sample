import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Child, { HEADER_TRANSFORM } from './Child';

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
    const cnRoot = 'Parent';

    const {
      childVisible,
      childMessageVisible,
    } = this.state;

    return (
      <div className={cnRoot}>
        <h1 className={`${cnRoot}--header`}>Parent Component</h1>

        <button
          className={`${cnRoot}--btn-toggle-child`}
          onClick={this.handleToggleChildClick}
        >Toggle Child</button>

        {childMessageVisible && <div className={`${cnRoot}--child-message`}>Hello World</div>}

        {childVisible && <Child
          className={`${cnRoot}--child`}
          header='Child Comp.'
          items={[
            'Item 1 (string)',
            <span>Item 2 (span)</span>,
            <strong>Item 3 (strong)</strong>,
          ]}
          options={{
            headerTransform: HEADER_TRANSFORM.UPPERCASE,
          }}
          onMessageClick={this.handleChildMessageClick}
        />}
      </div>
    );
  }
}

export default Parent;