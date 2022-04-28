import React from 'react'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createRoot } from 'react-dom/client'
import './assets/main.css'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)

reportWebVitals()
