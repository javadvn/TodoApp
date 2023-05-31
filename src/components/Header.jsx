import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../components/action';

function Header() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.elements.todoInput.value;
    if (text.trim() !== '') {
      dispatch(addTodo(text));
    }
    e.target.reset();
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input className="new-todo" name="todoInput" placeholder="What needs to be done?" autoFocus />
        </form>
      </header>
    </>
  );
}

export default Header;
