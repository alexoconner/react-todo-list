import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import TodoList from './TodoList';

class Main extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    static propTypes = {
        children: PropTypes.node
    };

    // static contextTypes = {
    //     router: PropTypes.object.isRequired,
    // };

    render() {
        return (
            <div className="main-wrapper">
                { this.props.children }
            </div>
        )
    }
}

export default Main;
