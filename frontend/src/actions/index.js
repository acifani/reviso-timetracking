import axios from 'axios';

const baseUrl = 'http://212.237.1.146:8889/api/v0.1/';

export const getAllEntries = () => ({
  type: 'FETCH_ENTRIES',
  payload: axios.get(baseUrl + 'entries'),
});

export const addEntry = entry => ({
  type: 'ADD_ENTRY',
  payload: axios.post(baseUrl + 'entries', entry),
});

export const deleteEntry = id => ({
  type: 'DEL_ENTRY',
  payload: id,
});

export const editEntry = (id, entry) => ({
  type: 'EDIT_ENTRY',
  payload: { id, entry },
});

export const fetchCustomerOptions = () => dispatch => {
  dispatch({
    type: 'FETCH_CUSTOMER_OPTIONS_FULFILLED',
    payload: ['Customer1', 'Customer2', 'Customer3'],
  });
};

export const updateFormField = (name, value) => ({
  type: 'UPDATE_FORM_FIELD',
  payload: { name, value },
});

