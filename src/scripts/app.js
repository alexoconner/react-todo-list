import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Main from './components/Main';

import routes from './config/routes';

class TodoListApp extends React.Component {
    constructor( props ) {
        super()
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    { routes }
                    {/* <Main { ...routes } /> */}
                </div>
            </Router>
        );
    }
}

ReactDOM.render( <TodoListApp />, document.getElementById( 'App' ) );
