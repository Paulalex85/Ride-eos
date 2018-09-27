import React, { Component } from 'react';
import CreateUser from '../Form/CreateUser';
import SendToEOS from '../API/SendToEOS'

class App extends Component {
    constructor(props){
      super(props)

      this.api = new SendToEOS();
    }
    
    render() {
      return (
        <CreateUser api={this.api}/>
      );
    }
}

export default App;