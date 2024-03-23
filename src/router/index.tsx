import React, { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

/* 路由懒加载 */
const Home = lazy(() => import('../views/home'))
const Mine = lazy(() => import('../views/mime'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
