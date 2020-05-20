import React from 'react';
import axios from 'axios';
import Routes from 'route'
import './App.css';


axios.defaults.baseURL = 'http://localhost:3030';

const auth = window.localStorage.getItem('auth')
if(auth) {
  axios.defaults.headers.common['Authorization'] = auth.token;
}


function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
