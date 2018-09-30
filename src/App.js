import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

class App extends React.Component {
  

  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Fuzzy" breed="daschund" animal="dog"/>
        <Pet name="Luna" breed="Havanese" animal="dog"/>
        <Pet name="Rocky" breed="Iranian" animal="cat"/>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));