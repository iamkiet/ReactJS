import React, { Component } from 'react';
// import axios from 'axios';
import Thumbnail from './Thumbnail';
import AccountForm from './AccountForm';

class Account extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        accounts: [],
        isOpenModal: false
      };
    }
  
    

  onToggleAddNewForm = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })
  }

  onAddNew = (data) => {
    // alert(data);
    let newItems = [...this.state.accounts,data]
    this.setState({accounts: newItems});
  }

  onUpdate = (index) => {
    
  }


  onDelete = (index) => {
    let items = [...this.state.accounts];
    let i = items.findIndex(cur => cur.MaTaiKhoan === index);
    items.splice(i,1);
    this.setState({
      accounts: items
    })
  }

  componentWillMount() {
    fetch("http://localhost:3333/api/v1/account")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              accounts: result.data
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
  }

    // componentDidMount() {
    //   fetch("http://localhost:3333/api/v1/account")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         this.setState({
    //           isLoaded: true,
    //           accounts: result.data
    //         });
    //       },
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
    // }
  
    render() {
      let listThumbnail = this.state.accounts.map((account) => {
        return <Thumbnail key={account.MaTaiKhoan}
                          index={account.MaTaiKhoan}
                          name={account.TenDangNhap}
                          description={account.TenHienThi}
                          onDelete={this.onDelete}
                          update={this.onUpdate}
                          type={1}
                          />
      })
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="container">
          <div className="jumbotron">
            <h1>Accounts</h1>
          </div>
          <hr />
          <button type="button"
                  className="btn btn-lg btn-success"
                  onClick={this.onToggleAddNewForm}
                  ><i className="fa fa-plus"></i></button>
          <hr />
          <AccountForm isOpenModal={this.state.isOpenModal} onAddNew={this.onAddNew} onToggleAddNewForm={this.onToggleAddNewForm} />
          <div className="row">
            {listThumbnail}
          </div>
        </div>
        );
      }
    }
  }

  export default Account;