import React,{ useState } from 'react'
import ReactDOM from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/shared/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <Navbar />
    </>
  )
}

export default App
