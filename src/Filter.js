import React from 'react'

 const Filter = ({all, active, done}) => {
   return (
     <div>
     <button onClick={all}>All</button>
     <button onClick={active}>Active</button>
     <button onClick={done}>Completed</button>
     </div>
   )
 }

export default Filter
 
