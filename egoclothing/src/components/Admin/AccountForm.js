import React from 'react';
import axios from 'axios';

class AccountForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      TenDangNhap: '',
      MatKhau: '',
      TenHienThi: '',
      DiaChi: '',
      DienThoai: '',
      Email: ''
    }
  }

  onClear = () => {
    this.setState({
      TenDangNhap: '',
      MatKhau: '',
      TenHienThi: '',
      DiaChi: '',
      DienThoai: '',
      Email: ''
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.onClear();
    this.props.onToggleAddNewForm();
    let Account = this.state;
    axios.post(`http://localhost:3333/api/v1/account`, Account)
      .then(res => {
        console.log(res.data);
        Account = {...Account,MaTaiKhoan: res.data.data.insertId};
      })
      .catch(err => {
        console.log(`Error in CREATE API - ${err}`);
      })
    this.props.onAddNew(Account);
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
          <h3 className="panel-title">ADD NEW Account</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Tên Đăng Nhập:</label>
              <input
                type="text"
                className="form-control"
                name="TenDangNhap"
                value={ this.state.TenDangNhap }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Mật Khẩu: </label>
              <input
                type="password"
                className="form-control"
                name="MatKhau"
                value={ this.state.MatKhau }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Tên Hiển Thị:</label>
              <input
                type="text"
                className="form-control"
                name="TenHienThi"
                value={ this.state.TenHienThi }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Địa Chỉ:</label>
              <input
                type="text"
                className="form-control"
                name="DiaChi"
                value={ this.state.DiaChi }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Điện Thoại:</label>
              <input
                type="number"
                className="form-control"
                name="DienThoai"
                value={ this.state.DienThoai }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="number"
                className="form-control"
                name="Email"
                value={ this.state.Email }
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

export default AccountForm;