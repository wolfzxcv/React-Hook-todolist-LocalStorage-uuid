import React from 'react'

 const Filter = ({className, all, active, done}) => {
   return (
     <div className={className}>
     <button onClick={all}>All</button>
     <button onClick={active}>Active</button>
     <button onClick={done}>Completed</button>
     </div>
   )
 }

export default Filter
 
