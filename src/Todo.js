import React from 'react'
import styled from 'styled-components' 
import PropTypes from 'prop-types'

const Todo = ({className, id, todos, completed, markCom, removeTodo}) => {
  return (
    <div className={className} completed={completed}>
      <div className='list'>
      <input  type='checkbox' checked={completed} onChange={()=>markCom(id)} /> 
      <div className='todolist'>{todos}</div> 
      <div className='button' onClick={()=>removeTodo(id)}>X</div>
      </div>
    </div>
  )
}

Todo.propTypes = {
  className: PropTypes.string
}

const StyledTodo = styled(Todo)`
  font-family: Arial, sans-serif;
  background-color: #5F9EA0;
  border-bottom: 1px solid #FFE4C4; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  color: #800000;
  &:hover {
    color: #D2691E;
  }
  
  .list{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .todolist{
    padding-right: 15px;  
    text-decoration: ${ props =>props.completed? 'line-through' : 'none'};
  }

  input, .button{
    width: 50px;
    height: 50px;
  }

  .button{
    color: #FFE4C4;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #483D8B;
    border-radius: 10px;
  }

`
StyledTodo.displayName = 'Todo'

export default StyledTodo;
