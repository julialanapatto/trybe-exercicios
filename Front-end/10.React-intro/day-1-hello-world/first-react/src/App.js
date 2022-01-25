
import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const listaTarefas = ['ficar em dia', 'com os exercicios', 'com os projetos', 'com a cabeça'];

class App extends React.Component {
  render() {
    return (
      <ul>{ listaTarefas.map(tarefa => Task(tarefa)) }</ul>
    );
  }
}

export default App;
