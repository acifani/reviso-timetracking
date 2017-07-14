import { combineReducers } from 'redux';

import entries from './entries';
import form from './form';
import overview from './overview';

export default combineReducers({
  entries,
  form,
  overview,
});
