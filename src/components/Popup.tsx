import React from 'react'

export default function PopUp() {
  const closeThis = () => {
    const event = new Event('closePopup')
    document.dispatchEvent(event)
  }

  return (
    <div className="popup-modal">
      <h2>Are you ok?</h2>
      <div className="row">
        <button onClick={() => (window.location.href = '/something')}>
          Take me home
        </button>
        <button onClick={() => closeThis()}>Cancel</button>
      </div>
    </div>
  )
}
