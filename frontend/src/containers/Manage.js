import React from 'react';
import { connect } from 'react-redux';

import { getAllEntries, editEntry, deleteEntry } from '../actions';
import FilterableEntryList from '../components/FilterableEntryList';

class Manage extends React.Component {
  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
        <div>
          <h1>Manage</h1>
          <FilterableEntryList
              entries={this.props.entries}
              editEntry={this.props.editEntry}
              deleteEntry={this.props.deleteEntry}
          />
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: state.entries.entries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEntries: () => dispatch(getAllEntries()),
  editEntry: (id, entry) => dispatch(editEntry(id, entry)),
  deleteEntry: (id) => dispatch(deleteEntry(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterableEntryList);
