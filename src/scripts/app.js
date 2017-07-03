import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import Navigation from './components/Navigation';
import Main from './components/Main';

import routes from './config/routes';

let store = configureStore();

class TodoListApp extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navigation />
            <div className="main-wrapper">
              {routes}
            </div>
            {/* <Main { ...routes } /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

render( <TodoListApp />, document.getElementById( 'App' ) );
