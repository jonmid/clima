import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// Para desarrollo
const Store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// Para produccion
// const Store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default Store;
