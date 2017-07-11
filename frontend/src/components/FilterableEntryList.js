import React from 'react';
import EntryList from './EntryList';
import SearchBar from './SearchBar';

class FilterableEntryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };
    this.handleFilterTextInputChange =
        this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
        <div>
          <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.handleFilterTextInputChange}
          />
          <EntryList
              entries={this.props.entries}
              filterText={this.state.filterText}
          />
        </div>
    );
  }
}

export default FilterableEntryList;
