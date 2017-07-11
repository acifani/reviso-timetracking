import React, { Component } from 'react';
import FilterableEntryList from './FilterableEntryList';

class App extends Component {
  render() {
    return (
        <div>
          <FilterableEntryList entries={this.props.entries}/>
        </div>
    );
  }
}

export default App;
