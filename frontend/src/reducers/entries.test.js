import entries from './entries';

describe('reducers', () => {
  describe('entries', () => {
    const MOCK_ENTRY = {
      id: 1,
      customer: 'customer',
      length: 60,
      hourly_rate: 60,
    };
    const initialState = {
      entries: [],
      fetching: false,
      fetched: false,
      adding: false,
      added: false,
      deleting: false,
      deleted: false,
      error: null,
    };

    it('should provide initial state', () => {
      expect(entries(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_ENTRIES_PENDING', () => {
      expect(entries(initialState, { type: 'FETCH_ENTRIES_PENDING' })).toEqual({
        ...initialState,
        fetching: true,
      });
    });

    it('should handle FETCH_ENTRIES_REJECTED', () => {
      expect(entries(
          initialState,
          { type: 'FETCH_ENTRIES_REJECTED', payload: 'err' },
      )).toEqual({
        ...initialState,
        fetching: false,
        fetched: false,
        error: 'err',
      });
    });

    it('should handle FETCH_ENTRIES_FULFILLED', () => {
      expect(entries(
          initialState,
          { type: 'FETCH_ENTRIES_FULFILLED', payload: { data: [MOCK_ENTRY] } },
      )).toEqual({
        ...initialState,
        fetching: false,
        fetched: true,
        error: null,
        entries: [MOCK_ENTRY],
      });
    });

    it('should handle ADD_ENTRY_PENDING', () => {
      expect(entries(initialState, { type: 'ADD_ENTRY_PENDING' })).toEqual({
        ...initialState,
        adding: true,
      });
    });

    it('should handle ADD_ENTRY_REJECTED', () => {
      expect(entries(
          initialState,
          { type: 'ADD_ENTRY_REJECTED', payload: 'err' },
      )).toEqual({
        ...initialState,
        adding: false,
        added: false,
        error: 'err',
      });
    });

    it('should handle ADD_ENTRY_FULFILLED', () => {
      expect(entries(
          initialState,
          { type: 'ADD_ENTRY_FULFILLED', payload: { data: MOCK_ENTRY } },
      )).toEqual({
        ...initialState,
        adding: false,
        added: true,
        error: null,
        entries: [MOCK_ENTRY],
      });
    });

    it('should handle DEL_ENTRY_PENDING', () => {
      expect(entries(initialState, { type: 'DEL_ENTRY_PENDING' })).toEqual({
        ...initialState,
        deleting: true,
      });
    });

    it('should handle DEL_ENTRY_REJECTED', () => {
      expect(entries(
          initialState,
          { type: 'DEL_ENTRY_REJECTED', payload: 'err' },
      )).toEqual({
        ...initialState,
        deleting: false,
        deleted: false,
        error: 'err',
      });
    });

    it('should handle DEL_ENTRY_FULFILLED', () => {
      expect(entries(
          { ...initialState, entries: [MOCK_ENTRY] },
          { type: 'DEL_ENTRY_FULFILLED', payload: MOCK_ENTRY.id },
      )).toEqual({
        ...initialState,
        deleting: false,
        deleted: true,
        error: null,
        entries: [],
      });
    });

    it('should handle EDIT_ENTRY_PENDING', () => {
      expect(entries(initialState, { type: 'EDIT_ENTRY_PENDING' })).toEqual({
        ...initialState,
        editing: true,
      });
    });

    it('should handle EDIT_ENTRY_REJECTED', () => {
      expect(entries(
          initialState,
          { type: 'EDIT_ENTRY_REJECTED', payload: 'err' },
      )).toEqual({
        ...initialState,
        editing: false,
        edited: false,
        error: 'err',
      });
    });

    it('should handle EDIT_ENTRY_FULFILLED', () => {
      const edited_entry = { ...MOCK_ENTRY, length: 100 };
      const payload = {
        id: MOCK_ENTRY.id,
        data: edited_entry,
      };
      expect(entries(
          { ...initialState, entries: [MOCK_ENTRY] },
          { type: 'EDIT_ENTRY_FULFILLED', payload: payload },
      )).toEqual({
        ...initialState,
        editing: false,
        edited: true,
        error: null,
        entries: [edited_entry],
      });
    });
  });
});
