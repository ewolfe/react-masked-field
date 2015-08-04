'use strict';

import React from 'react';
import cx from 'classnames';

export default class ProjectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: props.defaultTab };
  }
  render() {
    const links = [];
    const tabs = [];

    React.Children.forEach(this.props.children, child => {
      const tabName = child.props.tab;

      links.push(
        <li key={tabName} className="tab" onClick={() => this.setState({activeTab: tabName})}>
          <a>{tabName}</a>
        </li>
      );

      const className = cx('project-detail', { 'hidden': (tabName !== this.state.activeTab) });
      tabs.push(
        <div key={tabName} className={className}>
          {child}
        </div>
      );
    });

    return (
      <div className="project-box">
        <ul className="nav project-nav">
          {links}
        </ul>
        {tabs}
      </div>
    );
  }
}

ProjectBox.propTypes = {
  defaultTab: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};
