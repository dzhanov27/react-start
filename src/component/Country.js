import React from 'react';

function Country(props) {
  return(
    <li>Country name: {props.data.name}
    <p>Country capital: {props.data.capital}</p>
    <img src={props.data.falg} alt={props.data.name}></img>
    </li>
  );
}

export default Country;