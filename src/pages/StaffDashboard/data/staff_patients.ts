export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodType: string;
  diagnosis: string;
  lastVisit: string;
  photo: string;
};

export const patientsData: Patient[] = [
  { id: "#PT0001", name: "Janine Gomez", age: 32, gender: "Female", bloodType: "O+", diagnosis: "The process of identifying a disease, condition, or injury from its signs and symptoms...", lastVisit: "06/06/2024 at 2:30PM", photo: "/images/janine.png" },
  { id: "#PT0002", name: "Graciela Chase", age: 39, gender: "Female", bloodType: "B+", diagnosis: "The process of identifying a disease, condition, or injury from its signs and symptoms...", lastVisit: "18/02/2024 at 6:30PM", photo: "/images/graciela.png" },
  { id: "#PT0003", name: "Rose Lindsey", age: 32, gender: "Female", bloodType: "AB+", diagnosis: "The process of identifying a disease, condition, or injury from its signs and symptoms...", lastVisit: "16/01/2024 at 4:45PM", photo: "/images/rose.png" },
  { id: "#PT0004", name: "Carlos Rivera", age: 45, gender: "Male", bloodType: "A+", diagnosis: "Routine check-up and monitoring of chronic condition.", lastVisit: "12/03/2024 at 10:00AM", photo: "/images/carlos.png" },
  { id: "#PT0005", name: "Maria Lopez", age: 28, gender: "Female", bloodType: "O-", diagnosis: "Follow-up for minor surgery recovery.", lastVisit: "25/01/2024 at 1:15PM", photo: "/images/maria.png" },
  { id: "#PT0006", name: "James Carter", age: 50, gender: "Male", bloodType: "B-", diagnosis: "Management of hypertension and diabetes.", lastVisit: "03/02/2024 at 9:30AM", photo: "/images/james.png" },
  { id: "#PT0007", name: "Sophia Martinez", age: 36, gender: "Female", bloodType: "AB-", diagnosis: "Routine dental check-up and preventive care.", lastVisit: "21/02/2024 at 11:45AM", photo: "/images/sophia.png" },
  { id: "#PT0008", name: "Liam Johnson", age: 42, gender: "Male", bloodType: "A-", diagnosis: "Evaluation of chronic back pain and therapy plan.", lastVisit: "14/03/2024 at 3:00PM", photo: "/images/liam.png" },
  { id: "#PT0009", name: "Olivia Brown", age: 30, gender: "Female", bloodType: "O+", diagnosis: "Follow-up for allergy treatment.", lastVisit: "08/01/2024 at 2:00PM", photo: "/images/olivia.png" },
  { id: "#PT0010", name: "Ethan Wilson", age: 55, gender: "Male", bloodType: "B+", diagnosis: "Cardiac health monitoring and check-up.", lastVisit: "17/02/2024 at 10:30AM", photo: "/images/ethan.png" },
  { id: "#PT0011", name: "Emma Davis", age: 29, gender: "Female", bloodType: "A+", diagnosis: "Routine physical exam and lab tests.", lastVisit: "19/03/2024 at 11:15AM", photo: "/images/emma.png" },
  { id: "#PT0012", name: "Noah Miller", age: 38, gender: "Male", bloodType: "AB+", diagnosis: "Follow-up for orthopedic injury.", lastVisit: "05/02/2024 at 4:00PM", photo: "/images/noah.png" },
  { id: "#PT0013", name: "Isabella Garcia", age: 33, gender: "Female", bloodType: "O-", diagnosis: "Nutrition consultation and diet plan.", lastVisit: "28/01/2024 at 1:45PM", photo: "/images/isabella.png" },
  { id: "#PT0014", name: "Mason Anderson", age: 47, gender: "Male", bloodType: "A-", diagnosis: "Routine blood pressure and diabetes monitoring.", lastVisit: "11/03/2024 at 9:15AM", photo: "/images/mason.png" },
  { id: "#PT0015", name: "Mia Thomas", age: 26, gender: "Female", bloodType: "B-", diagnosis: "Follow-up for minor surgical procedure.", lastVisit: "23/02/2024 at 12:30PM", photo: "/images/mia.png" },
  { id: "#PT0016", name: "Alexander Scott", age: 41, gender: "Male", bloodType: "O+", diagnosis: "Routine health check-up and preventive care.", lastVisit: "07/03/2024 at 2:45PM", photo: "/images/alexander.png" },
  { id: "#PT0017", name: "Charlotte Hill", age: 35, gender: "Female", bloodType: "AB-", diagnosis: "Follow-up for chronic migraine treatment.", lastVisit: "15/01/2024 at 3:30PM", photo: "/images/charlotte.png" },
  { id: "#PT0018", name: "Benjamin Wright", age: 49, gender: "Male", bloodType: "B+", diagnosis: "Cardiac check-up and medication review.", lastVisit: "02/02/2024 at 11:00AM", photo: "/images/benjamin.png" },
  { id: "#PT0019", name: "Amelia King", age: 31, gender: "Female", bloodType: "O-", diagnosis: "Routine gynecological exam and consultation.", lastVisit: "20/03/2024 at 10:30AM", photo: "/images/amelia.png" },
  { id: "#PT0020", name: "William Lee", age: 44, gender: "Male", bloodType: "A+", diagnosis: "Follow-up for orthopedic and physiotherapy sessions.", lastVisit: "09/03/2024 at 1:00PM", photo: "/images/william.png" },
];