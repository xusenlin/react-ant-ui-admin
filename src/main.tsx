import { RouterProvider } from "react-router-dom"
import '@/assets/style/index.scss'
import {createRoot} from 'react-dom/client'
import { router } from "@/router.tsx"

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(<RouterProvider router={router} />)
