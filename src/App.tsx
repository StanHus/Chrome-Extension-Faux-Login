import React, { useState } from 'react'
import PopUp from './components/Popup'
import { setIdleTimeout } from './components/utils'
import './css/style.css'

function App() {
  const userName = window.localStorage.getItem('userName')
  const [name, setName] = useState(userName)
  const [loggedIn, setLoggedIn] = useState(name !== null && name !== '')
  const [popupOpen, setPopupOpen] = useState(false)

  const login = () => {
    setLoggedIn(true)
    if (name) window.localStorage.setItem('userName', name)
  }

  const logout = () => {
    setLoggedIn(false)
    localStorage.clear()
    setName('')
  }

  if (loggedIn) setIdleTimeout(5000)

  document.addEventListener('openPopup', () => {
    setPopupOpen(true)
  })

  document.addEventListener('closePopup', () => {
    setPopupOpen(false)
  })

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
      {popupOpen && <PopUp />}
    </div>
  )
}

export default App
