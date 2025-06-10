import { useState, useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/Todoform'
import TodoItem from './components/Todoitem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, {id: Date.now(), todo: todo, completed: false}])
    console.log("succesfuly added")
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? {id:id, todo:todo, completed:false} : prevtodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevtodo) => (prevtodo.id === id ? {id:id, todo:prevtodo.todo, completed:true} : prevtodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    // console.log("Todos Loaded from local storage");
    
  }, [todos])
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, toggleComplete, deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm></TodoForm>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => 
              (<div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>)
            )}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
