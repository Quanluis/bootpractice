import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css'

class App extends Component {
  render() {
    return (
  <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Home</a>
            <a className="nav-item nav-link" href="#">About</a>
            <a className="nav-item nav-link" href="#">Contact</a>
      </div>
  </div>
</nav>
          </div>
       <h1 className = "text-primary">Bootstrap Website</h1>
  </div>
    );
  }
}

export default App;
