import React,  { Component } from 'react';

import './ModalWindow.css';

class ModalWindow extends Component {
  state = {
    data: []
  }

  componentWillMount = (name) => {
    fetch('https://restcountries.eu/rest/v2/name/' + name)
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div class="modal">
        <div class="modal_window">

        </div>
      </div>
    );
  }

}



export default ModalWindow;