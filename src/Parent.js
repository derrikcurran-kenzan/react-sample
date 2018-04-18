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
      activityEvents: [],
    };

    this.addChildItem = this.addChildItem.bind(this);
    this.resetChildItems = this.resetChildItems.bind(this);
    this.logActivityEvent = this.logActivityEvent.bind(this);
    this.handleToggleChildClick = this.handleToggleChildClick.bind(this);
    this.handleChildMessageClick = this.handleChildMessageClick.bind(this);
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

  logActivityEvent(activityEvent) {
    this.setState({
      activityEvents: [
        ...this.state.activityEvents,
        activityEvent,
      ],
    });
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
      activityEvents,
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
          logActivityEvent={this.logActivityEvent}
          onMessageClick={this.handleChildMessageClick}
          onUnmount={this.logActivityEvent.bind(this, 'Child Component Removed')}
        />}

        <h3>Activity Log:</h3>
        <ul className={`${cnRoot}--activity`}>
          {activityEvents && activityEvents.map((event, idx) => <li key={idx}>{event}</li>)}
        </ul>
      </div>
    );
  }
}

export default Parent;