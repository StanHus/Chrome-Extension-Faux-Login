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
    const userName = window.localStorage.getItem('userName')
    if (userName !== null && userName !== '') {
      const event = new Event('openPopup')
      document.dispatchEvent(event)
    }
  }

  function onActivity() {
    if (timeout) clearTimeout(timeout)
    document.removeEventListener('mousemove', onActivity)
    document.removeEventListener('keypress', onActivity)
    setTimeout(startTimer, 0)
  }
}

const login = (name: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === 'Stan' && password === '123') {
        window.localStorage.setItem('userName', name)
        resolve('Success')
      } else {
        reject('Fail')
      }
    }, 2000)
  })
}

export { setIdleTimeout, login }
