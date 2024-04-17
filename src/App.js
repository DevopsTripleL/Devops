import './App.css'
import React from 'react'
import packageJson from '../package.json'

function App () {
  const version = packageJson.version;

  return (
    <div className="App">
      Giga prout :')

      <div>
        {(process.env.NODE_ENV === 'production') &&
          <div>
            Version : {version}.prod
          </div>
        }

        {(process.env.NODE_ENV === 'development') &&
          <div>
            Version : {version}.dev
          </div>
        }
        <div>
          Last Commit: {process.env.LAST_COMMIT_REF}
        </div>
      </div>
    </div>
  )
}

export default App
