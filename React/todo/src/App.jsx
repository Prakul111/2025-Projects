import { useState } from 'react'
import './styles.css'
import { TodoItem } from './TodoItem'

function App() {
  const [newTodoName, setNewTodoName] = useState('')
  const [todos, setTodos] = useState([])


  function toggleTodos(todoId, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todos => {
        if (todos.id === todoId) return { ...todos, completed }

        return todos
      })
    })
  }

  function addNewTodo() {
    if (newTodoName === '') return
    setTodos(currentTodos => {
      return [...currentTodos, { name: newTodoName, completed: false, id: crypto.randomUUID() }]
    })
    setNewTodoName("")
  }

  function deleteTodos(todoId) {
    setTodos(currentTodos => {
      return currentTodos.filter(todos => todos.id !== todoId)
    })
  }

  return <>
    <ul id="list">
      {todos.map(todos => {
        return (
          <TodoItem key={todos.id}
            {...todos}
            toggleTodos={toggleTodos}
            deleteTodos={deleteTodos}
          />
        )

      })}
    </ul>
    <div id='new-todo-form'>
      <label htmlFor="todo-input"> New Todo </label>
      <input type="text" id='todo-input' value={newTodoName} onChange={e => setNewTodoName(e.target.value)} />
      <button onClick={addNewTodo}>Add Todo</button>
    </div>
  </>

}

export default App
