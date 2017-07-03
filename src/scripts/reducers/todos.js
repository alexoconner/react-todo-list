const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          title: 'Awesome new todo',
          created: new Date()
        }
      ]
  }
  return state;
};

export default todos;
