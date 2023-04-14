import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import { Navbar } from './components/Navbar'
import { CreateAlarm } from './components/CreateAlarm'
import { ViewAlarms } from './components/ViewAlarms'
import { Signup } from './components/Signup'

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-alarm" element={<CreateAlarm />} />
        <Route path="/view-alarms" element={<ViewAlarms />} />
      </Routes>

    </div>
  )
}

export default App
