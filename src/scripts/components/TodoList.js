import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const todoItems = (todos) => todos.map( (item, index) => {
  return (
    <li key={item.id} className="list__row">
      <div className="list__cell">
        <input type="checkbox" name="todo[]" />
      </div>
      <div className="list__cell">{item.title}</div>
      <div className="list__cell">{item.time}</div>
    </li>
  );
});

const TodoList = ({ todos }) => (
  <div className="list-wrapper">
    <ul className="list">
      <li className="list__head">
        <div className="list__cell">
          Status
        </div>
        <div className="list__cell">
          Title
        </div>
        <div className="list__cell">
          Created
        </div>
      </li>
      {todos}
      {todoItems}
    </ul>
  </div>
);

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(
//     PropTypes.shape({
//       completed: PropTypes.bool.isRequired,
//       title: PropTypes.string.isRequired,
//       time: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired
// };

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
