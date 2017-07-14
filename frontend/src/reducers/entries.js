const entries = (state = {
  entries: [],
  fetching: false,
  fetched: false,
  adding: false,
  added: false,
  deleting: false,
  deleted: false,
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_ENTRIES_PENDING': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_ENTRIES_REJECTED': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };
    }
    case 'FETCH_ENTRIES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        entries: action.payload.data,
      };
    }
    case 'ADD_ENTRY_PENDING': {
      return {
        ...state,
        adding: true,
      };
    }
    case 'ADD_ENTRY_REJECTED': {
      return {
        ...state,
        adding: false,
        added: false,
        error: action.payload,
      };
    }
    case 'ADD_ENTRY_FULFILLED': {
      return {
        ...state,
        adding: false,
        added: true,
        error: null,
        entries: [...entries, action.payload.data],
      };
    }
    case 'DEL_ENTRY_PENDING': {
      return {
        ...state,
        deleting: true,
      };
    }
    case 'DEL_ENTRY_REJECTED': {
      return {
        ...state,
        deleting: false,
        error: action.payload,
      };
    }
    case 'DEL_ENTRY_SUCCESSFUL': {
      return {
        ...state,
        deleting: false,
        deleted: true,
        error: null,
        entries: state.entries.filter(entry => entry.id !== action.payload),
      };
    }
    case 'EDIT_ENTRY_PENDING': {
      return {
        ...state,
        editing: true,
      };
    }
    case 'EDIT_ENTRY_REJECTED': {
      return {
        ...state,
        editing: false,
        error: action.payload,
      };
    }
    case 'EDIT_ENTRY_FULFILLED': {
      return {
        ...state,
        editing: false,
        edited: true,
        error: false,
        entries: state.entries.map(entry =>
            entry.id === action.payload.data.id ? action.payload.data : entry
        ),
        // entries: state.entries.filter(
        //     entry => entry.id !== action.payload.data.id)
        //   .concat(action.payload.data),
      };
    }
    default: {
      return state;
    }
  }
};

export default entries;
