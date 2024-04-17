import './App.css'
import React from 'react'
import packageJson from '../package.json'

function App () {
  const version = packageJson.version;
  const lastCommitRef = process.env.REACT_APP_LAST_COMMIT_REF || 'N/A';

  return (
    <div className="App">
      Giga prout :)

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
    </div>
  )
}

export default App
