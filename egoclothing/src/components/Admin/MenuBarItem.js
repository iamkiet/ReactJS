import React from 'react';
import '../com-css/MenuBarItem.css';

class MenuBarItem extends React.Component {
  onMenuBarItemClick = () => {
    this.props.onMenuBarItemClick(this.props.index);
  }
  render() {
    
    return (
      <li className={this.props.isActive ? 'active' : ''} onClick={this.onMenuBarItemClick}>
        <a>{this.props.Content}</a>
      </li>
    )
  }
}

export default MenuBarItem;