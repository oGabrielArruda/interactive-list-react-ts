import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}


function App() {
  const [people, setPeople] = useState<IState["people"]>([{
    name: 'LeBron James',
    url: 'https://img.ifunny.co/images/4f3eea602668a6dddbd3311521fc378c8b314e064f4d2bf152fddeffc34d6005_1.jpg',
    age: 36,
    note: 'Allergic to staying on the same team'
  }]);

people.map(person => {
  person.age = 3;
});

  return (
    <div className="App">
      <h1> People invited to my Party </h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
