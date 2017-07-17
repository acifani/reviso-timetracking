import overview from './overview';

describe('reducers', () => {
  describe('overview', () => {
    const MOCK_OVERVIEW = {
      customer: 'customer',
      total_length: 120,
      total_due: 60,
    };

    const initialState = {
      overviews: [],
      fetching: false,
      fetched: false,
      error: null,
    };

    it('should provide initial state', () => {
      expect(overview(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_OVERVIEW_PENDING', () => {
      expect(overview(initialState, { type: 'FETCH_OVERVIEW_PENDING' })).
          toEqual({
            ...initialState,
            fetching: true,
          });
    });

    it('should handle FETCH_OVERVIEW_REJECTED', () => {
      expect(overview(
          initialState,
          { type: 'FETCH_OVERVIEW_REJECTED', payload: 'err' },
      )).toEqual({
        ...initialState,
        fetching: false,
        fetched: false,
        error: 'err',
      });
    });

    it('should handle FETCH_OVERVIEW_FULFILLED', () => {
      expect(overview(
          initialState,
          {
            type: 'FETCH_OVERVIEW_FULFILLED',
            payload: { data: [MOCK_OVERVIEW] },
          },
      )).toEqual({
        ...initialState,
        fetching: false,
        fetched: true,
        error: null,
        overviews: [MOCK_OVERVIEW],
      });
    });
  });
});
