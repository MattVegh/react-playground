import React, { Component } from 'react';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drill/HelloWorld';
import Bomb from './state-drill/Bomb';
import RouletteGun from './state-drill/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drill/Accordion';

const tabsProp = [
  { name: 'First tab',
    content: 'Content of first tab' },
  { name: 'Second tab',
    content: 'second tab of content' },
  { name: 'Third tab',
    content: 'content for third tab' },
];


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
        <Tabs tabs={tabsProp} />
        <Accordion />
      </div>
      
    );
  }
}

export default App;