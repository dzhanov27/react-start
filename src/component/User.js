import React from 'react';

function User(props) {

  const incAge = () => {
    if(props.ageFunc){
      return(<button onClick={props.ageFunc}>Change age</button>)
    }
  }

  return(
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <button onClick={props.changeFunc}>Change name</button>
      {incAge()}
    </div>
  );
}

export default User;