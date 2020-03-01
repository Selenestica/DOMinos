import React from 'react';
import './css/App.css';

function App() {

  return (
    <>
    <div className="container app-container">
      <h1 className="desktop-title-h1">DOMino's</h1>
      <h4>An open source pizza delivery app</h4>
      <div className="row buttons-row">
          <a className="button-as" href="/order-details">
            <div id="carryout-button-div" className="col l6 offset-l3 s12 m12 green">
              <div>
                <i className="material-icons carryout-icon">local_pizza</i>
                <h1 className="button-h1s">Start</h1>
              </div>
            </div>
          </a>
      </div>
    </div>
    </>
  );
}

export default App;
