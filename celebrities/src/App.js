import React, { Component } from 'react';
// import axios from 'axios';
import Thumbnail from './components/Thumbnail';
import NewCelebrityForm from './components/NewCelebrityForm';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      celebrities: [],
      isOpenModal: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/celebrities')
    .then(res => res.json())
    .then(celebrities => {
      this.setState({
        celebrities
      })
    })
    .catch(err => {
      console.log(err.toString());
    })
  }

  

  onToggleAddNewForm = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal
    })
  }

  onAddNew = (data) => {
    // alert(data);
    let { celebrities } = this.state;
    celebrities.push(data)
    this.setState({
      celebrities
    })
  }

  onUpdateCelebrity = (index) => {
    
  }


  onDeleteCelebrity = (index) => {
    let { celebrities } = this.state;
    celebrities.splice(index, 1);
    this.setState({
      celebrities
    })
  }

  render() {
    let listThumbnail = this.state.celebrities.map((celebrity, index) => {
      return <Thumbnail key={index}
                        index={index}
                        celebrity={celebrity}
                        updateCelebrity={this.onUpdateCelebrity}
                        deleteCelebrity={this.onDeleteCelebrity}
                        />
    })
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>celebrities 2018</h1>
        </div>
        <hr />
        <button type="button"
                className="btn btn-lg btn-success"
                onClick={this.onToggleAddNewForm}
                ><i className="fa fa-plus"></i></button>
        <hr />
        <NewCelebrityForm isOpenModal={this.state.isOpenModal} onAddNew={this.onAddNew} onToggleAddNewForm={this.onToggleAddNewForm} />
        <div className="row">
          {listThumbnail}
        </div>
      </div>
    );
  }
}

export default App;
