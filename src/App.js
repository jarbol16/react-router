import React from 'react';
import './App.scss';
import Main from './Components/Main'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
