import React from 'react'
import JobItems from './JobItems'

function Lists(props) {
  const {lists, hdlDel, hdlEdit} = props
  return (
    <div className="row justify-content-center">
      {lists.map(x=>(
        <JobItems key={x.id} item={x} hdlDel={hdlDel} hdlEdit={hdlEdit} />
      ))    
      }
    </div>
  )
}

export default Lists
