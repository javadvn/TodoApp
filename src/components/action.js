export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
  };
};

export const toggleAll = () => {
  return {
    type: 'TOGGLE_ALL',
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

export const clearCompleted = () => {
  return {
    type: 'CLEAR_COMPLETED',
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
};
