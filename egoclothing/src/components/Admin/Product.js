import React, { Component } from 'react';
// import axios from 'axios';
import Thumbnail from './Thumbnail';
import ProductForm from './ProductForm';

class Product extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        products: [],
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
    let newItems = [...this.state.products,data]
    this.setState({products: newItems});
  }

  onUpdate = (index) => {
    
  }


  onDelete = (index) => {
    let items = [...this.state.products];
    let i = items.findIndex(cur => cur.MaSanPham === index);
    items.splice(i,1);
    this.setState({
        products: items
    })
  }

    componentDidMount() {
      fetch("http://localhost:3333/api/v1/product")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result.data
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
      let listThumbnail = this.state.products.map((Product) => {
        return <Thumbnail key={Product.MaSanPham}
                          index={Product.MaSanPham}
                          name={Product.TenSanPham}
                          description={Product.GiaSanPham}
                          image_url={`../imgs/tee/${Product.HinhURL}`}
                          onDelete={this.onDelete}
                          update={this.onUpdate}
                          type={2}
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
          {/* <div className="jumbotron">
            <h1>Products</h1>
          </div> */}
          <hr />
          <button type="button"
                  className="btn btn-lg btn-success"
                  onClick={this.onToggleAddNewForm}
                  ><i className="fa fa-plus"></i></button>
          <hr />
          <ProductForm isOpenModal={this.state.isOpenModal} onAddNew={this.onAddNew} onToggleAddNewForm={this.onToggleAddNewForm} />
          <div className="row">
            {listThumbnail}
          </div>
        </div>
        );
      }
    }
  }

  export default Product;