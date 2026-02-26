export interface Transaction {
  time: string;
  patientName: string;
  commission: number;
  totalEarnings: number;
  deductions: number;
  status: 'Paid' | 'Pending';
}

export const earningsTrend = [
  { month: 'Jan', value: 25000 },
  { month: 'Feb', value: 50000 },
  { month: 'Mar', value: 75000 },
  { month: 'Apr', value: 60000 },
  { month: 'May', value: 90000 },
  { month: 'Jun', value: 50000 },
  { month: 'Jul', value: 45000 },
  { month: 'Aug', value: 80000 },
  { month: 'Sep', value: 40000 },
  { month: 'Oct', value: 35000 },
  { month: 'Nov', value: 50000 },
  { month: 'Dec', value: 20000 },
];

export const revenueData = [
  { month: 'Jul', value: 60000 },
  { month: 'Aug', value: 70000 },
  { month: 'Sep', value: 80000 },
  { month: 'Oct', value: 85000 },
  { month: 'Nov', value: 90000 },
  { month: 'Dec', value: 100000 },
];

export const transactions: Transaction[] = [
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 50000, totalEarnings: 10000, deductions: 2300, status: 'Paid' },
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 10000, totalEarnings: 10000, deductions: 2300, status: 'Paid' },
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 1500, totalEarnings: 10000, deductions: 2300, status: 'Paid' },
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 5000, totalEarnings: 2000, deductions: 2300, status: 'Paid' },
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 2000, totalEarnings: 2000, deductions: 2300, status: 'Paid' },
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 1500, totalEarnings: 1000, deductions: 2300, status: 'Paid' },
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 1500, totalEarnings: 1000, deductions: 2300, status: 'Paid' },
  { time: '1:30 PM', patientName: 'Maria dela Cruz', commission: 1500, totalEarnings: 1000, deductions: 2300, status: 'Paid' },
];