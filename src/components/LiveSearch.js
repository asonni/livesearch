import React, { Component } from 'react';

import SearchBar from './SearchBar';
import SportList from './SportList';

class LiveSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    const sports = this.props.sports.filter(sport =>
      sport.label.includes(this.state.term)
    );
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SearchBar onChange={term => this.setState({ term })} />
          <SportList sports={sports} />
        </div>
      </div>
    );
  }
}

export default LiveSearch;
