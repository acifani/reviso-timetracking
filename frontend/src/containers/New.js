import React from 'react';
import { connect } from 'react-redux';

import { addEntry, fetchCustomerOptions, updateFormField } from '../actions';
import NewEntryForm from '../components/NewEntryForm';

const mapStateToProps = (state) => ({
  form: state.form.form,
  formStatus: {
    error: !!state.entries.error,
    success: state.entries.added,
    loading: state.entries.adding,
  },
});

const mapDispatchToProps = (dispatch) => ({
  addEntry: entry => dispatch(addEntry(entry)),
  updateFormField: (name, value) => dispatch(updateFormField(name, value)),
  fetchCustomerOptions: () => dispatch(fetchCustomerOptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewEntryForm);
