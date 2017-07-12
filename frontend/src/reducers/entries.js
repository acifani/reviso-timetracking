const entries = (state = {
  entries: [],
  fetching: false,
  fetched: false,
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
        error: action.payload,
      };
    }
    case 'FETCH_ENTRIES_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        entries: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default entries;
