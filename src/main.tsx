import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { App } from './App.tsx'
import './index.css'

const router = createBrowserRouter([{ path: '*', Component: App }])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
