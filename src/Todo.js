import React from 'react'
import styled from 'styled-components' 
import PropTypes from 'prop-types'

const Todo = ({className, id, todos, completed, markCom, removeTodo}) => {
  return (
    <div className={className} completed={completed}>
      <div>
      <input  type='checkbox' checked={completed} onChange={()=>markCom(id)} />{todos}
      <button  onClick={()=>removeTodo(id)}>X</button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  className: PropTypes.string
}

const StyledTodo =styled(Todo)`
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted; 
  &:hover {
    color: #fa923f;
  }
  text-decoration: ${ props =>props.completed? 'line-through' : 'none'} ;
`
StyledTodo.displayName = 'Todo'

export default StyledTodo;
