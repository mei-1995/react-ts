import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/home">菜单一</Link>
        <Link to="/mine">菜单二</Link>
      </div>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
