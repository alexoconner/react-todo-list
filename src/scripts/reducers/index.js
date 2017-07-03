import { combineReducers } from 'redux';

export default combineReducers({
  todos: combineReducers( () => {
      return {
        test: 'test'
      }
    }
  )
});
