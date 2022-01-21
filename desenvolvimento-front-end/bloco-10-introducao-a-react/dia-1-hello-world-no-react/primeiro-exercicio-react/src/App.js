import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['Estudar HTML', 'Estudar CSS', 'Estudar JS', 'Estudar React']

// Minha solução: 

function App() {
  return (
    compromissos.map((compromisso)=>Task(compromisso))
  );
}


// Solução gabarito Trybe:

/*
class App extends React.Component {
  render() {
    return (
      <ul>{ compromissos.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}
*/

export default App;
