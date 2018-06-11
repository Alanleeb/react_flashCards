import React, { Component } from 'react';
import './App.css';
import Card from './flashCard';

class App extends Component {
 state = { 
  cards: [
    { id: 1, question: 'What is the Capital of Idaho', answer: 'Bosie', complete: true },
    { id: 2, question: 'What is the Capital of Wyoming', answer: 'Cheyanne', complete: false },
    { id: 3, question: 'Waht is the Capital of Oregon', answer: 'Portland', complete: false },
  ]
  }

  render() {
    const { cards } = this.state;
 
    return (
      <Card flashCard="Todo List" items={cards} />
    );
  }
}

export default App;

