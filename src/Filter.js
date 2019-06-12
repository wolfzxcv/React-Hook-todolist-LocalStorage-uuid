import React from 'react'

 const Filter = ({className}) => {
   return (
     <div className={className}>
     <button>All</button>
     <button>Completed</button>
     <button>Active</button>
     </div>
   )
 }

export default Filter
 
