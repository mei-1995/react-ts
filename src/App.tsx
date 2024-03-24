import { AxiosResponse, ResponseType } from 'axios'
import React, { Suspense, useEffect, useState } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { getPermissonList } from './service'
import { Permissions } from './service/type'
export const Permission = React.createContext([])

function App() {
  const [permissionList, setPermissionList] = useState<any>([])

  useEffect(() => {
    getPermissonList().then((res) => {
      setPermissionList(res)
    })
  }, [])

  return (
    <Permission.Provider value={permissionList}>
      <div className="App">
        <div className="nav">
          <Link to="/home">菜单一</Link>
          <Link to="/mine">菜单二</Link>
        </div>
        <Suspense fallback="loading...">
          <div className="main">{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </Permission.Provider>
  )
}

export default App
