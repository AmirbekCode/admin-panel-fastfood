import { useContext, useState, useRoutes } from 'react';
import { Route, parsePath, Link, Routes } from 'react-router-dom';
import './App.css';
import Grids from './components/Grids/Grid';
import Login from './components/Login/Login';
import Routers from './router/Routers';

function App() {
  return (
    <div className="App">
      <Grids />
    </div>
  )

}

export default App;
