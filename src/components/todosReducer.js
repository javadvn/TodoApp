
const initialState = [];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];

    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id);

    case 'TOGGLE_ALL':
      const allCompleted = state.every((todo) => todo.completed);
      return state.map((todo) => ({
        ...todo,
        completed: !allCompleted,
      }));

    case 'CLEAR_COMPLETED':
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
};

export default todosReducer;
