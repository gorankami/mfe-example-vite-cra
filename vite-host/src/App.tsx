import React from 'react'
import './App.css'

const SharedTable = React.lazy(() => import("craGuest/SharedTable"))

function App() {
  return (
    <SharedTable></SharedTable>
  )
}

export default App
