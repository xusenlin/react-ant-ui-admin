import {Navigate,createHashRouter} from 'react-router-dom'
import Layout from '@/views/layout/App.tsx'
import Dashboard from '@/views/dashboard'
import Demo from '@/views/common/Demo.tsx'
import NotFound from "@/views/common/NotFound.tsx"

export const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/dashboard',
        Component: Dashboard,
      },
      {
        path: '/dashboard2',
        Component: Dashboard,
      },
      {
        path: '/demo',
        Component: Demo,
      },
      {
        path: '/',
        element: <Navigate to="/dashboard"/>,
      }
    ],
  },
  {
    path: '*',
    Component: NotFound,
  }
])


