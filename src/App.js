import React from 'react';

//import CountryContainer from './container/CountryContainer';
import User from './component/User'

class App extends React.Component {

  // render(){
  //   return(
  //     <div className="person">
  //       <CountryContainer />
  //     </div>
  //   );
  // }

  state = {
    person: [{
      name: 'A',
      age: 20
    },{
      name: 'B',
      age: 19
    }],
  }

  changeName = () => {
    this.setState({
      person: [
        {name: 'Mike', age: 25},
        {name: 'Alex', age: 30}
      ]
    })
  }

  increaseAge = () => {
    let person = this.state.person.map(item => {
      return {
        name: item.name,
        age: item.age + 1
      }
    })

    this.setState({person})
  }

  render(){
    return(
      <div className="person">
        <User 
          name = {this.state.person[0].name}
          age = {this.state.person[0].age}
          changeFunc = {this.changeName}
          ageFunc = {this.increaseAge}
        />
        <User 
          name = {this.state.person[1].name}
          age = {this.state.person[1].age}
          changeFunc = {this.changeName}
        />
      </div>
    );
  }
}

export default App;