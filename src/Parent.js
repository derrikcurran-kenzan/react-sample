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
      addedChildItems: [],
    };

    this.handleToggleChildClick = this.handleToggleChildClick.bind(this);
    this.handleChildMessageClick = this.handleChildMessageClick.bind(this);
    this.addChildItem = this.addChildItem.bind(this);
    this.resetChildItems = this.resetChildItems.bind(this);
  }

  componentWillMount() {
    window.document.title = 'React Exercise';
  }

  addChildItem(item) {
    this.setState({
      addedChildItems: [
        ...this.state.addedChildItems,
        item,
      ],
    })
  }

  resetChildItems() {
    this.setState({ addedChildItems: [] });
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
      addedChildItems,
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
            ...addedChildItems,
          ]}
          options={{
            headerTransform: HEADER_TRANSFORM.UPPERCASE,
          }}
          addChildItem={this.addChildItem}
          resetChildItems={this.resetChildItems}
          onMessageClick={this.handleChildMessageClick}
        />}
      </div>
    );
  }
}

export default Parent;