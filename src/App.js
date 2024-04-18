import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Form from './FormPage/Form'
import Success from './SuccessPage/Success'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
