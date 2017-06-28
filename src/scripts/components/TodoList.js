import React from 'react';

class TodoList extends React.Component {

  render() {
    return (
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
          <li className="list__row">
            <div className="list__cell">
              <input type="checkbox" name="todo[]" />
            </div>
            <div className="list__cell">Clean house</div>
            <div className="list__cell">25/06/2017 - 16:13</div>
          </li>
          <li className="list__row">
            <div className="list__cell">
              <input type="checkbox" name="todo[]" />
            </div>
            <div className="list__cell">Clean house</div>
            <div className="list__cell">25/06/2017 - 16:13</div>
          </li>
          <li className="list__row">
            <div className="list__cell">
              <input type="checkbox" name="todo[]" />
            </div>
            <div className="list__cell">Clean house</div>
            <div className="list__cell">25/06/2017 - 16:13</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
