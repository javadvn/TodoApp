// Footer.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted, setVisibilityFilter } from '../components/action';

function Footer() {
  const todos = useSelector(state => state.todos);
  const visibilityFilter = useSelector(state => state.visibilityFilter);
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const handleSetVisibilityFilter = (filter) => {
    dispatch(setVisibilityFilter(filter));
  };

  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeTodoCount}</strong> {activeTodoCount === 1 ? 'item' : 'items'} left
        </span>

        <ul className="filters">
          <li>
            <a
              href="#/"
              className={visibilityFilter === 'SHOW_ALL' ? 'selected' : ''}
              onClick={() => handleSetVisibilityFilter('SHOW_ALL')}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={visibilityFilter === 'SHOW_ACTIVE' ? 'selected' : ''}
              onClick={() => handleSetVisibilityFilter('SHOW_ACTIVE')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={visibilityFilter === 'SHOW_COMPLETED' ? 'selected' : ''}
              onClick={() => handleSetVisibilityFilter('SHOW_COMPLETED')}
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default Footer;
