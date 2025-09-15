// hook from react so i can store state
import { useState } from 'react'

// assets from the starter so logos show
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// styles for the page
import './App.css'

// root component for the app
function App() {
  // state: count starts at 0 and setCount updates it
  const [count, setCount] = useState(0)

  // ui only and no logic changes
  return (
    <>
      {/* logos link out and open in new tab */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* page title */}
      <h1>Vite + React</h1>

      {/* card: button updates state and shows the value */}
      <div className="card">
        {/* event handler runs on click and bumps count */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        {/* note for hot reload demo */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* helper text */}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// export so main.jsx can render <App />
export default App
