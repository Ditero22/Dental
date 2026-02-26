import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  Calendar,
  Users,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

import {
  monthlyPatientVolume,
  dentistScheduleLoad,
  patientActivity,
  patientDemographics,
} from "./data/staffDashboardData";

export default StaffDashboard;

export function StaffDashboard() {
  const stats = [
    {
      title: "Today’s Appointment",
      value: 87,
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-100",
    },
    {
      title: "Patients in Queue",
      value: 5,
      icon: <Users className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-100",
    },
    {
      title: "Pending Treatment",
      value: 35,
      icon: <ClipboardList className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-100",
    },
    {
      title: "Low Stocks",
      value: 12,
      icon: <AlertTriangle className="w-6 h-6 text-red-600" />,
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-6 shadow flex items-center gap-4"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg}`}
            >
              {stat.icon}
            </div>

            <div>
              <p className="text-sm text-gray-500">
                {stat.title}
              </p>
              <p className="text-2xl font-semibold">
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Monthly Patient Volume */}
        <div className="lg:col-span-3 bg-white rounded-xl p-6 shadow">
          <h2 className="font-semibold mb-4">
            Monthly Patient Volume Trends
          </h2>

          <div className="space-y-4">
            {monthlyPatientVolume.map((item) => (
              <div key={item.month} className="flex items-center gap-4">
                <span className="w-8 text-sm text-gray-500">
                  {item.month}
                </span>

                <div className="flex-1 bg-gray-100 rounded-full h-3">
                  <div
                    className="h-3 rounded-full"
                    style={{
                      width: `${(item.value / 450) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>

                <span className="w-10 text-sm text-gray-600">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Activity Summary */}
        <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow flex items-center min-h-[260px]">
          <div className="flex-1">
            <h2 className="font-semibold mb-3">
              Patient Activity Summary
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              <strong>500</strong> Total Patients
            </p>

            <div className="space-y-3">
              {patientActivity.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="w-2 h-6 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">
                    <strong>{item.value}</strong> {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[160px] h-[160px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={patientActivity}
                  dataKey="value"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                >
                  {patientActivity.map((item, index) => (
                    <Cell key={index} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Dentist Schedule Load */}
        <div className="lg:col-span-3 bg-white rounded-xl p-6 shadow">
          <h2 className="font-semibold mb-4">
            Dentist Schedule Load
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dentistScheduleLoad}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="base" stackId="a" fill="#2563EB" />
              <Bar dataKey="extra" stackId="a" fill="#F59E0B" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Patient Demographics */}
        <div className="lg:col-span-1 bg-white rounded-xl p-6 shadow flex items-center min-h-[260px]">
          <div className="flex-1">
            <h2 className="font-semibold mb-4">
              Patient Demographics
            </h2>

            <div className="space-y-3">
              {patientDemographics.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span
                    className="w-2 h-6 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">
                    <strong>{item.value}</strong> {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[160px] h-[160px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={patientDemographics}
                  dataKey="value"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={2}
                >
                  {patientDemographics.map((item, index) => (
                    <Cell key={index} fill={item.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}