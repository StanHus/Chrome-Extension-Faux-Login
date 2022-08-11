import React from 'react'

const PopUp = () => {
  const userName = window.localStorage.getItem('userName')
  const closePopup = () => {
    const event = new Event('closePopup')
    document.dispatchEvent(event)
  }

  return (
    <div className="popup-modal">
      <h2>Are you lost, {userName}?</h2>
      <img
        className="gif small"
        src="https://c.tenor.com/uaTT7uIRkzkAAAAC/minions-confuse.gif"
        alt="minion-gif-hello"
      />
      <div className="row">
        <button
          className="secondary"
          onClick={() => window.open('https://help.nickelled.com/en/')}
        >
          Yes
        </button>
        <button className="secondary" onClick={() => closePopup()}>
          No
        </button>
      </div>
    </div>
  )
}

const Spinner = () => <div className="loading-spinner"></div>

const LoginErrorMessage = () => <h2>Failed to log in, try again</h2>

export { Spinner, PopUp, LoginErrorMessage }
