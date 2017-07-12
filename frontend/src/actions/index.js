import axios from 'axios';

export const getAllEntries = () => ({
  type: 'FETCH_ENTRIES',
  payload: axios.get('http://212.237.1.146:8889/api/v0.1/entries'),
});

export const addEntry = entry => ({
  type: 'ADD_ENTRY',
  payload: entry,
});

export const deleteEntry = id => ({
  type: 'DEL_ENTRY',
  payload: id,
});

export const editEntry = (id, entry) => ({
  type: 'EDIT_ENTRY',
  payload: {id, entry},
});
