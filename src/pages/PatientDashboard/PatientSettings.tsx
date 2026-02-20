import { useState } from "react";
import { Navbar } from "@/components";
import { useAuth } from "@/context";

type SettingsTab = "personal" | "password";

export function PatientSettings() {
  const { loggedUser } = useAuth();
  const userName = loggedUser?.name || "User";
  const [activeTab, setActiveTab] = useState<SettingsTab>("personal");
  const [email, setEmail] = useState(loggedUser?.email || "");
  const [contact, setContact] = useState(loggedUser?.contact || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePersonalUpdate = () => {
    console.log("Updated Email:", email);
    console.log("Updated Contact:", contact);
    alert("Personal details updated!");
  };

  const handlePasswordUpdate = () => {
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    console.log("Password updated:", newPassword);
    alert("Password updated!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar mode="dashboard" userName={userName} />

      <div className="flex flex-1 justify-center items-start mt-20 mb-5 gap-6 px-6">
        <div className="w-56 bg-white rounded-xl shadow-lg p-4 h-full sticky top-20">
          <h2 className="text-lg font-semibold mb-6 text-center">Settings</h2>
          <ul className="flex flex-col gap-3">
            <li
              className={`p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition shadow-sm ${
                activeTab === "personal" ? "bg-blue-100 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Details
            </li>
            <li
              className={`p-3 rounded-lg cursor-pointer hover:bg-blue-50 transition shadow-sm ${
                activeTab === "password" ? "bg-blue-100 font-semibold" : ""
              }`}
              onClick={() => setActiveTab("password")}
            >
              Change Password
            </li>
          </ul>
        </div>
        <div className="w-96 bg-white rounded-xl shadow-lg p-6 h-full">
          {activeTab === "personal" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center">Personal Details</h3>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ boxShadow: "0 0 1px 1px rgba(0,0,0,0.1)" }}
                    />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contact Number</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ boxShadow: "0 0 1px 1px rgba(0,0,0,0.1)" }}
                    />
                </div>
                <button
                  onClick={handlePersonalUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
                >
                  Update Personal Details
                </button>
              </div>
            </div>
          )}

          {activeTab === "password" && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center">Change Password</h3>
              <div className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1">Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ boxShadow: "0 0 1px 1px rgba(0,0,0,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">New Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ boxShadow: "0 0 1px 1px rgba(0,0,0,0.1)" }}
                    />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                    style={{ boxShadow: "0 0 1px 1px rgba(0,0,0,0.1)" }}
                    />
                </div>
                <button
                  onClick={handlePasswordUpdate}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow"
                >
                  Update Password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}