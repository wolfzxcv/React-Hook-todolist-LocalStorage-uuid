import React from 'react' 
import styled from 'styled-components' 
import PropTypes from 'prop-types'

 const Filter = ({className, all, active, done}) => {
   return (
     <div className={className}>
     <button onClick={all}>All</button>
     <button onClick={active}>Active</button>
     <button onClick={done}>Completed</button>
     </div>
   )
 }
 Filter.propTypes = {
  className: PropTypes.string
}

const StyledFilter = styled(Filter)`
  background-color: #5F9EA0;
button{
  border-radius: 10px;
  width: 120px;
  height: 50px;
  font-size: 20px;
  color: #FFE4C4;
  background-color: #483D8B;
}

@media (min-width: 769px){
  button{
    margin: 0 10px;
  }  
}


@media (max-width: 768px){
  button{
    margin: 0 3px;
  }  
}

`
StyledFilter.displayName = 'Filter'

export default StyledFilter;

