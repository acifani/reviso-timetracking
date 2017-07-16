const overview = (state = {
  overviews: [],
  fetching: false,
  fetched: false,
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_OVERVIEW_PENDING': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_OVERVIEW_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_OVERVIEW_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: null,
        overviews: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default overview;
