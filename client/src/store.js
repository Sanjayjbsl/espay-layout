import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';


const initialState = {};

const middleware = [thunk];

//const devTools = composeWithDevTools;//null;//process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

// const store = createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(...middleware),
//     devTools
//   )
// );

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;
