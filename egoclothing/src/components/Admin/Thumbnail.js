import React from 'react';
import axios from 'axios';
import '../com-css/Thumb.css';

class Thumbnail extends React.Component {

  update = () => {
    let { index, celebrity } = this.props;
    this.props.updateCelebrity(index);
    axios.put(`http://localhost:3001/api/celebrities/${celebrity.id}`, celebrity)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  

  delete = (event) => {
    let { index } = this.props;
    let url = 'http://localhost:3333/api/v1/';
    switch(this.props.type){
      case 1: url += 'account';break;
      case 2: url += 'product';break;
      case 3: url += 'product_type';break;
    }
    url += '/' + index;
    event.preventDefault();
    axios.delete(url)
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.props.onDelete(index);
    })
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="thumbnail">
          <div className="caption">
              <img className="center-block" width="200" height="200" src={this.props.image_url}/>
              <h3>{this.props.name}</h3>
              <p>{this.props.description}</p>
            <p>
              <button type="button"
                      className="btn btn-warning"
                      onClick={this.update}
                      ><i className="fa fa-edit"/></button>
              <button type="button"
                      className="btn btn-danger"
                      onClick={this.delete}
                      ><i className="fa fa-trash"/></button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Thumbnail;