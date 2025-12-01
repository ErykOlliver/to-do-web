import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import home from './pages/Home.tsx'

const router: any = createBrowserRouter([
  {
    path: '/',
    Component: App
  },
  {
    path: '/hub',
    Component: home
  },

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
