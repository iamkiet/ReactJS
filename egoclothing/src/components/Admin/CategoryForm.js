import React from 'react';
import axios from 'axios';

class CategoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      TenLoaiSanPham: '',
    }
  }

  onClear = () => {
    this.setState({
      TenLoaiSanPham: '',
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.onClear();
    this.props.onToggleAddNewForm();
    let cate = this.state;
    axios.post(`http://localhost:3333/api/v1/product_type`, cate )
      .then(res => {
        console.log(res.data);
        console.log(cate);
        cate = {...cate,MaLoaiSanPham: res.data.data.insertId};
        console.log(cate);
      })
      .catch(err => {
        console.log(`Error in CREATE API - ${err}`);
      })
    this.props.onAddNew(cate);
  }

  onValueChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;

    this.setState({
      [name]: value
    })
  }

  render() {
    const newCelebrityFormStyle = {
      border: this.props.isOpenModal ? '1px solid #E0F0D9' : 'none',
      height: this.props.isOpenModal ? '380px' : '0',
      transition: '0.5s height linear'
    }

    return (

      <div className="panel panel-success" style={newCelebrityFormStyle}>
        <div className="panel-heading">
          <h3 className="panel-title">ADD NEW ACCOUNT</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên Loại Sản Phẩm:</label>
              <input
                type="text"
                className="form-control"
                name="TenLoaiSanPham"
                value={ this.state.TenLoaiSanPham }
                onChange={ this.onValueChange }
              />
            </div>
            <br />
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-success btn-lg"
              >Add</button>&nbsp;
                  <button
                type="button"
                className="btn btn-danger btn-lg"
              onClick={ this.onClear }
              >Clear</button>
            </div>
          </form>
        </div>
      </div>

    )
  }
}

export default CategoryForm;