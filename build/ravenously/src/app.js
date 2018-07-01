import React from 'react';
import './app.css';
import { BusinessList } from './components/BusinessList/BusinessList.js';
import { SearchBar } from './components/SearchBar/SearchBar.js';
import Yelp from './Utils/Yelp.js';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: []
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
}
}
export default App;
