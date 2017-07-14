import axios from 'axios';

const BASE_URL = 'http://212.237.1.146:8889/api/v0.1/';

export const getAllEntries = () => ({
  type: 'FETCH_ENTRIES',
  payload: axios.get(BASE_URL + 'entries'),
});

export const addEntry = entry => ({
  type: 'ADD_ENTRY',
  payload: axios.post(BASE_URL + 'entries', entry),
});

export const deleteEntry = id => dispatch => {
  dispatch({ type: 'DEL_ENTRY_PENDING' });
  return axios.delete(BASE_URL + 'entries/' + id)
    .then(() => dispatch({ type: 'DEL_ENTRY_SUCCESSFUL', payload: id }))
    .catch(error => dispatch({ type: 'DEL_ENTRY_REJECTED', payload: error }));
};

export const editEntry = (id, entry) => ({
  type: 'EDIT_ENTRY',
  payload: axios.put(BASE_URL + 'entries/' + id, entry),
});

export const fetchCustomerOptions = () => dispatch => {
  // fake api call
  dispatch({
    type: 'FETCH_CUSTOMER_OPTIONS_FULFILLED',
    payload: ['Customer1', 'Customer2', 'Customer3'],
  });
};

export const updateFormField = (name, value) => ({
  type: 'UPDATE_FORM_FIELD',
  payload: { name, value },
});

export const getOverview = () => ({
  type: 'FETCH_OVERVIEW',
  payload: axios.get(BASE_URL + 'entries/overview')
});

