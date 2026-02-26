import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.tsx'
import { ProtectedRoute } from './config'
import { PatientDashboard, Profile, Messages, PatientSettings } from './pages'
// import { Staff, Dashboard, StaffAppointments, StaffPatients, StaffEarnings} from './pages'
import { Staff, StaffDashboard } from './pages'
import { Dentist, DentistDashboard, DentistAppointments, DentistPatients, DentistEarnings } from './pages'

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
            <Route index element={<StaffDashboard />} />
            <Route path="Dashboard" element={<StaffDashboard />} />
            {/* <Route path="Patients" element={<StaffPatients />} />
            <Route path="Appointments" element={<StaffAppointments />} />
            <Route path="Earnings" element={<StaffEarnings />} /> */}
          </Route>
        </Route>
        <Route
          path="/dentist-dashboard"
          element={<ProtectedRoute allowedRoles={["Dentist"]} />}
        >
          <Route element={<Dentist />}>
            <Route index element={<DentistDashboard />} />
            <Route path="Dashboard" element={<DentistDashboard />} />
            <Route path="Patients" element={<DentistPatients />} />
            <Route path="Appointments" element={<DentistAppointments />} />
            <Route path="Earnings" element={<DentistEarnings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
