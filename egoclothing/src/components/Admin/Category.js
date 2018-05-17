import React, { Component } from 'react';
// import axios from 'axios';
import Thumbnail from './Thumbnail';
import CategoryForm from './CategoryForm';

class Category extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categories: [],
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
    let newCategories = [...this.state.categories,data]
    this.setState({categories: newCategories});
  }

  onUpdate = (index) => {
    
  }


  onDelete = (index) => {
    let items = [...this.state.categories];
    let i = items.findIndex(cur => cur.MaLoaiSanPham === index);
    items.splice(i,1);
    this.setState({
        categories: items
    })
  }

    componentDidMount() {
      fetch("http://localhost:3333/api/v1/product_type")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              categories: result.data
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
  
    render() {
      let listThumbnail = this.state.categories.map((category) => {
        return <Thumbnail key={category.MaLoaiSanPham}
                          index={category.MaLoaiSanPham}
                          name={category.TenLoaiSanPham}
                          onDelete={this.onDelete}
                          update={this.onUpdate}
                          type={3}
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
            <h1>Categories</h1>
          </div>
          <hr />
          <button type="button"
                  className="btn btn-lg btn-success"
                  onClick={this.onToggleAddNewForm}
                  ><i className="fa fa-plus"></i></button>
          <hr />
          <CategoryForm isOpenModal={this.state.isOpenModal} onAddNew={this.onAddNew} onToggleAddNewForm={this.onToggleAddNewForm} />
          <div className="row">
            {listThumbnail}
          </div>
        </div>
        );
      }
    }
  }

  export default Category;