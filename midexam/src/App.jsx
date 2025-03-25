import { useState } from 'react'
import CountDownLightSwitch from './CountDownLightSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountDownLightSwitch />
    </>
  )
}

export default App
