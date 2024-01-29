import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GeolocationPage } from './GeolocationPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GeolocationPage />
  </React.StrictMode>,
)
