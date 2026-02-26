// data/staffDashboardData.ts

export interface MonthlyVolume {
  month: string;
  value: number;
  color: string;
}

export interface DentistLoad {
  name: string;
  base: number;
  extra: number;
}

export interface PieData {
  label: string;
  value: number;
  color: string;
}

/* Monthly Patient Volume Trends (Horizontal Bars) */
export const monthlyPatientVolume: MonthlyVolume[] = [
  { month: "Jan", value: 223, color: "#16A34A" },
  { month: "Feb", value: 154, color: "#F59E0B" },
  { month: "Mar", value: 321, color: "#16A34A" },
  { month: "Apr", value: 190, color: "#3B82F6" },
  { month: "May", value: 120, color: "#F59E0B" },
  { month: "Jun", value: 430, color: "#16A34A" },
  { month: "Jul", value: 56, color: "#F59E0B" },
];

/* Dentist Schedule Load */
export const dentistScheduleLoad: DentistLoad[] = [
  { name: "Dr. Lopez", base: 50, extra: 20 },
  { name: "Dr. John", base: 220, extra: 120 },
  { name: "Dr. Peter", base: 160, extra: 80 },
  { name: "Dr. Jonny", base: 90, extra: 40 },
  { name: "Dr. Villamin", base: 150, extra: 90 },
];

/* Patient Activity Summary */
export const patientActivity: PieData[] = [
  { label: "Inactive", value: 80, color: "#F59E0B" },
  { label: "Active", value: 370, color: "#16A34A" },
];

/* Patient Demographics */
export const patientDemographics: PieData[] = [
  { label: "New Patients", value: 123, color: "#2DD4BF" },
  { label: "Returning Patients", value: 23, color: "#1E3A8A" },
];