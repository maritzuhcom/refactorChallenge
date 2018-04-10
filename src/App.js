import React from 'react';
import './App.css';

import Header from './components/Header';
import Timer from './components/Timer';
import Todo from './components/Todo';

const App = () => (
  <main id="app">
    <Header text="Todo App: Maritza Edition" />
    <Timer />
    <Todo />
  </main>
);

export default App;
