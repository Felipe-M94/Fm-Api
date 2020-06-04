import React, { useState, useEffect } from 'react'
import registerService from './services/registerService'

function App() {
  const [registrations, setregistrations] = useState(null)

  useEffect(() => {
    if(!registrations) {
      getRegistrations()
    }
  })

  const getRegistrations = async () => {
    let res = await registerService.getAll()
    console.log(res)
    setregistrations(res)
  }

  const renderRegister = register => {
    return (
      <li key={register._id} className="list_item register">
        <h3 className="register_board">{register.board}</h3>
        <p className="register_bodytype">{register.bodytype}</p>
    </li>
    )
  }

return (
  <div className="App">
    <ul className="List">
      {(registrations && registrations.length > 0) ? (
        registrations.map(register => renderRegister(register))
      ) : (
        <p> No Register Found </p>
      )}
    </ul>
  </div>
 )
}

export default App