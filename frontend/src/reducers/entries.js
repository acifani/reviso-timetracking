const entries = (state = {
  entries: [],
  fetching: false,
  fetched: false,
  adding: false,
  added: false,
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_ENTRIES': {
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
    case 'ADD_ENTRY': {
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
    default: {
      return state;
    }
  }
};

export default entries;
