import React from 'react';
import { Route } from 'react-router-dom';
import TodoList from '../components/TodoList';

const routes = (
    <div>
        <Route exact path="/" component={ TodoList } />
        <Route path="/todos" component={ TodoList } />
    </div>
);

export default routes;
