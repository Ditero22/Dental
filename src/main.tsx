import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import { ProtectedRoute } from './config'
import { PatientDashboard, Profile, Messages } from './pages'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route
          path="/patient-dashboard"
          element={<ProtectedRoute allowedRoles={["Patient"]} />}
        >
          <Route index element={<PatientDashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Messages />} />
          <Route path="messages/:userId" element={<Messages />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
