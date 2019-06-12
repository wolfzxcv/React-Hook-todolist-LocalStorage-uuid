import React, {useState, useEffect} from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'
import Todo from './Todo' 
import Filter from './Filter'
import uuid from 'uuid' 


const App =({className}) => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("localStorageTodos")) || []) 
  },[]) 
   
  const setLocalStorage = dataSaveInLS => {
    setTodos(dataSaveInLS)
    localStorage.setItem("localStorageTodos", JSON.stringify(dataSaveInLS)) 
  } 

  const addTodo = e => {
    e.preventDefault();
    if(input.trim().length<3) return alert('please add more than 3 letters') 
    const newTodo = {id: uuid.v4(), title: input, completed: false}
    const dataSaveInLS= [...todos, newTodo ]
    setInput('')
    setLocalStorage(dataSaveInLS)
  }

  const removeTodo = id => {  
    const dataSaveInLS = todos.filter( todo=> todo.id !== id)
    setLocalStorage(dataSaveInLS)
  }

  const markCom = id => {
    const dataSaveInLS = todos.map(todo => {
      if (todo.id === id) return { ...todo, completed: !todo.completed } 
      return todo 
    })
    setLocalStorage(dataSaveInLS)
  } 
 
  return (
    <div className={className}>
     <form onSubmit={addTodo}>
       <input className='inputbox' type='text' 
              placeholder='What should I do later...' 
              value={input} 
              onChange={ e => setInput(e.target.value) } 
              />   
     </form>  
     <h5>Add something and press 'ENTER' to input</h5>
     <div>
     {todos.map( todo => 
      <Todo
      key={todo.id}
      id={todo.id}
      todos={todo.title}
      completed={todo.completed}
      removeTodo={removeTodo}
      markCom={markCom}
      />)}    
     </div>  
    <Filter />
    </div>
  );
}

App.propTypes = {
  className: PropTypes.string
}

const StyledApp = styled(App)`
  text-align: center;
  font-size: 28px;
  letter-spacing: 2px;
}

input {
  margin: 0 20px;
}
 

.inputbox{
  width:200px;
  height:30px;
}  
`
StyledApp.displayName = 'App'

export default StyledApp;