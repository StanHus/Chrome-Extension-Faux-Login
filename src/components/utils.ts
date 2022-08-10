function setIdleTimeout(millis: number) {
  var timeout = 0
  startTimer()

  function startTimer() {
    timeout = window.setTimeout(onExpires, millis)
    document.addEventListener('mousemove', onActivity)
    document.addEventListener('keypress', onActivity)
  }

  function onExpires() {
    timeout = 0
    const event = new Event('openPopup')
    document.dispatchEvent(event)
  }

  function onActivity() {
    if (timeout) clearTimeout(timeout)
    document.removeEventListener('mousemove', onActivity)
    document.removeEventListener('keypress', onActivity)
    setTimeout(startTimer, 0)
  }
}

export { setIdleTimeout }
