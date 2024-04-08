import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import './components/QrCode.css'
import { QrCode } from './components/QrCode'
// import { UserCard } from './UserCard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard/> */}
    <QrCode/>
  </React.StrictMode>,
)
