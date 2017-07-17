import form from './form';

describe('reducers', () => {
  describe('form', () => {
    const MOCK_CUSTOMERS = ['customer1', 'customer2', 'customer3'];

    const MOCK_ENTRY = {
      customer: 'customer',
      length: 60,
      hourly_rate: 60,
    };

    const initialState = {
      form: {
        entry: {},
        customerOptions: [],
      },
      fetching: false,
      fetched: false,
      error: null,
    };

    it('should provide initial state', () => {
      expect(form(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_CUSTOMER_OPTIONS_PENDING', () => {
      expect(form(initialState, { type: 'FETCH_CUSTOMER_OPTIONS_PENDING' })).
          toEqual({
            ...initialState,
            fetching: true,
          });
    });

    it('should handle FETCH_CUSTOMER_OPTIONS_REJECTED', () => {
      expect(form(
          initialState,
          { type: 'FETCH_CUSTOMER_OPTIONS_REJECTED', payload: 'err' },
      )).toEqual({
        ...initialState,
        fetching: false,
        fetched: false,
        error: 'err',
      });
    });

    it('should handle FETCH_CUSTOMER_OPTIONS_FULFILLED', () => {
      expect(form(
          initialState,
          {
            type: 'FETCH_CUSTOMER_OPTIONS_FULFILLED',
            payload: MOCK_CUSTOMERS,
          },
      )).toEqual({
        ...initialState,
        fetching: false,
        fetched: true,
        error: null,
        form: {
          ...initialState.form,
          customerOptions: MOCK_CUSTOMERS,
        },
      });
    });

    it('should handle UPDATE_FORM_FIELD', () => {
      const state = {
        ...initialState,
        form: { ...initialState.form, entry: MOCK_ENTRY },
      };

      expect(form(
          state,
          {
            type: 'UPDATE_FORM_FIELD',
            payload: { name: 'customer', value: 'updated' },
          },
      )).toEqual({
        ...state,
        form: {
          ...state.form,
          entry: {
            ...state.form.entry,
            customer: 'updated',
          },
        },
      });
    });
  });
});
