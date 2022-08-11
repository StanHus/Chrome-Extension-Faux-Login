import React from 'react'

export default function PopUp() {
  const userName = window.localStorage.getItem('userName')
  const closeThis = () => {
    const event = new Event('closePopup')
    document.dispatchEvent(event)
  }

  return (
    <div className="popup-modal">
      <h2>Are you lost, {userName}</h2>
      <div className="row">
        <button onClick={() => window.open('https://help.nickelled.com/en/')}>
          Yes
        </button>
        <button onClick={() => closeThis()}>No</button>
      </div>
    </div>
  )
}
