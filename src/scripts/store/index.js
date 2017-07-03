import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  console.log(initialState);
  return createStore(
    rootReducer,
    initialState
  );
};
