const form = (state = {
  form: {
    entry: {},
    customerOptions: [],
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMER_OPTIONS': {
      return {
        ...state,
        fetching: true,
      };
    }
    case 'FETCH_CUSTOMER_OPTIONS_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    }
    case 'FETCH_CUSTOMER_OPTIONS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        form: {
          ...state.form,
          customerOptions: action.payload,
        },
      };
    }
    case 'UPDATE_FORM_FIELD': {
      return {
        ...state,
        form: {
          ...state.form,
          entry: {
            ...state.form.entry,
            [action.payload.name]: action.payload.value,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default form;
