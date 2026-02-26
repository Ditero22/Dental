import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { earningsTrend, revenueData, transactions } from './data/dentist_earnings';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);


export const DentistEarnings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentTransactions = transactions.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const lineChartData = {
    labels: earningsTrend.map((d) => d.month),
    datasets: [
      {
        label: 'Earnings',
        data: earningsTrend.map((d) => d.value),
        borderColor: '#4ade80', // green
        backgroundColor: 'rgba(74, 222, 128, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const revenueTotal = revenueData[revenueData.length - 1].value;

  const lineChartOptions = {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { maxRotation: 45, minRotation: 0 } },
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-6 space-y-6">
      {/* Earnings Trend + Revenue Row */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Earnings Trend */}
        <div
          className="bg-white p-4 rounded-lg shadow flex-1 flex flex-col"
          style={{ minHeight: '250px' }}
        >
          <h2 className="font-semibold mb-4">Earnings Trend Chart</h2>
          <div className="flex-1" style={{ minHeight: '200px' }}>
            <Line
              data={lineChartData}
              options={{ ...lineChartOptions, plugins: { legend: { display: true } } }}
            />
          </div>
        </div>

        {/* Revenue */}
        <div
          className="bg-white p-4 rounded-lg shadow w-full md:w-1/3 flex flex-col justify-between"
          style={{ minHeight: '250px' }}
        >
          <div>
            <h2 className="font-semibold">Revenue</h2>
            <p className="text-2xl font-bold">₱ {revenueTotal.toLocaleString()}</p>
            <p className="text-green-500">+8.5% vs. Last month</p>
          </div>
          <div className="w-full mt-4 flex-1" style={{ minHeight: '100px' }}>
            <Line
              data={{
                labels: revenueData.map((d) => d.month),
                datasets: [
                  {
                    data: revenueData.map((d) => d.value),
                    backgroundColor: 'rgba(74, 222, 128, 0.2)',
                    borderColor: '#4ade80',
                    fill: true,
                    tension: 0.3,
                  },
                ],
              }}
              options={lineChartOptions}
            />
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold">Recent Transactions - Today</h2>
          <button className="text-blue-500">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left border-b">
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Patient Name</th>
                <th className="px-4 py-2">Commission / Allowance</th>
                <th className="px-4 py-2">Total Earnings</th>
                <th className="px-4 py-2">Deductions</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((t, idx) => (
                <tr key={idx} className="border-b">
                  <td className="px-4 py-2">{t.time}</td>
                  <td className="px-4 py-2">{t.patientName}</td>
                  <td className="px-4 py-2">₱ {t.commission.toLocaleString()}</td>
                  <td className="px-4 py-2">₱ {t.totalEarnings.toLocaleString()}</td>
                  <td className="px-4 py-2">₱ {t.deductions.toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-white ${
                        t.status === 'Paid' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500'}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            &larr; Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded border ${currentPage === i + 1 ? 'bg-blue-500 text-white' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500'}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
export default DentistEarnings;