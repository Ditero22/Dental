import React from "react";
import { User, Calendar, CreditCard, Package } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip,
  BarChart, Bar,
  PieChart, Pie, Cell,
  ResponsiveContainer
} from "recharts";

const appointmentStats = [
  { month: "Jan", Completed: 210, Cancelled: 50 },
  { month: "Feb", Completed: 340, Cancelled: 60 },
  { month: "Mar", Completed: 400, Cancelled: 100 },
  { month: "Apr", Completed: 320, Cancelled: 80 },
  { month: "May", Completed: 450, Cancelled: 110 },
  { month: "Jun", Completed: 300, Cancelled: 55 },
];

const treatmentPerMonth = [
  { month: "Jan", Cleaning: 50, Extraction: 10, Filling: 5 },
  { month: "Feb", Cleaning: 120, Extraction: 60, Filling: 20 },
  { month: "Mar", Cleaning: 90, Extraction: 70, Filling: 20 },
  { month: "Apr", Cleaning: 60, Extraction: 40, Filling: 10 },
  { month: "May", Cleaning: 80, Extraction: 20, Filling: 15 },
  { month: "Jun", Cleaning: 45, Extraction: 15, Filling: 5 },
];

const patientDemographics = [
  { name: "New Patients", value: 123, color: "#00C49F" },
  { name: "Returning Patients", value: 23, color: "#2A3E59" },
];

const procedureBreakdown = [
  { name: "Cleaning Tooth", value: 123, color: "#1E90FF" },
  { name: "Extraction", value: 23, color: "#FFD700" },
  { name: "Tooth Filling", value: 80, color: "#A78BFA" },
];
export default  DentistDashboard;
export function DentistDashboard() {

  interface StatCard {
    title: string;
    value: number;
    icon: React.ReactElement;
    bgColor: string;
  }

  const stats: StatCard[] = [
    { 
      title: "Today's Appointment", 
      value: 18, 
      icon: <Calendar className="w-6 h-6 text-blue-500" />, 
      bgColor: "bg-blue-100"
    },
    { 
      title: "Active Patients", 
      value: 124, 
      icon: <User className="w-6 h-6 text-green-500" />, 
      bgColor: "bg-green-100"
    },
    { 
      title: "Procedure This Week", 
      value: 3, 
      icon: <Package className="w-6 h-6 text-yellow-500" />, 
      bgColor: "bg-yellow-100"
    },
    { 
      title: "Pending Bills", 
      value: 7, 
      icon: <CreditCard className="w-6 h-6 text-red-500" />, 
      bgColor: "bg-red-100"
    },
  ];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.title} className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
            <div className={`${stat.bgColor} p-3 rounded-full flex items-center justify-center`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-gray-500 text-sm">{stat.title}</h3>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid grid-rows-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow row-span-1">
            <h2 className="font-bold mb-4 text-lg">Appointment Stats</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={appointmentStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Completed" stroke="#00C49F" strokeWidth={3} />
                <Line type="monotone" dataKey="Cancelled" stroke="#FF6B6B" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white rounded-xl p-6 shadow row-span-1">
            <h2 className="font-bold mb-4 text-lg">Treatment Per Month</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={treatmentPerMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Cleaning" fill="#1E90FF" />
                <Bar dataKey="Extraction" fill="#FFD700" />
                <Bar dataKey="Filling" fill="#A78BFA" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
        <div className="grid grid-rows-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow row-span-1">
            <h2 className="font-bold mb-4 text-lg">Patient Demographics</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={patientDemographics}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                >
                  {patientDemographics.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 space-y-2">
              {patientDemographics.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow row-span-1">
            <h2 className="font-bold mb-4 text-lg">Procedure Breakdown</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={procedureBreakdown}
                  dataKey="value"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                >
                  {procedureBreakdown.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 space-y-2">
              {procedureBreakdown.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}