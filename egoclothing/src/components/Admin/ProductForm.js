import React from 'react';
import axios from 'axios';

class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      TenSanPham: '',
      GiaSanPham: 0,
      SoLuongTon: 0,
      MoTa: '',
      MaLoaiSanPham: 0,
      MaHangSanXuat: 0,
    }
  }

  onClear = () => {
    this.setState({
        TenSanPham: '',
        GiaSanPham: 0,
        SoLuongTon: 0,
        MoTa: '',
        MaLoaiSanPham: 0,
        MaHangSanXuat: 0,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.onClear();
    this.props.onToggleAddNewForm();
    let product = this.state;
    axios.post(`http://localhost:3333/api/v1/product`, product )
      .then(res => {
        console.log(res.data);
        product = {...product,MaSanPham: res.data.data.insertId};
      })
      .catch(err => {
        console.log(`Error in CREATE API - ${err}`);
      })
    this.props.onAddNew(product);
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
    const newItemForm = {
      border: this.props.isOpenModal ? '1px solid #E0F0D9' : 'none',
      height: this.props.isOpenModal ? '600px' : '0',
      transition: '0.5s height linear'
    }

    return (

      <div className="panel panel-success" style={newItemForm}>
        <div className="panel-heading">
          <h3 className="panel-title">ADD NEW Product</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên Sản Phẩm:</label>
              <input
                type="text"
                className="form-control"
                name="TenSanPham"
                value={ this.state.TenSanPham }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Giá Sản Phẩm:</label>
              <input
                type="number"
                className="form-control"
                name="GiaSanPham"
                value={ this.state.GiaSanPham }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Số lượng tồn:</label>
              <input
                type="number"
                className="form-control"
                name="SoLuongTon"
                value={ this.state.SoLuongTon }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Mô Tả:</label>
              <input
                type="text"
                className="form-control"
                name="MoTa"
                value={ this.state.MoTa }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Mã Loại Sản Phẩm:</label>
              <input
                type="number"
                className="form-control"
                name="MaLoaiSanPham"
                value={ this.state.MaLoaiSanPham }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Mã Hãng Sản Xuất:</label>
              <input
                type="number"
                className="form-control"
                name="MaHangSanXuat"
                value={ this.state.MaHangSanXuat }
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

export default ProductForm;