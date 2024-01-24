import { TodoItem } from './TodoItem'

/* eslint-disable react/prop-types */
export const TodoList = ({
  todos = [],
  onDeleteTodo,
  onToggleTodo,
}) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleTodo={onToggleTodo}
        />
      ))}
    </ul>
  )
}
