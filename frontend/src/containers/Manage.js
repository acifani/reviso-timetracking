import React from 'react';
import { connect } from 'react-redux';

import { getAllEntries } from '../actions';
import FilterableEntryList from '../components/FilterableEntryList';

class Manage extends React.Component {
  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
        <div>
          <h1>Manage</h1>
          <FilterableEntryList entries={this.props.entries}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  entries: state.entry.entries
});

const mapDispatchToProps = (dispatch) => ({
  fetchEntries: () => dispatch(getAllEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Manage);
