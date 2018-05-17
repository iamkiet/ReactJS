import React from 'react';
import '../com-css/Menu.css';
import MenuBarItem from './MenuBarItem';
import Product from './Product';
import Category from './Category';
import Account from './Account';

class MenuBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemSelected:  {
        content: 'Account',
        isActive: true
      },
      lstMenuBarItem: [
        {
          content: 'Account',
          isActive: true
        },
        {
          content: 'Product',
          isActive: false
        },
        {
          content: 'Category',
          isActive: false
        }
      ]
    }
  }

  onMenuBarClick = (index) => {
    let { lstMenuBarItem } = this.state;
    let itemSelected = this.findMenuBarItem(index);
    lstMenuBarItem.forEach((item) => {
      item.isActive = false
    })
    lstMenuBarItem[index].isActive = !lstMenuBarItem[index].isActive
    this.setState({
      itemSelected,
      lstMenuBarItem
    })
  }

  findMenuBarItem = (index) => {
    let { lstMenuBarItem } = this.state;
    let rs = null;
    lstMenuBarItem.forEach((item, i) => {
      if (i === index) {
        rs = item
      }
    })
    return rs;
  }

  renderContent = () => {
  
    let {itemSelected} = this.state
    console.log(itemSelected)
    switch (itemSelected.content) {
      case 'Product':
        return <Product/>
        break;
      case 'Category':
        return <Category/>
        break;
      default:
        return <Account/>
        break;
    }
  }


  render() {
    let lstMenuBarItem = this.state.lstMenuBarItem.map((item, index) => {
      return <MenuBarItem Content={item.content} key={index} index={index} isActive={item.isActive} onMenuBarItemClick={this.onMenuBarClick}/>
    })
    return (
      <div>
        <ul className="nav nav-pills">
          {lstMenuBarItem}
        </ul>
        {this.renderContent()}
      </div>
    )
  }
}

export default MenuBar;