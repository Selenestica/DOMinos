import React from 'react';
import './css/App.css';

function App() {
  return (
    <>
    <div className="container app-container">
      <h1>DOMino's</h1>
      <h4>The world's first open source Domino's delivery app!</h4>
      <div className="row buttons-row">
          <a className="button-as" href="/order-details">
            <div id="carryout-button-div" className="col l6 s12 m12 green">
              <div>
                <i className="material-icons carryout-icon">local_convenience_store</i>
                <h1 className="button-h1s">Start</h1>
              </div>
            </div>
          </a>
          <a className="button-as" href="/full-menu">
            <div id="carryout-button-div" className="col l6 s12 m12 purple">
              <div>
                <i className="material-icons carryout-icon">local_convenience_store</i>
                <h1 className="button-h1s">Menu</h1>
              </div>
            </div>
          </a>
      </div>
    </div>
    </>
  );
}

export default App;
