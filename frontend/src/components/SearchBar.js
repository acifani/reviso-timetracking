import React from 'react';
import PropType from 'prop-types';
import { Input } from 'semantic-ui-react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange =
        this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
        <form>
          <Input
              icon='search'
              placeholder='Search'
              value={this.props.filterText}
              onChange={this.handleFilterTextInputChange}
          />
        </form>
    );
  }
}

SearchBar.propTypes = {
  onFilterTextInput: PropType.func.isRequired,
  filterText: PropType.string,
};

export default SearchBar;
