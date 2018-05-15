import React from 'react';
import axios from 'axios';

class NewCelebrityForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image_url: '',
      description: ''
    }
  }

  onClear = () => {
    this.setState({
      name: '',
      image_url: '',
      description: ''
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAddNew(this.state);
    this.onClear();
    this.props.onToggleAddNewForm();
    let celebrity = this.state;
    axios.post(`http://localhost:3001/api/celebrities`, celebrity )
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(`Error in CREATE API - ${err}`);
      })
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
          <h3 className="panel-title">ADD NEW CELEBRITY</h3>
        </div>
        <div className="panel-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Name :</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={ this.state.name }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Image URL :</label>
              <input
                type="text"
                className="form-control"
                name="image_url"
                value={ this.state.image_url }
                onChange={ this.onValueChange }
              />
            </div>
            <div className="form-group">
              <label>Description :</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={ this.state.description }
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

export default NewCelebrityForm;