import { billingData } from "./data/staff_billing";
import { Calendar, Phone, Mail, MapPin } from "lucide-react";

export function StaffBilling() {
  const subtotal = billingData.services.reduce(
    (acc, item) => acc + item.qty * item.unitPrice,
    0
  );

  return (
    <div className="flex flex-col gap-6 h-full mt-4">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Record Payment</h1>
          <p className="text-sm text-gray-500">
            Process and record patient payment for completed treatments
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50">
            Payment History
          </button>
          <button className="px-4 py-2 border rounded-lg text-sm bg-white hover:bg-gray-50">
            Print Receipt
          </button>
        </div>
      </div>

      <div className="flex gap-6">

        {/* LEFT PANEL */}
        <div className="w-1/3 bg-white rounded-xl shadow p-6">

          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">{billingData.name}</h2>
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
              {billingData.status}
            </span>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              Date of Birth: {billingData.dob}
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              Contact: {billingData.phone}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              Email: {billingData.email}
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Address: {billingData.address}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t text-sm">
            <div className="flex justify-between text-red-500">
              <span>Outstanding Balance</span>
              <span>₱ {billingData.outstandingBalance.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-green-600 mt-2">
              <span>Total Paid</span>
              <span>₱ {billingData.totalPaid.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex-1 bg-white rounded-xl shadow p-6 space-y-6">

          <div>
            <h2 className="font-semibold text-lg">Treatment & Services</h2>
            <p className="text-sm text-gray-500">
              Appointment: {billingData.appointmentDate}
            </p>
          </div>

          <div className="bg-teal-500 text-white rounded-lg p-4 flex justify-between text-sm">
            <div>
              <p>Attending Dentist</p>
              <p className="font-semibold">{billingData.dentist}</p>
            </div>
            <div>
              <p>Treatment Date</p>
              <p className="font-semibold">{billingData.treatmentDate}</p>
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="text-left py-2">Service Description</th>
                <th className="text-center">QTY</th>
                <th className="text-right">Unit Price</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {billingData.services.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{item.description}</td>
                  <td className="text-center">{item.qty}</td>
                  <td className="text-right">₱ {item.unitPrice}</td>
                  <td className="text-right">
                    ₱ {(item.qty * item.unitPrice).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="text-sm space-y-1 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₱ {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-</span>
            </div>
            <div className="flex justify-between font-semibold text-base mt-2">
              <span>Total Amount Due</span>
              <span>₱ {subtotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="border-t pt-6 space-y-4">
            <h3 className="font-semibold">Payment Details</h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <input
                type="text"
                placeholder="Payment Amount"
                className="border rounded-lg px-3 py-2"
              />
              <select className="border rounded-lg px-3 py-2">
                <option>Cash</option>
                <option>GCash</option>
                <option>Card</option>
              </select>
              <input
                type="date"
                className="border rounded-lg px-3 py-2"
              />
              <input
                type="text"
                placeholder="Official Receipt No."
                className="border rounded-lg px-3 py-2"
              />
            </div>

            <textarea
              placeholder="Add any additional notes or remarks about this payment..."
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />

            <div className="bg-orange-100 text-orange-700 text-xs p-3 rounded-lg">
              Important Reminders:
              <ul className="list-disc pl-5 mt-1">
                <li>Ensure payment amount matches the total amount due</li>
                <li>Double-check official receipt number before saving</li>
                <li>Receipt will be automatically generated after confirmation</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                Confirm Payment
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}