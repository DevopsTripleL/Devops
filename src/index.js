import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import App from './App'
import { SpeedInsights } from '@vercel/speed-insights/react';
import Success from './SuccessPage/Success'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
    <SpeedInsights />
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
