import { combineReducers } from 'redux';

import entries from './entries';
import form from './form';

export default combineReducers({
  entries,
  form,
});
