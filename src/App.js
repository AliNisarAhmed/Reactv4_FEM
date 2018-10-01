import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';
import { Router } from "@reach/router";
import Details from './Details';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));