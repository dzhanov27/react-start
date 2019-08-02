import React from 'react';

function Country(props) {
  return(
    <li class="item"><h2>Country name: {props.data.name}</h2>
    <p>Country capital: {props.data.capital}</p>
    <p>Country population: {props.data.population} </p>
    <img class="flag" src={props.data.flag} alt={props.data.name}></img>
    <button onClick={props.deletePerson}>Delete</button>
    </li>
  );
}

export default Country;