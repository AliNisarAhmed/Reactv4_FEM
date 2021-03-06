import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results';
import { Router, Link } from "@reach/router";
import Details from './Details';
import SearchParams from './SearchParams';
import pf from 'petfinder-client';
import SearchContext from './SearchContext';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
})

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      location: 'Seattle, WA',
      animal: '',
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      handleLocationChange: this.handleLocationChange,
      getBreeds: this.getBreeds
    }
  }

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value
    })
  };
  
  handleAnimalChange = (e) => {
    this.setState({
      animal: e.target.value,
      breed: ''
    }, this.getBreeds);
  };

  handleBreedChange = (e) => {
    this.setState({
      breed: e.target.value
    });
  };

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal })
        .then(data => {
          if (
            data.petfinder && 
            data.petfinder.breeds && 
            Array.isArray(data.petfinder.breeds.breed)
          ) {
            this.setState({ breeds: data.petfinder.breeds.breed });
          } else {
            this.setState({ breeds: [] })
          }
        })
    } else {
      this.setState({ breeds: [] });
    }
  }


  render() {
    return (
      <div>
        <header>
          <Link to="/">
            Adopt Me!
          </Link>
          <Link to="/search-params">
            <span aria-label="search" role="img">
              🔍
            </span>
          </Link>
        </header>
        <SearchContext.Provider value={this.state}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </SearchContext.Provider>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));