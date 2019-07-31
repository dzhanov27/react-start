import React,  { Component } from 'react';

import './CountryContainer.css';
import Country from '../component/Country';

class CountryContainer extends Component {
  state = {
    data: []
  }

  componentWillMount = () => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(result => this.setState({ data: result }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <ul className="country-list">
        {this.state.data.map(item => <Country data={item}/>)}
      </ul>
    );
  }

}



export default CountryContainer;