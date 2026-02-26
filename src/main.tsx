import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import { ProtectedRoute } from './config'
import { PatientDashboard, Profile, Messages, PatientSettings } from './pages'
import { Staff, Dashboard, StaffAppointments, StaffPatients, StaffEarnings} from './pages'


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
          <Route path="settings" element={<PatientSettings />} />
          <Route path="messages/:userId" element={<Messages />} />
        </Route>
        <Route
          path="/staff-dashboard"
          element={<ProtectedRoute allowedRoles={["Staff"]} />}
        >
          <Route element={<Staff />}>
            <Route index element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Patients" element={<StaffPatients />} />
            <Route path="Appointments" element={<StaffAppointments />} />
            <Route path="Earnings" element={<StaffEarnings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
