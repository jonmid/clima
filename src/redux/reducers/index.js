import { combineReducers } from 'redux';
import climaReducer from './climaReducers';

const rootReducer = combineReducers({
  climaReducer,
});

export default rootReducer;
