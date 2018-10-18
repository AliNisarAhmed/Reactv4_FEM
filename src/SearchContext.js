import React from 'react';

const SearchContext = React.createContext({
  location: 'Seattle, WA',
  animal: '',
  breed: '',
  breeds: [],
  handleAnimalChange() {},
  handleBreedChange () {},
  handleLocationChange () {},
  getBreeds() {},
});

export default SearchContext;