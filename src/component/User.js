import React from 'react';

function User(props) {

  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <button onClick={props.deletePerson}>Delete</button>
    </div>
  );
}

export default User;