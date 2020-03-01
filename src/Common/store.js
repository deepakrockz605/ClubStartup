import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

export default function configureStore( initialState = {} ) {

  const reducers = { };

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
});

 return createStore(
  rootReducer,
   initialState,
   applyMiddleware(thunk)
 );
}