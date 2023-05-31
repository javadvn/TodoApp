
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAll, toggleTodo, deleteTodo} from '../components/action';

function SectionMain() {
	
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleToggleAll = () => {
    dispatch(toggleAll());
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          onChange={handleToggleAll}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos.map(todo => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <label>{todo.text}</label>
                <button
                  className="destroy"
                  onClick={() => handleDeleteTodo(todo.id)}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default SectionMain;
