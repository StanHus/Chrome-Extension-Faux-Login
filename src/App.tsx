import React, { useEffect, useState } from 'react'
import { LoginErrorMessage, PopUp, Spinner } from './components/modules'

import { login, setIdleTimeout } from './components/utils'
import './css/style.scss'

function App() {
  const userName = window.localStorage.getItem('userName')
  const [name, setName] = useState(userName)
  const [password, setPassword] = useState(userName)
  const [loggedIn, setLoggedIn] = useState(name !== null && name !== '')
  const [popupOpen, setPopupOpen] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const logout = () => {
    setLoggedIn(false)
    localStorage.clear()
    setName('')
  }

  const attemptLogin = async () => {
    setError(false)
    setLoading(true)
    if (name && password) {
      login(name, password)
        .then((response) => {
          if (response === 'Success') {
            setLoading(false)
            setLoggedIn(true)
          }
        })
        .catch((err) => {
          setLoading(false)
          setError(true)
        })
    }
  }

  document.addEventListener('openPopup', () => {
    setPopupOpen(true)
  })

  document.addEventListener('closePopup', () => {
    setPopupOpen(false)
  })

  useEffect(() => {
    if (loggedIn) setIdleTimeout(5000)
  }, [loggedIn])

  return (
    <div className="App">
      {!loggedIn && (
        <div className="login-page">
          <h1>Log In</h1>
          <input
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
          {loading && <Spinner />}
          {error && <LoginErrorMessage />}
          <button
            disabled={name === null || name === ''}
            className="primary"
            onClick={attemptLogin}
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
