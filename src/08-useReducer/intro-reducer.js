const initialState = [
  {
    id: 1,
    todo: 'Hacer la tarea 1',
    done: false,
  },
]

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload] // No usar .push() porque no se debe mutar el estado
  }

  return state
}

let todos = todoReducer()

const newTodo = {
  id: 2,
  todo: 'Hacer la tarea 2',
  done: false,
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo,
}

todos = todoReducer(todos, addTodoAction)

console.log({ state: todos })
