import React from 'react';
import axios from 'axios';

class Thumbnail extends React.Component {

  updateCelebrity = () => {
    let { index, celebrity } = this.props;
    this.props.updateCelebrity(index);
    axios.put(`http://localhost:3001/api/celebrities/${celebrity.id}`, celebrity)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  

  deleteCelebrity = (event) => {
    let { index, celebrity } = this.props;
    event.preventDefault();
    this.props.deleteCelebrity(index);
    axios.delete(`http://localhost:3001/api/celebrities/${celebrity.id}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  render() {
    let {celebrity} = this.props;
    return (
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div className="thumbnail">
          <img src={celebrity.image_url} alt="celebrities_image" />
          <div className="caption">
            <h3>{celebrity.name}</h3>
            <p>{celebrity.description}</p>
            <p>
              <button type="button"
                      className="btn btn-warning"
                      onClick={this.updateCelebrity}
                      ><i className="fa fa-edit"/></button>
              <button type="button"
                      className="btn btn-danger"
                      onClick={this.deleteCelebrity}
                      ><i className="fa fa-trash"/></button>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Thumbnail;