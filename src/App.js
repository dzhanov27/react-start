import React from 'react';

import CountryContainer from './container/CountryContainer';
import ModalWindow from './container/ModalWindow';

class App extends React.Component {

  state = {

  }

  render(){
    return(
      <div className="App">
        
        <CountryContainer />
      </div>
    );
  }
}

export default App;