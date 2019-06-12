import React, {useState} from 'react';
import styled from 'styled-components' 
import PropTypes from 'prop-types'
import Todo from './Todo';
import uuid from 'uuid';


const App =({className}) => {
  const todosData = [
    {
      id: 1, title: 'eat Smash', completed: false
    },
    {
      id: 2, title: 'love Norway', completed: false
    },
    {
      id: 3, title: 'move to Norway', completed: false
    }
   ]

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(todosData)
  
  const addTodo = e => {
    e.preventDefault();
    if(input.trim().length<3) return alert('please add more than 3 letters');
    const newTodo = {id: uuid.v4(), title: input, completed: false}
    setTodos([...todos, newTodo ])
    setInput('')
  }

  const removeTodo = id => {  
    setTodos(todos.filter( todo=> todo.id !== id))
  }

  const markCom = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      })
    );
  };
 
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
 
button {
  border-radius: 15px;
}
.inputbox{
  width:200px;
  height:30px;
}  
`
StyledApp.displayName = 'App'

export default StyledApp;