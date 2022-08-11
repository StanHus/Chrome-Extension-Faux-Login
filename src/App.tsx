import React, { useState } from 'react'
import PopUp from './components/Popup'
import { setIdleTimeout } from './components/utils'
import './css/style.scss'

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
    const logout = new Event('logout')
    document.dispatchEvent(logout)
    setLoggedIn(false)
    localStorage.clear()
    setName('')
    const event = new Event('closePopup')
    document.dispatchEvent(event)
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
        <div className="login-page">
          <h1>Log In</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            disabled={name === null || name === ''}
            className="primary"
            onClick={() => login()}
          >
            Login
          </button>
        </div>
      )}
      {loggedIn && (
        <div className="user-page">
          <h1>Hi {userName}</h1>
          <button className="primary" onClick={() => logout()}>
            Log out
          </button>
        </div>
      )}
      {popupOpen && loggedIn && <PopUp />}
    </div>
  )
}

export default App
