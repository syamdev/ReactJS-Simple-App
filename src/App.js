import React, { useState } from 'react';
import Header from './components/header';
import Input from './components/input';
import playerData from './data';
import Cards from './containers/Cards';
import './App.css';

function App() {
  const [title, setTitle] = useState('')
  const changeHandler = e => {
    setTitle(e.target.value)
  }
  const playerFilter = playerData.filter(player => player.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))

  return (
    <div className="App">
      <Header/>
      <Input value={title} change={changeHandler}/>
      <Cards playerData={playerFilter}/>
    </div>
  );
}

export default App;
