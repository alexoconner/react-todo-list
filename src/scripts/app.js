import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Components/Navigation';
import Main from './Components/Main';

class TodoListApp extends React.Component {
    constructor( props ) {
        super()
    }

    render() {
        return (
            <div>
                <Navigation />
                <Main />
            </div>
        );
    }
}

ReactDOM.render( <TodoListApp />, document.getElementById( 'App' ) );
