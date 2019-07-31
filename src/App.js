import React from 'react';

//import CountryContainer from './container/CountryContainer';
import User from './component/User'

class App extends React.Component {

  state = {
    person: [{
      name: 'A',
      age: 20
    },{
      name: 'B',
      age: 19
    },{
      name: 'C',
      age: 21
    },{
      name: 'D',
      age: 23
    },{
      name: 'E',
      age: 22
    }],
  }

  deletePerson = (index) => {
    let person = this.state.person;
    person.splice(index,1);

    this.setState({person});
  }

  render(){
    return(
      <div className="App">
        {this.state.person.map((item, index) => {
          return (
            <User
              key = {index}
              name = {item.name}
              age = {item.age}
              id = {index}
              deletePerson = {() => this.deletePerson(index)}
            />
          );
        })}
      </div>
    );
  }
}

  // render(){
  //   return(
  //     <div className="person">
  //       <CountryContainer />
  //     </div>
  //   );
  // }

export default App;