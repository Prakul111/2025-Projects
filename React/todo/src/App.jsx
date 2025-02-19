import { useState } from 'react'
// import "./style.css"

function App() {
  const [count, setCount] = useState(0)

  return <div id='new-todo-form'>
    <label htmlFor="todo-input"> New Todo </label>
    <input type="text" id='todo-input' />
    <button>Add Todo</button>
  </div>
}

export default App
