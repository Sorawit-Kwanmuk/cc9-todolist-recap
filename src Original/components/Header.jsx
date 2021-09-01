import React from 'react'

function Header() {
  return (
    <div className="row justify-content-around align-items-end border-bottom">
      <p className="col-8 display-6">Todolist(with api)</p>
      <p className="col-3 text-end">{new Date().toDateString()}</p>
    </div>
  )
}

export default Header
