import React from 'react';
import { connect } from 'react-redux';

import { getAllEntries, editEntry, deleteEntry, updateFormField } from '../actions';
import FilterableEntryList from '../components/FilterableEntryList';

const mapStateToProps = (state) => ({
  entries: state.entries.entries,
  form: state.form.form
});

const mapDispatchToProps = (dispatch) => ({
  fetchEntries: () => dispatch(getAllEntries()),
  editEntry: (id, entry) => dispatch(editEntry(id, entry)),
  deleteEntry: id => dispatch(deleteEntry(id)),
  updateFormField: (name, value) => dispatch(updateFormField(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterableEntryList);
