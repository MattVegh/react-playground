import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drill/HelloWorld';
import Bomb from './state-drill/Bomb';
import RouletteGun from './state-drill/RouletteGun';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Messages name="Messages" unread={0}/>
        <Messages name="Notifications" unread={10}/>
        <h1>YOUR APPLICATION NAME!</h1>
        <TheDate />
        <Counter count={123} />
        <HelloWorld />
        <Bomb />
        <RouletteGun />
        
      </div>
      
    );
  }
}

export default App;