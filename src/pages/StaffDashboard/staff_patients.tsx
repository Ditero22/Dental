import React, { useState } from "react";
import { patientsData } from "./data/staff_patients";
import { Search, Eye, Download } from "lucide-react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { saveAs } from "file-saver";
import * as Papa from "papaparse";

const patientsPerPage = 8;
const rowHeight = "h-[56px]";

export const StaffPatients: React.FC = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showExportModal, setShowExportModal] = useState(false);

  // Filter patients
  const filteredPatients = patientsData.filter((patient) =>
    `${patient.name} ${patient.email} ${patient.patientId}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredPatients.length / patientsPerPage
  );

  const startIndex = (currentPage - 1) * patientsPerPage;
  const currentPatients = filteredPatients.slice(
    startIndex,
    startIndex + patientsPerPage
  );

  const emptyRows = patientsPerPage - currentPatients.length;

  // ======================
  // PDF EXPORT
  // ======================
  const exportToPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Patients Report", 14, 15);

    autoTable(doc, {
      startY: 25,
      head: [["Name", "Patient ID", "Last Visit", "Phone", "Email", "Status"]],
      body: filteredPatients.map((p) => [
        p.name,
        p.patientId,
        p.lastVisit,
        p.phone,
        p.email,
        p.status,
      ]),
    });

    doc.save("patients_report.pdf");
    setShowExportModal(false);
  };

  // ======================
  // CSV EXPORT
  // ======================
  const exportToCSV = () => {
    const csv = Papa.unparse(filteredPatients);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "patients_report.csv");
    setShowExportModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Patients</h1>

        <button
          onClick={() => setShowExportModal(true)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50 shadow-sm"
        >
          <Download size={16} />
          Export
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col min-h-[650px]">

        <div className="relative w-96 mb-5">
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Name, Email or Patient ID..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="grid grid-cols-6 bg-teal-600 text-white text-sm font-medium px-4 h-[48px] items-center rounded-t-lg">
          <div>Patient Name</div>
          <div>Patient ID</div>
          <div>Last Visit</div>
          <div>Contact</div>
          <div>Status</div>
          <div className="text-center">Actions</div>
        </div>
        <div className="flex-1 border border-t-0 rounded-b-lg overflow-hidden">

          {currentPatients.map((patient) => (
            <div
              key={patient.id}
              className={`grid grid-cols-6 items-center px-4 ${rowHeight} text-sm border-b hover:bg-gray-50`}
            >
              <div className="font-medium truncate">{patient.name}</div>
              <div>{patient.patientId}</div>
              <div>{patient.lastVisit}</div>
              <div className="text-xs leading-tight">
                <div>{patient.phone}</div>
                <div className="text-gray-500 truncate">{patient.email}</div>
              </div>
              <div>
                <span className="px-2 py-0.5 text-xs bg-green-100 text-green-600 rounded-full">
                  {patient.status}
                </span>
              </div>
              <div className="flex justify-center">
                <button className="p-1.5 rounded-full hover:bg-gray-100">
                  <Eye size={18} className="text-teal-600" />
                </button>
              </div>
            </div>
          ))}
          {Array.from({ length: emptyRows }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className={`grid grid-cols-6 items-center px-4 ${rowHeight} border-b`}
            />
          ))}

        </div>
        <div className="flex justify-between items-center mt-auto pt-4">
          <p className="text-sm text-gray-500">
            Showing {currentPatients.length} of {filteredPatients.length} Patients
          </p>

          <div className="flex gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-40"
            >
              {"<"}
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-1 border rounded-md text-sm ${
                  currentPage === index + 1
                    ? "bg-teal-600 text-white"
                    : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="px-3 py-1 border rounded-md text-sm disabled:opacity-40"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
      {showExportModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

          <div className="bg-white rounded-xl shadow-xl w-[350px] p-6">

            <h2 className="text-lg font-semibold mb-4">
              Download as:
            </h2>

            <div className="flex flex-col gap-3">

              <button
                onClick={exportToPDF}
                className="w-full py-2 border rounded-lg hover:bg-gray-50"
              >
                PDF
              </button>

              <button
                onClick={exportToCSV}
                className="w-full py-2 border rounded-lg hover:bg-gray-50"
              >
                CSV (Excel)
              </button>

              <button
                onClick={() => setShowExportModal(false)}
                className="w-full py-2 mt-2 text-gray-500 hover:text-black"
              >
                Cancel
              </button>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};