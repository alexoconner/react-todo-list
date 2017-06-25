import React from 'react';

import TodoList from './TodoList';

class Main extends React.Component {

    render() {
        return (
            <div className="main-wrapper">
                <TodoList />
            </div>
        )
    }
}

export default Main;
