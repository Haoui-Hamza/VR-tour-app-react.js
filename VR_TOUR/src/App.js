import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
function App() {
  return (
    <div className="App">
      
      <Header/>
      <div className="app__home">
        <div className="app__vrframe">
          <iframe src="http://localhost:8081/index.html" width="100%" height="500"></iframe>
        </div>
        <div className="app__card">
          <b style={{color:"#fff"}}>Planetarium</b>
          <p className="">The dome can seat up to 109 visitors, has an inclination of 25 degrees, and gives you the experience of not only watching a show, but also of being in the middle of the action in the Universe. This, combined with the most up-to-date programmes for our planetarium shows, creates a stunning experience that completely immerses you in space.</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
