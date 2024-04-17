import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { SpeedInsights } from '@vercel/speed-insights/react';
import packageJson from '../package.json';

const lastCommitRef = process.env.REACT_APP_LAST_COMMIT_REF || 'N/A';
const root = ReactDOM.createRoot(document.getElementById('root'))
const version = packageJson.version;

root.render(
  <React.StrictMode>
    <App />
    <div>
      {(process.env.NODE_ENV === 'production') &&
        <div>
          Version : {version}.{lastCommitRef}.prod
        </div>
      }

      {(process.env.NODE_ENV === 'development') &&
        <div>
          Version : {version}.{lastCommitRef}.dev
        </div>
      }
    </div>
    <SpeedInsights />
  </React.StrictMode>
)
