import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

function Form() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== '') {
      dispatch(addTodo(trimmedValue));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default Form;