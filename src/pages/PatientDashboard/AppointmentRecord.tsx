type Record = {
  id: number;
  date: string;
  condition: string;
  treatment: string;
  tooth: number;
  note: string;
  status: "DONE" | "UPCOMING";
};

const records: Record[] = [
  {
    id: 1,
    date: "2026-01-11",
    condition: "Caries",
    treatment: "Tooth Filling",
    tooth: 9,
    note: "Patient responded well to procedure.",
    status: "DONE",
  },
  {
    id: 2,
    date: "2026-01-18",
    condition: "Caries",
    treatment: "Tooth Filling",
    tooth: 9,
    note: "Healing is normal.",
    status: "DONE",
  },
  {
    id: 3,
    date: "2026-02-03",
    condition: "Caries",
    treatment: "Tooth Filling",
    tooth: 9,
    note: "Follow-up not required.",
    status: "DONE",
  },
  {
    id: 4,
    date: "2026-02-10",
    condition: "Caries",
    treatment: "Tooth Filling",
    tooth: 8,
    note: "Healing normally.",
    status: "DONE",
  },
  {
    id: 5,
    date: "2026-02-18",
    condition: "Checkup",
    treatment: "Routine Checkup",
    tooth: 0,
    note: "All good.",
    status: "DONE",
  },
  {
    id: 6,
    date: "2026-03-02",
    condition: "Cleaning",
    treatment: "Oral Prophylaxis",
    tooth: 0,
    note: "Scheduled cleaning.",
    status: "UPCOMING",
  },
];
const sortedRecords = [...records].sort((a, b) => {
  const dateDiff =
    new Date(b.date).getTime() - new Date(a.date).getTime();

  if (dateDiff !== 0) return dateDiff;

  return b.id - a.id;
});

const formatDate = (date: string) => {
  const d = new Date(date);

  return {
    month: d
      .toLocaleString("default", { month: "short" })
      .toUpperCase(),
    day: d.getDate().toString().padStart(2, "0"),
  };
};

export function AppointmentRecord() {
  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-4 flex flex-col min-h-0">
      <h2 className="text-lg font-semibold text-gray-600">Records</h2>

      <hr className="my-3" />
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 max-h-[80vh] md:max-h-[80vh] scroll-smooth">
        {sortedRecords.map((record) => {
          const { month, day } = formatDate(record.date);

          return (
            <div
              key={record.id}
              className="bg-blue-200/60 rounded-xl shadow-sm flex flex-col sm:flex-row"
            >
              <div className="flex-shrink-0 sm:w-20 flex sm:flex-col items-center justify-between sm:justify-center border-b sm:border-b-0 sm:border-r border-white/60 px-4 py-3 sm:py-5">
                <div className="flex sm:flex-col items-center gap-2 sm:gap-0">
                  <span className="text-xs text-gray-600">
                    {month}
                  </span>
                  <span className="text-lg font-semibold text-gray-700">
                    {day}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-blue-700 text-sm">
                  🦷 {record.tooth || "-"}
                </div>
              </div>
              <div className="flex-1 p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                  <div className="grid grid-cols-2 sm:flex sm:gap-8 text-xs text-gray-700">
                    <div>
                      <p className="uppercase opacity-60">
                        Condition
                      </p>
                      <p className="font-medium">
                        {record.condition}
                      </p>
                    </div>

                    <div>
                      <p className="uppercase opacity-60">
                        Treatment
                      </p>
                      <p className="font-medium uppercase">
                        {record.treatment}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`self-start sm:self-auto text-xs px-3 py-1 rounded-full font-medium ${
                      record.status === "DONE"
                        ? "bg-green-200 text-green-700"
                        : "bg-yellow-200 text-yellow-700"
                    }`}
                  >
                    {record.status}
                  </span>
                </div>

                <div className="bg-white rounded-lg p-3 mt-3 text-sm text-gray-500 shadow-inner">
                  {record.note || "Dentist Note"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
