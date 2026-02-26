import React from "react";

export default Dashboard;

export function Dashboard(){
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h1>

        <div className="bg-white px-4 py-2 rounded-lg shadow">
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Total Patients</h3>
          <p className="text-3xl font-bold mt-2">124</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Appointments Today</h3>
          <p className="text-3xl font-bold mt-2">18</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Pending Bills</h3>
          <p className="text-3xl font-bold mt-2">7</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm">Low Stock Items</h3>
          <p className="text-3xl font-bold mt-2">3</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">
          Recent Appointments
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-gray-500 text-sm">
              <th className="pb-3">Patient</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Time</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">Juan Dela Cruz</td>
              <td className="py-3">Feb 26, 2026</td>
              <td className="py-3">10:00 AM</td>
              <td className="py-3 text-green-600 font-medium">
                Confirmed
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};    