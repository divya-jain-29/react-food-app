import React from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import banner from './assets/banner.jpeg';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="container-fluid">
      <div className="jumbotron text-center border-bottom">
        <img src={banner} height="150px" alt="Logo"/>
        <p className="site-name font-weight-bold">OrderYourFoodNow.com</p>
        <p>Simple Web interface to Order food</p>
      </div>
      <div className="container-fluid">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
