import React, { useState } from "react";
import { patientsData } from "./data/dentist_patients";

export const DentistPatients: React.FC = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const patientsPerPage = 6;

  const filteredPatients = patientsData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPatient = currentPage * patientsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - patientsPerPage;
  const currentPatients = filteredPatients.slice(indexOfFirstPatient, indexOfLastPatient);

  const totalPages = Math.ceil(filteredPatients.length / patientsPerPage);

  const getPageNumbers = () => {
    const maxPagesToShow = 5;
    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(start + maxPagesToShow - 1, totalPages);

    if (end - start + 1 < maxPagesToShow) {
      start = Math.max(end - maxPagesToShow + 1, 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto max-h-[calc(80vh-100px)]">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">My Patients List</h1>
          <input
            type="text"
            placeholder="Search Patient..."
            className="mt-4 md:mt-0 p-2 border border-gray-300 rounded-lg w-full md:w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-4 mb-6">
          <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full">
            Active Patients <span className="font-bold">120</span>
          </span>
          <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full">
            Inactive Patients <span className="font-bold">23</span>
          </span>
        </div>

        {/* Patients grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {currentPatients.map((patient) => (
            <div
              key={patient.id}
              className="bg-white rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={patient.photo}
                  alt={patient.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <p className="text-purple-500 text-sm font-medium">{patient.id}</p>
                  <h2 className="font-semibold text-gray-800">{patient.name}</h2>
                  <p className="text-gray-500 text-sm">
                    Age: {patient.age} | {patient.gender} | {patient.bloodType}
                  </p>
                </div>
              </div>

              <hr className="border-gray-200 my-2" />

              <p className="text-purple-600 font-medium mb-1 cursor-pointer">Diagnosis</p>
              <p className="text-gray-500 text-sm mb-2 line-clamp-2">{patient.diagnosis}</p>

              <hr className="border-gray-200 my-2" />

              <p className="text-gray-400 text-xs">
                Last Visit: <span className="text-blue-600">{patient.lastVisit}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination buttons fixed at bottom */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
        >
          Previous
        </button>

        {getPageNumbers().map((num) => (
          <button
            key={num}
            onClick={() => setCurrentPage(num)}
            className={`px-3 py-1 rounded border border-gray-300 ${
              currentPage === num ? "bg-blue-500 text-white" : ""
            }`}
          >
            {num}
          </button>
        ))}

        {currentPage + 5 <= totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 5, totalPages))}
            className="px-3 py-1 rounded border border-gray-300 bg-gray-100 hover:bg-gray-200"
          >
            +5
          </button>
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 rounded border border-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};