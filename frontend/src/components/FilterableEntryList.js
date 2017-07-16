import React from 'react';
import PropTypes from 'prop-types';

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

  componentWillMount() {
    this.props.fetchEntries();
  }

  handleFilterTextInputChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
        <div>
          <h1>Manage</h1>
          <SearchBar
              filterText={this.state.filterText}
              onFilterTextInput={this.handleFilterTextInputChange}
          />
          <EntryList
              entries={this.props.entries}
              form={this.props.form}
              filterText={this.state.filterText}
              editEntry={this.props.editEntry}
              deleteEntry={this.props.deleteEntry}
              updateFormField={this.props.updateFormField}
          />
        </div>
    );
  }
}

FilterableEntryList.propTypes = {
  fetchEntries: PropTypes.func.isRequired,
  entries: PropTypes.array,
  form: PropTypes.object,
  filterText: PropTypes.string,
  editEntry: PropTypes.func,
  deleteEntry: PropTypes.func,
  updateFormField: PropTypes.func,
};

export default FilterableEntryList;
