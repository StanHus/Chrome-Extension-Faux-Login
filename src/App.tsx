import React, { useState } from 'react'

function App() {
  const userName = window.localStorage.getItem('userName')
  const [name, setName] = useState(userName)
  const [loggedIn, setLoggedIn] = useState(name !== null && name !== '')

  const login = () => {
    setLoggedIn(true)
    if (name) window.localStorage.setItem('userName', name)
  }

  const logout = () => {
    setLoggedIn(false)
    localStorage.clear()
    setName('')
  }

  return (
    <div className="App">
      {!loggedIn && (
        <div>
          <h1>Log In</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            disabled={name === null || name === ''}
            onClick={() => login()}
          >
            Click me to login
          </button>
        </div>
      )}
      {loggedIn && (
        <div>
          <h1>Hi {userName}</h1>
          <button onClick={() => logout()}>Log out</button>
        </div>
      )}
    </div>
  )
}

export default App
