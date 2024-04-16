import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'

function App () {
  const [count, setCount] = useState(0)
  let i = 0
  function Count () {
    i++
    setCount(i)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={Count}>Ajoute +1</button>
        <div> {count} </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
